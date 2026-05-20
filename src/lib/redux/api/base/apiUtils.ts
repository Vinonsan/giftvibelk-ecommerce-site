import type { ApiError, ApiErrorResponse, ApiResponse, ApiSuccessResponse } from './types/api'

export const isApiError = <T>(response: ApiResponse<T>): response is ApiErrorResponse => {
  return response.isError
}

export const isApiSuccess = <T>(response: ApiResponse<T>): response is ApiSuccessResponse<T> => {
  return !response.isError
}

export const extractApiData = <T>(response: ApiSuccessResponse<T>): T => {
  return response.result
}

export const extractApiError = (response: ApiErrorResponse): ApiError => {
  return response.error
}
