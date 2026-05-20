import type { BaseQueryApi } from '@reduxjs/toolkit/query/react'

import { getAdminSessionToken } from '@/lib/auth/session'
import type { RootState } from '@/lib/redux/store'
import { isBrowser } from '@/lib/utils'

interface EndpointWithSkipToken {
  skipToken?: boolean
}

export const prepareHeaders = (
  headers: Headers,
  { getState, endpoint }: Pick<BaseQueryApi, 'getState' | 'endpoint'>
): Headers => {
  const state = (getState() as RootState).auth
  const skipToken = (endpoint as EndpointWithSkipToken)?.skipToken === true

  const storedToken = isBrowser() ? getAdminSessionToken() : null
  const token = state.authToken || state.clientToken || storedToken

  if (token && !skipToken) {
    headers.set('authorization', `Bearer ${token}`)
  }

  if (isBrowser()) headers.set('x-origin', window.location.host)

  return headers
}
