export interface PaginationResponse {
  totalCount: number
  pageNumber?: number
  pageSize?: number
}

export interface PaginatedApiResponse<T> extends PaginationResponse {
  items: T[]
}

export interface PaginationTransform {
  totalCount: number
  currentPageCount: number
  pageNumber: number
  pageSize: number
}

export interface PaginatedTransformResult<T> extends PaginationTransform {
  data: T[]
}
