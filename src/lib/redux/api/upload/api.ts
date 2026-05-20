import { createApi } from '@reduxjs/toolkit/query/react'

import { apiBase } from '@/lib/redux/api/base'
import { uploadProductImageEndpoint } from './endpoint'
import type { IProductImageUploadRequest } from './types/request'
import type { IProductImageUploadTransform } from './types/transform'

export const uploadApi = createApi({
  reducerPath: 'uploadApi',
  baseQuery: apiBase,
  endpoints: (builder) => ({
    uploadProductImage: builder.mutation<IProductImageUploadTransform, IProductImageUploadRequest>(
      uploadProductImageEndpoint,
    ),
  }),
})

export const { useUploadProductImageMutation } = uploadApi
