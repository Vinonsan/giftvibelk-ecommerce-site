import type { QueryParams } from '@/lib/redux/api/_utils/types/query-params'

export function buildQueryString(params?: QueryParams): string {
  if (!params) {
    return ''
  }

  const searchParams = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    if (value === null || value === undefined || value === '') {
      return
    }

    if (Array.isArray(value)) {
      value.forEach((item) => searchParams.append(key, String(item)))
      return
    }

    searchParams.set(key, String(value))
  })

  const queryString = searchParams.toString()
  return queryString ? `?${queryString}` : ''
}
