import { CommonRequestParams } from './types/query-params'

export function buildQueryUrl<T extends CommonRequestParams>(
  params: T | undefined,
  baseUrl: string,
  specificParams?: Record<
    string,
    string | number | boolean | Array<string | number | boolean> | undefined
  >
): string {
  if (!params && (!specificParams || !Object.values(specificParams).some((v) => v !== undefined))) {
    return baseUrl
  }

  const searchParams = new URLSearchParams()

  if (params?.searchText) {
    searchParams.append('Filter.SearchText', params.searchText)
  }

  if (params?.pagination?.pageNumber) {
    searchParams.append('Pagination.PageNumber', params.pagination.pageNumber.toString())
  }

  if (params?.pagination?.pageSize) {
    searchParams.append('Pagination.PageSize', params.pagination.pageSize.toString())
  }

  if (specificParams) {
    Object.entries(specificParams).forEach(([key, value]) => {
      if (value !== undefined) {
        if (Array.isArray(value)) {
          searchParams.append(key, value.map((item) => item.toString()).join(','))
        } else {
          searchParams.append(key, value.toString())
        }
      }
    })
  }

  const queryString = searchParams.toString()
  return queryString ? `${baseUrl}?${queryString}` : baseUrl
}
