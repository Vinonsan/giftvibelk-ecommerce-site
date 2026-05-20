import { createApiTransformer } from '@/lib/redux/api/_utils/createApiTransformer'
import type { ILoginApiResponse } from '../types/response'
import type { ILoginTransform } from '../types/transform'

export const transformLoginResponse = createApiTransformer<ILoginApiResponse, ILoginTransform>((response) => {
  const token = response.data.token

  if (!token) {
    throw new Error('Login response did not include an auth token.')
  }

  return {
    token,
    role: response.data.role,
  }
})
