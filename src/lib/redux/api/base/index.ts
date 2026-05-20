import { type BaseQueryApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { handleApiError } from './errorHandler'
import { prepareHeaders } from './headerHandler'
import { handleApiResponse } from './responseHandler'
import { getApiBaseUrl } from '@/lib/utils'

export const apiBase = async(
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: { signal?: AbortSignal }
) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: getApiBaseUrl(),
    prepareHeaders
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

export * from './publicApiBase'
