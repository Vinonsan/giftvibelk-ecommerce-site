import { isApiError } from './apiUtils'
import { createStandardizedError } from './transform/apiTransform'
import { ApiResponse } from './types/api'

interface CustomFetchBaseQueryError {
  status: number
  data?: {
    error: {
      title: string
      detail: string
      status: number
      code: string
    }
  }
}

export const handleApiResponse = (data: unknown): CustomFetchBaseQueryError | null => {
  if (!data || typeof data !== 'object' || !('isError' in data)) {
    return null
  }

  const apiResponse = data as ApiResponse

  if (!isApiError(apiResponse)) {
    return null
  }

  const standardizedError = createStandardizedError(apiResponse)

  return {
    status: standardizedError.status,
    data: standardizedError.data
  }
}
