import { createApi } from '@reduxjs/toolkit/query/react'

import {
  createCatagoryEndpoint,
  deleteCatagoryEndpoint,
  getCatagoryByIdEndpoint,
  getCatagoryListEndpoint,
  updateCatagoryEndpoint,
} from './endpoint'
import {
  ICreateCatagoryRequest,
  IDeleteCatagoryRequest,
  IGetAllCatagoryRequest,
  IGetCatagoryByIdRequest,
  IUpdateCatagoryRequest,
} from './types/request'
import { ICatagoryGetAllTransformResult, ICatagoryTransform } from './types/transform'
import { apiBase, publicApiBase } from '../base'

const tokenRequiredEndpoints = new Set(['createCatagory', 'updateCatagory', 'deleteCatagory'])

const catagoryBaseQuery: typeof apiBase = (args, api, extraOptions) => {
  if (tokenRequiredEndpoints.has(api.endpoint)) {
    return apiBase(args, api, extraOptions)
  }

  return publicApiBase(args, api, extraOptions)
}

export const catagoryApi = createApi({
  reducerPath: 'catagoryApi',
  baseQuery: catagoryBaseQuery,
  tagTypes: ['Catagory'],
  endpoints: (builder) => ({
    getAllCatagory: builder.query<ICatagoryGetAllTransformResult, IGetAllCatagoryRequest | void>(
      getCatagoryListEndpoint,
    ),
    getCatagoryById: builder.query<ICatagoryTransform, IGetCatagoryByIdRequest>(
      getCatagoryByIdEndpoint,
    ),
    createCatagory: builder.mutation<ICatagoryTransform, ICreateCatagoryRequest>(createCatagoryEndpoint),
    updateCatagory: builder.mutation<ICatagoryTransform, IUpdateCatagoryRequest>(updateCatagoryEndpoint),
    deleteCatagory: builder.mutation<unknown, IDeleteCatagoryRequest>(deleteCatagoryEndpoint),
  }),
})

export const {
  useGetAllCatagoryQuery,
  useGetCatagoryByIdQuery,
  useCreateCatagoryMutation,
  useUpdateCatagoryMutation,
  useDeleteCatagoryMutation,
} = catagoryApi
