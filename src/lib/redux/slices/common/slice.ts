import { commonInitialState } from '@/lib/redux/slices/common/initialState'
import type { CommonAction, CommonState } from '@/lib/redux/slices/common/types'

function createRequestState(key: string) {
  return {
    key,
    loading: false,
    error: null,
    updatedAt: null,
  }
}

export function commonReducer(
  state: CommonState = commonInitialState,
  action: CommonAction,
): CommonState {
  switch (action.type) {
    case 'common/setAuthToken':
      return {
        ...state,
        authToken: action.payload,
      }

    case 'common/requestStarted': {
      const current = state.requests[action.payload.key] ?? createRequestState(action.payload.key)

      return {
        ...state,
        requests: {
          ...state.requests,
          [action.payload.key]: {
            ...current,
            loading: true,
            error: null,
          },
        },
      }
    }

    case 'common/requestSucceeded': {
      const current = state.requests[action.payload.key] ?? createRequestState(action.payload.key)

      return {
        ...state,
        lastError: null,
        requests: {
          ...state.requests,
          [action.payload.key]: {
            ...current,
            loading: false,
            error: null,
            updatedAt: Date.now(),
          },
        },
      }
    }

    case 'common/requestFailed': {
      const current = state.requests[action.payload.key] ?? createRequestState(action.payload.key)

      return {
        ...state,
        lastError: action.payload.error,
        requests: {
          ...state.requests,
          [action.payload.key]: {
            ...current,
            loading: false,
            error: action.payload.error,
            updatedAt: Date.now(),
          },
        },
      }
    }

    case 'common/clearRequest': {
      const nextRequests = { ...state.requests }
      delete nextRequests[action.payload.key]

      return {
        ...state,
        requests: nextRequests,
      }
    }

    case 'common/reset':
      return commonInitialState

    default:
      return state
  }
}

export const setAuthToken = (payload: string | null): CommonAction => ({
  type: 'common/setAuthToken',
  payload,
})

export const requestStarted = (key: string): CommonAction => ({
  type: 'common/requestStarted',
  payload: { key },
})

export const requestSucceeded = (key: string): CommonAction => ({
  type: 'common/requestSucceeded',
  payload: { key },
})

export const requestFailed = (key: string, error: string): CommonAction => ({
  type: 'common/requestFailed',
  payload: { key, error },
})

export const clearRequest = (key: string): CommonAction => ({
  type: 'common/clearRequest',
  payload: { key },
})

export const resetCommonState = (): CommonAction => ({
  type: 'common/reset',
})
