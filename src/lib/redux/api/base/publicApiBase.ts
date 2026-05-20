import { type BaseQueryApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { getApiBaseUrl, isBrowser } from '@/lib/utils'

import { handleApiError } from './errorHandler'
import { handleApiResponse } from './responseHandler'

export const publicApiBase = async(
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: { signal?: AbortSignal }
) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: getApiBaseUrl(),
    prepareHeaders: (headers) => {
      if (isBrowser()) {
        headers.set('x-origin', window.location.host)
      }

      return headers
    },
  })

  const result = await baseQuery(args, api, extraOptions)

  if (result.error) {
    const processedError = handleApiError(result.error)

    if (processedError) {
      return { error: processedError }
    }
  }

  if (result.data) {
    const processedError = handleApiResponse(result.data)

    if (processedError) {
      return { error: processedError }
    }
  }

  return result
}
