import { transformLoginResponse } from './transforms/loginTransform'
import type { ILoginRequest } from './types/request'

export const loginEndpoint = {
  query: (body: ILoginRequest) => ({
    url: 'auth/login',
    method: 'POST' as const,
    body,
  }),
  transformResponse: transformLoginResponse,
}
