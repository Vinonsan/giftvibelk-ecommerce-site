import { createApi } from '@reduxjs/toolkit/query/react'

import { publicApiBase } from '@/lib/redux/api/base'
import { loginEndpoint } from './endpoint'
import type { ILoginRequest } from './types/request'
import type { ILoginTransform } from './types/transform'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: publicApiBase,
  endpoints: (builder) => ({
    login: builder.mutation<ILoginTransform, ILoginRequest>(loginEndpoint),
  }),
})

export const { useLoginMutation } = authApi
