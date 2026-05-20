import type { RootState } from '@/lib/redux/store'

export const selectAuthToken = (state: RootState) => state.auth.authToken
export const selectIsAuthRehydrated = (state: RootState) => state.auth.isRehydrated
