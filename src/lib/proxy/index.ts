import { NextRequest } from 'next/server'

import https from 'https'

import { ApiErrorResponse } from '@/lib/types/api'
import { getApiPrefix, getBackendBaseUrl, getProxyTimeout } from '@/lib/utils/environment'

function createErrorResponse(
  title: string,
  detail: string,
  status: number,
  code: string
): Response {
  const errorResponse: ApiErrorResponse = {
    result: null,
    isError: true,
    error: {
      title,
      detail,
      status,
      code,
      extensions: {}
    }
  }

  return Response.json(errorResponse, { status })
}

const HOP_BY_HOP = new Set([
  'connection',
  'keep-alive',
  'proxy-authenticate',
  'proxy-authorization',
  'te',
  'trailers',
  'transfer-encoding',
  'upgrade'
])

function stripHopByHop(headers: Headers) {
  const out = new Headers()
  headers.forEach((v, k) => {
    if (!HOP_BY_HOP.has(k.toLowerCase())) out.set(k, v)
  })
  return out
}

export type ProxyOptions = {
  backendBase?: string
  apiPrefix?: string
  backendPrefix?: string
  timeoutMs?: number
  allowList?: RegExp[]
  denyList?: RegExp[]
  forwardCookies?: boolean
  forwardAuthHeader?: boolean
  extraHeaders?: Record<string, string>
}

export async function proxyRequest(req: NextRequest, options: ProxyOptions = {}) {
  const {
    backendBase = getBackendBaseUrl(),
    apiPrefix = getApiPrefix(),
    backendPrefix = process.env.BACKEND_PREFIX ?? '/',
    timeoutMs = getProxyTimeout(),
    allowList,
    denyList,
    forwardCookies = true,
    forwardAuthHeader = true,
    extraHeaders = {}
  } = options

  if (!backendBase) {
    return createErrorResponse(
      'Configuration Error',
      'Backend base URL is not configured. Please contact support.',
      500,
      'MISSING_BACKEND_URL'
    )
  }

  const incomingUrl = new URL(req.url)
  const incomingPath = incomingUrl.pathname

  const pathAfterApi = incomingPath.startsWith(apiPrefix)
    ? incomingPath.slice(apiPrefix.length) || '/'
    : incomingPath

  const backendPath =
    (backendPrefix.endsWith('/') ? backendPrefix.slice(0, -1) : backendPrefix) +
    (pathAfterApi.startsWith('/') ? pathAfterApi : `/${pathAfterApi}`)

  if (allowList && !allowList.some((rx) => rx.test(backendPath))) {
    return createErrorResponse(
      'Access Denied',
      'This endpoint is not allowed by the proxy configuration.',
      403,
      'ENDPOINT_NOT_ALLOWED'
    )
  }
  if (denyList && denyList.some((rx) => rx.test(backendPath))) {
    return createErrorResponse(
      'Access Blocked',
      'This endpoint has been blocked by the proxy configuration.',
      403,
      'ENDPOINT_BLOCKED'
    )
  }

  const backendUrl = new URL(backendPath, backendBase)
  incomingUrl.searchParams.forEach((v, k) => backendUrl.searchParams.set(k, v))

  const fwdHeaders = new Headers()
  const ct = req.headers.get('content-type')
  if (ct) fwdHeaders.set('content-type', ct)

  if (forwardAuthHeader) {
    const auth = req.headers.get('authorization')
    if (auth) fwdHeaders.set('authorization', auth)
  }
  if (forwardCookies) {
    const cookie = req.headers.get('cookie')
    if (cookie) fwdHeaders.set('cookie', cookie)
  }

  const ua = req.headers.get('user-agent')
  if (ua) fwdHeaders.set('user-agent', ua)
  const ip = req.headers.get('x-forwarded-for') || (req as { ip?: string }).ip || ''
  if (ip) fwdHeaders.set('x-forwarded-for', ip.toString())

  for (const [k, v] of req.headers) {
    const lk = k.toLowerCase()
    if (lk === 'x-request-id') fwdHeaders.set('x-request-id', v)
    if (lk === 'x-origin') fwdHeaders.set('x-origin', v)
  }

  for (const [k, v] of Object.entries(extraHeaders)) fwdHeaders.set(k, v)

  let body: BodyInit | null = null
  if (!['GET', 'HEAD'].includes(req.method)) {
    body = req.body
  }

  const controller = new AbortController()
  const t = setTimeout(() => controller.abort(), timeoutMs)

  let backendRes: Response
  try {
    const fetchOptions: RequestInit & {
      duplex?: 'half'
      agent?: https.Agent
    } = {
      method: req.method,
      headers: fwdHeaders,
      signal: controller.signal
    }

    if (body) {
      fetchOptions.body = body
      fetchOptions.duplex = 'half'
    }

    backendRes = await fetch(backendUrl.toString(), fetchOptions)
  } catch (e: unknown) {
    clearTimeout(t)

    const isTimeout = e instanceof Error && e.name === 'AbortError'
    const status = isTimeout ? 504 : 502

    if (isTimeout) {
      return createErrorResponse(
        'Request Timeout',
        'The request to the backend service timed out. Please try again later.',
        status,
        'UPSTREAM_TIMEOUT'
      )
    }

    return createErrorResponse('Bad Gateway', 'Something went wrong', status, 'UPSTREAM_ERROR')
  }

  clearTimeout(t)

  const resHeaders = stripHopByHop(backendRes.headers)
  resHeaders.set('x-backend-url', backendUrl.toString()) //TODO: Remove this after testing

  const { status, statusText } = backendRes

  return new Response(backendRes.body, { status, statusText, headers: resHeaders })
}
