import type { ApiRequestStatus } from '@/lib/types/api'

export interface CommonState {
  authToken: string | null
  requests: Record<string, ApiRequestStatus>
  lastError: string | null
}

export type CommonAction =
  | { type: 'common/setAuthToken'; payload: string | null }
  | { type: 'common/requestStarted'; payload: { key: string } }
  | { type: 'common/requestSucceeded'; payload: { key: string } }
  | { type: 'common/requestFailed'; payload: { key: string; error: string } }
  | { type: 'common/clearRequest'; payload: { key: string } }
  | { type: 'common/reset' }
