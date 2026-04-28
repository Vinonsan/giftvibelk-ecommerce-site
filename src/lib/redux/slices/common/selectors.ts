import type { RootState } from '@/lib/redux/store'

export const selectCommonState = (state: RootState) => state.common

export const selectAuthToken = (state: RootState) => state.common.authToken

export const selectLastApiError = (state: RootState) => state.common.lastError

export const selectRequestStatus = (key: string) => (state: RootState) =>
  state.common.requests[key] ?? null
