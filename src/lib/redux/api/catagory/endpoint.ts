import { transformGetAllCatagoryResponse, transformGetByIdCatagoryResponse } from './transforms/catagoryTransform'
import { IGetAllCatagoryRequest, IGetCatagoryByIdRequest } from './types/request'
import { buildQueryUrl } from '../_utils/queryParams'

export const getCatagoryListEndpoint = {
  query: (params?: IGetAllCatagoryRequest) => {
    const url = buildQueryUrl(params, 'categories', {
      page: params?.page ?? params?.pagination?.pageNumber,
      limit: params?.limit ?? params?.pagination?.pageSize,
      isArchived: params?.isArchived,
    })

    return { url, method: 'GET' as const }
  },
  transformResponse: transformGetAllCatagoryResponse,
  providesTags: ['Catagory'] as const,
}

export const getCatagoryByIdEndpoint = {
  query: (params: IGetCatagoryByIdRequest) => ({
    url: `categories/${params.id}`,
    method: 'GET' as const,
  }),
  transformResponse: transformGetByIdCatagoryResponse,
  providesTags: ['Catagory'] as const,
}
