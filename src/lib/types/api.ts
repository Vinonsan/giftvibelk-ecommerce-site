import type { QueryParams } from '@/lib/redux/api/_utils/types/query-params'

export interface ApiErrorShape {
  title: string
  detail: string
  status: number
  code: string
  extensions: Record<string, unknown>
}

export interface ApiErrorResponse {
  result: null
  isError: true
  error: ApiErrorShape
}

export interface ApiSuccessResponse<T = unknown> {
  result: T
  isError: false
  message?: string
  meta?: Record<string, unknown>
}

export type ApiResponse<T = unknown> = ApiSuccessResponse<T> | ApiErrorResponse

export type ApiMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export interface ApiRequestConfig {
  endpoint: string
  method?: ApiMethod
  params?: QueryParams
  body?: BodyInit | Blob | FormData | URLSearchParams | Record<string, unknown> | null
  headers?: HeadersInit
  cache?: RequestCache
  next?: NextFetchRequestConfig
}

export interface ApiMutationState<T = unknown> {
  data: T | null
  error: ApiErrorShape | null
  isLoading: boolean
  isSuccess: boolean
}

export interface ApiQueryState<T = unknown> extends ApiMutationState<T> {
  refetch: () => Promise<void>
}

export interface ApiRequestStatus {
  key: string
  loading: boolean
  error: string | null
  updatedAt: number | null
}
