import type { ApiErrorResponse, ApiErrorShape } from '@/lib/types/api'

function createFallbackError(message: string, status = 500, code = 'API_ERROR'): ApiErrorResponse {
  return {
    result: null,
    isError: true,
    error: {
      title: 'Request Failed',
      detail: message,
      status,
      code,
      extensions: {},
    },
  }
}

export function normalizeApiError(error: unknown): ApiErrorResponse {
  if (error && typeof error === 'object' && 'isError' in error) {
    return error as ApiErrorResponse
  }

  if (error instanceof Error) {
    return createFallbackError(error.message)
  }

  return createFallbackError('Something went wrong while calling the API.')
}

export function getApiErrorMessage(error: ApiErrorShape | null | undefined): string {
  return error?.detail ?? error?.title ?? 'Something went wrong.'
}
