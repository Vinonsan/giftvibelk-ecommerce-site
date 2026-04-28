import { isDevelopment } from '@/lib/utils/environment'

import type { AppMiddleware } from '@/lib/redux/store'

interface DevLoggerOptions {
  collapsed?: boolean
  maxDepth?: number
  maxLen?: number
}

export function createDevLogger(_options: DevLoggerOptions = {}): AppMiddleware {
  return (store) => (next) => (action) => {
    if (!isDevelopment()) {
      return next(action)
    }

    const result = next(action)
    console.info('[store]', action.type, store.getState())
    return result
  }
}
