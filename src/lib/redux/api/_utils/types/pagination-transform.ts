export interface PaginationResponse {
  totalCount: number
  pageNumber?: number
  pageSize?: number
}

export interface PaginatedApiResponse<T> extends PaginationResponse {
  items: T[]
}

export interface BackendPagination {
  page?: number
  limit?: number
  total?: number
  totalItems?: number
  totalPages?: number
}

export interface BackendPaginatedResponse<T> {
  data: T[]
  pagination?: BackendPagination
}

export type PaginatedResponseInput<T> = PaginatedApiResponse<T> | BackendPaginatedResponse<T>

export interface PaginationMeta {
  page: number
  limit: number
  total: number
  totalItems: number
  totalPages: number
}

export interface PaginationTransform {
  totalCount: number
  currentPageCount: number
  pageNumber: number
  pageSize: number
}

export interface PaginatedTransformResult<T> extends PaginationTransform {
  data: T[]
  items: T[]
  pagination: PaginationMeta
}
