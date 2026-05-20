const ONE_DAY_MS = 24 * 60 * 60 * 1000

export const ADMIN_TOKEN_KEY = 'admin_token'
export const ACCESS_TOKEN_KEY = 'giftvibelk_access_token'
export const ADMIN_ROLE_KEY = 'admin_role'
export const ADMIN_EXPIRES_AT_KEY = 'admin_expires_at'

function getJwtExpiry(token: string) {
  try {
    const payload = JSON.parse(window.atob(token.split('.')[1] ?? '')) as { exp?: number }
    return payload.exp ? payload.exp * 1000 : null
  } catch {
    return null
  }
}

export function saveAdminSession(token: string, role: string) {
  const expiresAt = getJwtExpiry(token) ?? Date.now() + ONE_DAY_MS

  window.localStorage.setItem(ADMIN_TOKEN_KEY, token)
  window.localStorage.setItem(ACCESS_TOKEN_KEY, token)
  window.localStorage.setItem(ADMIN_ROLE_KEY, role)
  window.localStorage.setItem(ADMIN_EXPIRES_AT_KEY, String(expiresAt))
}

export function clearAdminSession() {
  window.localStorage.removeItem(ADMIN_TOKEN_KEY)
  window.localStorage.removeItem(ACCESS_TOKEN_KEY)
  window.localStorage.removeItem(ADMIN_ROLE_KEY)
  window.localStorage.removeItem(ADMIN_EXPIRES_AT_KEY)
}

export function getAdminSessionToken() {
  if (typeof window === 'undefined') return null

  const token = window.localStorage.getItem(ADMIN_TOKEN_KEY) ?? window.localStorage.getItem(ACCESS_TOKEN_KEY)
  const expiresAt = Number(window.localStorage.getItem(ADMIN_EXPIRES_AT_KEY) ?? 0)

  if (!token) return null

  if (expiresAt && Date.now() > expiresAt) {
    clearAdminSession()
    return null
  }

  return token
}
