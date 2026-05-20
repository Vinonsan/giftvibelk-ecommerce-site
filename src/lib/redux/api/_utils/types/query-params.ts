export interface CommonPagingParams {
  pageNumber?: number
  pageSize?: number
}

export interface CommonSearchParams {
  searchText?: string
}

export interface CommonRequestParams extends CommonSearchParams {
  pagination?: CommonPagingParams
}
