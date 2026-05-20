export interface AuthState {
  authToken: string | null
  clientToken: string | null
  isRehydrated: boolean
}
