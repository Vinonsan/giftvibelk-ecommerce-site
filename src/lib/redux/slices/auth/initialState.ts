import type { AuthState } from './types'

export const initialState: AuthState = {
  authToken: null,
  clientToken: null,
  isRehydrated: false
}
