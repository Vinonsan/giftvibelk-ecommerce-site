import { createApi } from '@reduxjs/toolkit/query/react'

import { publicApiBase } from '@/lib/redux/api/base'
import { uploadProductImageEndpoint } from './endpoint'
import type { IProductImageUploadRequest } from './types/request'
import type { IProductImageUploadTransform } from './types/transform'

export const uploadApi = createApi({
  reducerPath: 'uploadApi',
  baseQuery: publicApiBase,
  endpoints: (builder) => ({
    uploadProductImage: builder.mutation<IProductImageUploadTransform, IProductImageUploadRequest>(
      uploadProductImageEndpoint,
    ),
  }),
})

export const { useUploadProductImageMutation } = uploadApi
