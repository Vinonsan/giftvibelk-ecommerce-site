import { ApiResponse } from '@/lib/redux/api/base/types/api'

import { transformApiResponse } from '../base/transform/apiTransform'

export const createApiTransformer = <T, R>(transformFn: (_data: T) => R) => {
  return (response: ApiResponse<T>): R => {
    return transformApiResponse(response, transformFn)
  }
}
