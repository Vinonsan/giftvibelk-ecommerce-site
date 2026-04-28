import { isBrowser } from '@/lib/utils/environment'

export function setCookie(name: string, value: string, maxAgeSeconds?: number, path = '/'): void {
  if (!isBrowser()) {
    return
  }

  const maxAge = maxAgeSeconds ? `; max-age=${maxAgeSeconds}` : ''
  document.cookie = `${name}=${encodeURIComponent(value)}; path=${path}${maxAge}; SameSite=Lax`
}

export function getCookie(name: string): string | null {
  if (!isBrowser()) {
    return null
  }

  const prefix = `${name}=`
  const match = document.cookie.split('; ').find((item) => item.startsWith(prefix))

  return match ? decodeURIComponent(match.slice(prefix.length)) : null
}

export function removeCookie(name: string, path = '/'): void {
  if (!isBrowser()) {
    return
  }

  document.cookie = `${name}=; path=${path}; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax`
}
