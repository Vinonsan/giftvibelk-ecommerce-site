import { createApiTransformer } from '@/lib/redux/api/_utils/createApiTransformer'
import { transformUploadResponse } from '@/lib/redux/api/_utils/upload'
import type { IProductImageUploadApiResponse } from '../types/response'
import type { IProductImageUploadTransform } from '../types/transform'

export const transformProductImageUploadResponse = createApiTransformer<
  IProductImageUploadApiResponse,
  IProductImageUploadTransform
>((response) => transformUploadResponse(response, (imageUrl) => ({ imageUrl })))
