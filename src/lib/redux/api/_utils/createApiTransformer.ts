import { ApiResponse } from '@/lib/redux/api/base/types/api'

import { transformApiResponse } from '../base/transform/apiTransform'

export const createApiTransformer = <T, R>(transformFn: (_data: T) => R) => {
  return (response: ApiResponse<T> | T): R => {
    if (response && typeof response === 'object' && 'isError' in response) {
      return transformApiResponse(response as ApiResponse<T>, transformFn)
    }

    return transformFn(response as T)
  }
}
