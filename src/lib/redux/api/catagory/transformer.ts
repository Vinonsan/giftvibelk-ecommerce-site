import type {
  ICatagoryResponseItem,
  ICatagorySingleResponse,
  IDeleteCatagoryResponse,
  IGetAllCatagoryResponse,
} from '@/lib/redux/api/catagory/types/response'
import type {
  ICatagoryGetAllTransformResult,
  ICatagoryTransform,
} from '@/lib/redux/api/catagory/types/trasnform'

const defaultPagination = {
  page: 1,
  limit: 10,
  total: 0,
  totalPages: 0,
}

export function transformCatagory(item: ICatagoryResponseItem): ICatagoryTransform {
  return {
    id: item.id,
    name: item.name,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
    isArchived: item.isArchived,
    archivedAt: item.archivedAt,
  }
}

export function transformGetAllCatagoryResponse(response: IGetAllCatagoryResponse): ICatagoryGetAllTransformResult {
  const total = response.pagination.total ?? response.pagination.totalItems ?? 0

  return {
    items: response.data.map(transformCatagory),
    pagination: {
      ...defaultPagination,
      page: response.pagination.page ?? defaultPagination.page,
      limit: response.pagination.limit ?? defaultPagination.limit,
      total,
      totalPages: response.pagination.totalPages ?? defaultPagination.totalPages,
    },
  }
}

export function transformGetByIdCatagoryResponse(response: ICatagorySingleResponse): ICatagoryTransform {
  return transformCatagory(response.data)
}

export function transformDeleteCatagoryResponse(response: IDeleteCatagoryResponse) {
  return response.data
}
