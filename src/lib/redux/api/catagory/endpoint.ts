import {
  transformDeleteCatagoryResponse,
  transformGetAllCatagoryResponse,
  transformGetByIdCatagoryResponse,
} from '@/lib/redux/api/catagory/transformer'
import type {
  ICreateCatagoryRequest,
  IDeleteCatagoryRequest,
  IGetAllCatagoryRequest,
  IGetCatagoryByIdRequest,
  IUpdateCatagoryRequest,
} from '@/lib/redux/api/catagory/types/request'

function buildCatagoryListUrl(params?: IGetAllCatagoryRequest) {
  const searchParams = new URLSearchParams()
  const page = params?.page ?? params?.pagination?.pageNumber
  const limit = params?.limit ?? params?.pagination?.pageSize

  if (page) {
    searchParams.set('page', String(page))
  }

  if (limit) {
    searchParams.set('limit', String(limit))
  }

  if (params?.searchText) {
    searchParams.set('search', params.searchText)
  }

  if (typeof params?.isArchived === 'boolean') {
    searchParams.set('isArchived', String(params.isArchived))
  }

  const queryString = searchParams.toString()
  return queryString ? `categories?${queryString}` : 'categories'
}

export const getCatagoryListEndpoint = {
  query: (params?: IGetAllCatagoryRequest) => ({
    url: buildCatagoryListUrl(params),
    method: 'GET' as const,
  }),
  transformResponse: transformGetAllCatagoryResponse,
  providesTags: ['Catagory'] as const,
}

export const getCatagoryByIdEndpoint = {
  query: ({ id }: IGetCatagoryByIdRequest) => ({
    url: `categories/${id}`,
    method: 'GET' as const,
  }),
  transformResponse: transformGetByIdCatagoryResponse,
  providesTags: (_result: unknown, _error: unknown, { id }: IGetCatagoryByIdRequest) =>
    [{ type: 'Catagory' as const, id }],
}

export const createCatagoryEndpoint = {
  query: (body: ICreateCatagoryRequest) => ({
    url: 'categories',
    method: 'POST' as const,
    body,
  }),
  transformResponse: transformGetByIdCatagoryResponse,
  invalidatesTags: [{ type: 'Catagory' as const, id: 'LIST' }],
}

export const updateCatagoryEndpoint = {
  query: ({ id, ...body }: IUpdateCatagoryRequest) => ({
    url: `categories/${id}`,
    method: 'PATCH' as const,
    body,
  }),
  transformResponse: transformGetByIdCatagoryResponse,
  invalidatesTags: (_result: unknown, _error: unknown, { id }: IUpdateCatagoryRequest) => [
    { type: 'Catagory' as const, id },
    { type: 'Catagory' as const, id: 'LIST' },
  ],
}

export const deleteCatagoryEndpoint = {
  query: ({ id }: IDeleteCatagoryRequest) => ({
    url: `categories/${id}`,
    method: 'DELETE' as const,
  }),
  transformResponse: transformDeleteCatagoryResponse,
  invalidatesTags: (_result: unknown, _error: unknown, { id }: IDeleteCatagoryRequest) => [
    { type: 'Catagory' as const, id },
    { type: 'Catagory' as const, id: 'LIST' },
  ],
}
