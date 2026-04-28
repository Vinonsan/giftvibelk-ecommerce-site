import type { ApiErrorResponse, ApiResponse, ApiSuccessResponse } from '@/lib/types/api'

function createErrorResponse(status: number, detail: string, code = 'API_RESPONSE_ERROR'): ApiErrorResponse {
  return {
    result: null,
    isError: true,
    error: {
      title: 'API Error',
      detail,
      status,
      code,
      extensions: {},
    },
  }
}

export async function parseApiResponse<T>(response: Response): Promise<ApiResponse<T>> {
  const contentType = response.headers.get('content-type') ?? ''
  const isJson = contentType.includes('application/json')
  const payload = isJson ? await response.json() : await response.text()

  if (!response.ok) {
    if (payload && typeof payload === 'object' && 'isError' in payload) {
      return payload as ApiErrorResponse
    }

    const detail =
      typeof payload === 'string'
        ? payload
        : (payload as { message?: string; error?: { detail?: string } })?.message ??
          (payload as { error?: { detail?: string } })?.error?.detail ??
          'Request failed.'

    return createErrorResponse(response.status, detail)
  }

  if (payload && typeof payload === 'object' && 'isError' in payload) {
    return payload as ApiResponse<T>
  }

  return {
    result: payload as T,
    isError: false,
  } satisfies ApiSuccessResponse<T>
}
