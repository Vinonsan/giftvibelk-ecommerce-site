import { transformGetAllCatagoryResponse, transformGetByIdCatagoryResponse } from './transforms/catagoryTransform'
import {
  ICreateCatagoryRequest,
  IDeleteCatagoryRequest,
  IGetAllCatagoryRequest,
  IGetCatagoryByIdRequest,
  IUpdateCatagoryRequest,
} from './types/request'
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

export const createCatagoryEndpoint = {
  query: (body: ICreateCatagoryRequest) => ({
    url: 'categories',
    method: 'POST' as const,
    body,
  }),
  transformResponse: transformGetByIdCatagoryResponse,
  invalidatesTags: ['Catagory'] as const,
}

export const updateCatagoryEndpoint = {
  query: ({ id, ...body }: IUpdateCatagoryRequest) => ({
    url: `categories/${id}`,
    method: 'PUT' as const,
    body,
  }),
  transformResponse: transformGetByIdCatagoryResponse,
  invalidatesTags: ['Catagory'] as const,
}

export const deleteCatagoryEndpoint = {
  query: ({ id }: IDeleteCatagoryRequest) => ({
    url: `categories/${id}`,
    method: 'DELETE' as const,
  }),
  invalidatesTags: ['Catagory'] as const,
}
