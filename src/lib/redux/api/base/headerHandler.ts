import { AUTH_TOKEN_COOKIE_NAME } from '@/lib/auth'
import { getCookie } from '@/lib/utils/storage'

export function createApiHeaders(headers?: HeadersInit, isFormData = false): Headers {
  const nextHeaders = new Headers(headers)
  const authToken = getCookie(AUTH_TOKEN_COOKIE_NAME)

  if (!isFormData && !nextHeaders.has('content-type')) {
    nextHeaders.set('content-type', 'application/json')
  }

  if (authToken && !nextHeaders.has('authorization')) {
    nextHeaders.set('authorization', `Bearer ${authToken}`)
  }

  nextHeaders.set('x-origin', 'giftvibelk-web')

  return nextHeaders
}
