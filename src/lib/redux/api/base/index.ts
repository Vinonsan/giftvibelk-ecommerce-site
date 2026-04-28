import { createRequestUrl, resolveRequestBody } from '@/lib/redux/api/base/apiUtils'
import { normalizeApiError } from '@/lib/redux/api/base/errorHandler'
import { createApiHeaders } from '@/lib/redux/api/base/headerHandler'
import { parseApiResponse } from '@/lib/redux/api/base/responseHandler'
import type { ApiRequestConfig, ApiResponse } from '@/lib/types/api'

async function request<T>(config: ApiRequestConfig): Promise<ApiResponse<T>> {
  try {
    const isFormData = typeof FormData !== 'undefined' && config.body instanceof FormData
    const response = await fetch(createRequestUrl(config), {
      method: config.method ?? 'GET',
      headers: createApiHeaders(config.headers, isFormData),
      body: resolveRequestBody(config.body),
      cache: config.cache ?? 'no-store',
      next: config.next,
    })

    return await parseApiResponse<T>(response)
  } catch (error) {
    return normalizeApiError(error)
  }
}

export const apiClient = {
  request,
  get<T>(endpoint: string, params?: ApiRequestConfig['params'], headers?: HeadersInit) {
    return request<T>({ endpoint, params, headers, method: 'GET' })
  },
  post<T>(endpoint: string, body?: ApiRequestConfig['body'], headers?: HeadersInit) {
    return request<T>({ endpoint, body, headers, method: 'POST' })
  },
  put<T>(endpoint: string, body?: ApiRequestConfig['body'], headers?: HeadersInit) {
    return request<T>({ endpoint, body, headers, method: 'PUT' })
  },
  patch<T>(endpoint: string, body?: ApiRequestConfig['body'], headers?: HeadersInit) {
    return request<T>({ endpoint, body, headers, method: 'PATCH' })
  },
  delete<T>(endpoint: string, body?: ApiRequestConfig['body'], headers?: HeadersInit) {
    return request<T>({ endpoint, body, headers, method: 'DELETE' })
  },
}

export * from './apiUtils'
export * from './errorHandler'
export * from './headerHandler'
export * from './responseHandler'
