'use client'

import { useCallback, useEffect, useState } from 'react'

import { apiClient } from '@/lib/redux/api/base'
import { getApiErrorMessage } from '@/lib/redux/api/base/errorHandler'
import { useAppDispatch } from '@/lib/redux/hooks'
import { requestFailed, requestStarted, requestSucceeded } from '@/lib/redux/slices/common'
import type { ApiMethod, ApiMutationState, ApiQueryState } from '@/lib/types/api'

function createRequestKey(method: string, endpoint: string): string {
  return `${method.toUpperCase()}:${endpoint}`
}

export function useApiQuery<TResponse = unknown>(
  endpoint: string,
  enabled = true,
): ApiQueryState<TResponse> {
  const dispatch = useAppDispatch()
  const [state, setState] = useState<Omit<ApiQueryState<TResponse>, 'refetch'>>({
    data: null,
    error: null,
    isLoading: enabled,
    isSuccess: false,
  })

  const requestKey = createRequestKey('GET', endpoint)

  const run = useCallback(async (showLoadingState = true) => {
    dispatch(requestStarted(requestKey))

    if (showLoadingState) {
      setState((current) => ({ ...current, isLoading: true, error: null }))
    }

    const response = await apiClient.get<TResponse>(endpoint)

    if (response.isError) {
      dispatch(requestFailed(requestKey, getApiErrorMessage(response.error)))
      setState({
        data: null,
        error: response.error,
        isLoading: false,
        isSuccess: false,
      })
      return
    }

    dispatch(requestSucceeded(requestKey))
    setState({
      data: response.result,
      error: null,
      isLoading: false,
      isSuccess: true,
    })
  }, [dispatch, endpoint, requestKey])

  useEffect(() => {
    if (!enabled) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      void run(false)
    }, 0)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [enabled, run])

  return {
    ...state,
    refetch: () => run(true),
  }
}

export function useApiMutation<TResponse = unknown, TBody = Record<string, unknown>>(
  method: Exclude<ApiMethod, 'GET'>,
  endpoint: string,
) {
  const dispatch = useAppDispatch()
  const [state, setState] = useState<ApiMutationState<TResponse>>({
    data: null,
    error: null,
    isLoading: false,
    isSuccess: false,
  })

  const requestKey = createRequestKey(method, endpoint)

  async function mutate(body?: TBody) {
    dispatch(requestStarted(requestKey))
    setState((current) => ({ ...current, isLoading: true, error: null }))

    const response = await apiClient.request<TResponse>({
      endpoint,
      method,
      body: body as Record<string, unknown> | undefined,
    })

    if (response.isError) {
      dispatch(requestFailed(requestKey, getApiErrorMessage(response.error)))
      setState({
        data: null,
        error: response.error,
        isLoading: false,
        isSuccess: false,
      })
      return null
    }

    dispatch(requestSucceeded(requestKey))
    setState({
      data: response.result,
      error: null,
      isLoading: false,
      isSuccess: true,
    })

    return response.result
  }

  return {
    ...state,
    mutate,
  }
}
