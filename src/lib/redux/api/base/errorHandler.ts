import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react'

import { isApiError } from './apiUtils'
import type { ApiResponse } from './types/api'

export interface CustomFetchBaseQueryError {
  isError: boolean
  title: string
  detail: string
  status: number
  code: string
}

export const handleApiError = (error: FetchBaseQueryError): CustomFetchBaseQueryError | null => {
  if (!error.data || typeof error.data !== 'object' || !('isError' in error.data)) {
    return null
  }

  const apiResponse = error.data as ApiResponse

  if (!isApiError(apiResponse)) {
    return null
  }

  const apiError = apiResponse.error

  return {
    isError: true,
    title: apiError.title,
    detail: apiError.detail,
    status: apiError.status,
    code: apiError.code
  }
}

export const isCustomApiError = (error: unknown): error is CustomFetchBaseQueryError => {
  return (
    error !== null &&
    typeof error === 'object' &&
    'detail' in error &&
    'isError' in error &&
    'title' in error &&
    'status' in error &&
    'code' in error
  )
}
