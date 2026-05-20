import { createApiTransformer } from '@/lib/redux/api/_utils/createApiTransformer'
import { transformPaginatedData } from '@/lib/redux/api/_utils/paginationTransform'

import type { ICatagoryGetAllApiResponse, ICatagorySingleApiResponse } from '../types/response'
import type { ICatagoryGetAllTransformResult, ICatagoryTransform } from '../types/transform'

export const transformGetAllCatagoryResponse = createApiTransformer<
  ICatagoryGetAllApiResponse,
  ICatagoryGetAllTransformResult
>((response) => {
  return transformPaginatedData(response, (data) => ({
    id: data.id,
    name: data.name,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
    isArchived: data.isArchived,
    archivedAt: data.archivedAt,
  }))
})

export const transformGetByIdCatagoryResponse = createApiTransformer<
  ICatagorySingleApiResponse,
  ICatagoryTransform
>((response) => ({
  id: response.data.id,
  name: response.data.name,
  createdAt: response.data.createdAt,
  updatedAt: response.data.updatedAt,
  isArchived: response.data.isArchived,
  archivedAt: response.data.archivedAt,
}))
