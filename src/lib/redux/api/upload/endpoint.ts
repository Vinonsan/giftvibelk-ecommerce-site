import { transformProductImageUploadResponse } from './transforms/uploadTransform'
import type { IProductImageUploadRequest } from './types/request'

export const uploadProductImageEndpoint = {
  query: ({ file }: IProductImageUploadRequest) => {
    const formData = new FormData()
    formData.append('image', file)

    return {
      url: 'uploads/product-image',
      method: 'POST' as const,
      body: formData,
    }
  },
  transformResponse: transformProductImageUploadResponse,
}
