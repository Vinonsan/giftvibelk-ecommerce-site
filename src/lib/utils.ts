export const isBrowser = (): boolean => typeof window !== 'undefined'

export const getApiBaseUrl = (): string => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  if (apiUrl) {
    return apiUrl.endsWith('/') ? apiUrl : `${apiUrl}/`
  }

  const backendBaseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL
  const apiPrefix = process.env.NEXT_PUBLIC_API_PREFIX ?? '/api'

  if (backendBaseUrl) {
    const normalizedBase = backendBaseUrl.endsWith('/') ? backendBaseUrl.slice(0, -1) : backendBaseUrl
    const normalizedPrefix = apiPrefix.startsWith('/') ? apiPrefix : `/${apiPrefix}`
    return `${normalizedBase}${normalizedPrefix}/`
  }

  return ''
}
