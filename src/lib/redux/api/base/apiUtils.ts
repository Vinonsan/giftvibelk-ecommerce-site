import { buildQueryString } from '@/lib/redux/api/_utils/queryParams'
import type { ApiRequestConfig } from '@/lib/types/api'
import { getApiPrefix } from '@/lib/utils/environment'

export function createRequestUrl({ endpoint, params }: Pick<ApiRequestConfig, 'endpoint' | 'params'>): string {
  const normalizedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`
  return `${getApiPrefix()}${normalizedEndpoint}${buildQueryString(params)}`
}

export function resolveRequestBody(body: ApiRequestConfig['body']): BodyInit | undefined {
  if (!body) {
    return undefined
  }

  if (
    typeof body === 'string' ||
    body instanceof FormData ||
    body instanceof Blob ||
    body instanceof URLSearchParams
  ) {
    return body
  }

  return JSON.stringify(body)
}
