import type { CommonState } from '@/lib/redux/slices/common/types'

export const commonInitialState: CommonState = {
  authToken: null,
  requests: {},
  lastError: null,
}
