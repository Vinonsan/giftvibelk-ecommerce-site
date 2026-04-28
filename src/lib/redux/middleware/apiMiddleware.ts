import { requestFailed, requestStarted, requestSucceeded } from '@/lib/redux/slices/common'
import type { AppAction, AppMiddleware } from '@/lib/redux/store'

function hasRequestMeta(action: AppAction): action is AppAction & {
  meta: { requestKey: string; requestStatus?: 'started' | 'succeeded' | 'failed'; error?: string }
} {
  return Boolean(action.meta && typeof action.meta.requestKey === 'string')
}

export const apiMiddleware: AppMiddleware = (store) => (next) => (action) => {
  if (hasRequestMeta(action)) {
    const { requestKey, requestStatus, error } = action.meta

    if (requestStatus === 'started') {
      store.dispatch(requestStarted(requestKey))
    }

    if (requestStatus === 'succeeded') {
      store.dispatch(requestSucceeded(requestKey))
    }

    if (requestStatus === 'failed') {
      store.dispatch(requestFailed(requestKey, error ?? 'Request failed'))
    }
  }

  return next(action)
}
