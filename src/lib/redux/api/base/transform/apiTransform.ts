import { extractApiData, extractApiError, isApiError, isApiSuccess } from '../apiUtils'
import { ApiErrorResponse, ApiResponse } from '../types/api'

export const transformApiResponse = <T, R = T>(
  response: ApiResponse<T>,
  transformFn?: (_data: T) => R
): R => {
  if (isApiError(response)) {
    const error = extractApiError(response)
    throw new Error(`${error.title}: ${error.detail}`)
  }

  if (isApiSuccess(response)) {
    const data = extractApiData(response)
    return transformFn ? transformFn(data) : (data as unknown as R)
  }

  throw new Error('Invalid API response format')
}

export const createStandardizedError = (
  error: ApiErrorResponse
): {
  data: {
    error: {
      title: string
      detail: string
      status: number
      code: string
    }
  }
  status: number
} => {
  const apiError = extractApiError(error)
  return {
    data: {
      error: {
        title: apiError.title,
        detail: apiError.detail,
        status: apiError.status,
        code: apiError.code
      }
    },
    status: apiError.status
  }
}
