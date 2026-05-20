export interface ApiError {
  title: string
  detail: string
  status: number
  code: string
  extensions?: Record<string, unknown>
}

export interface ApiSuccessResponse<T = unknown> {
  result: T
  isError: false
  error: null
}

export interface ApiErrorResponse {
  result: null
  isError: true
  error: ApiError
}

export type ApiResponse<T = unknown> = ApiSuccessResponse<T> | ApiErrorResponse
