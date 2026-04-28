import { commonInitialState, commonReducer, type CommonAction, type CommonState } from '@/lib/redux/slices/common'
import { apiMiddleware } from '@/lib/redux/middleware/apiMiddleware'
import { createDevLogger } from '@/lib/redux/middleware/createDevLogger'

export interface RootState {
  common: CommonState
}

export type AppAction = CommonAction & {
  meta?: {
    requestKey?: string
    requestStatus?: 'started' | 'succeeded' | 'failed'
    error?: string
  }
}

export type AppThunk<TReturn = void> = (
  dispatch: AppDispatch,
  getState: () => RootState,
) => TReturn

export type AppDispatch = (action: AppAction | AppThunk) => unknown

export interface AppStore {
  getState: () => RootState
  dispatch: AppDispatch
  subscribe: (listener: () => void) => () => void
}

export type AppMiddleware = (
  store: AppStore,
) => (next: AppDispatch) => (action: AppAction) => unknown

const devLogger = createDevLogger({ collapsed: true, maxDepth: 3, maxLen: 25000 })

function rootReducer(state: RootState | undefined, action: AppAction): RootState {
  return {
    common: commonReducer(state?.common ?? commonInitialState, action),
  }
}

export const makeStore = (): AppStore => {
  let state = rootReducer(undefined, { type: 'common/reset' })
  const listeners = new Set<() => void>()

  const store: AppStore = {
    getState: () => state,
    dispatch: ((action: AppAction | AppThunk) => {
      if (typeof action === 'function') {
        return action(store.dispatch, store.getState)
      }

      const middlewareChain = [apiMiddleware, devLogger]
      let index = -1

      const invoke = (position: number, currentAction: AppAction): unknown => {
        if (position <= index) {
          throw new Error('Middleware chain was invoked multiple times.')
        }

        index = position
        const middleware = middlewareChain[position]

        if (!middleware) {
          state = rootReducer(state, currentAction)
          listeners.forEach((listener) => listener())
          return currentAction
        }

        return middleware(store)((nextAction) => invoke(position + 1, nextAction as AppAction))(currentAction)
      }

      return invoke(0, action)
    }) as AppDispatch,
    subscribe: (listener: () => void) => {
      listeners.add(listener)

      return () => {
        listeners.delete(listener)
      }
    },
  }

  return store
}

export const store = makeStore()
