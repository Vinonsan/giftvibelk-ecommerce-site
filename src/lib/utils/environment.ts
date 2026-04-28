export const isDevelopment = (): boolean => {
  return process.env.NODE_ENV === 'development'
}

export const isProduction = (): boolean => {
  return process.env.NODE_ENV === 'production'
}

export const isBrowser = (): boolean => {
  return typeof window !== 'undefined'
}

export const hasDocument = (): boolean => {
  return typeof document !== 'undefined'
}

export const getApiPrefix = (): string => {
  return process.env.NEXT_PUBLIC_API_PREFIX ?? process.env.API_PREFIX ?? '/api'
}

export const getBackendBaseUrl = (): string => {
  return process.env.BACKEND_BASE_URL ?? ''
}

export const getProxyTimeout = (): number => {
  const value = Number(process.env.PROXY_TIMEOUT_MS ?? 15000)
  return Number.isFinite(value) && value > 0 ? value : 15000
}
