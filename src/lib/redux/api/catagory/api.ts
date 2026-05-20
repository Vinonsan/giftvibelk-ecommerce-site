import { baseApi } from '@/lib/redux/api/base/baseApi'
import {
  createCatagoryEndpoint,
  deleteCatagoryEndpoint,
  getCatagoryByIdEndpoint,
  getCatagoryListEndpoint,
  updateCatagoryEndpoint,
} from '@/lib/redux/api/catagory/endpoint'
import type {
  ICreateCatagoryRequest,
  IDeleteCatagoryRequest,
  IGetAllCatagoryRequest,
  IGetCatagoryByIdRequest,
  IUpdateCatagoryRequest,
} from '@/lib/redux/api/catagory/types/request'
import type { ICatagoryGetAllTransformResult, ICatagoryTransform } from './types/trasnform'

export const catagoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCatagory: builder.query<ICatagoryGetAllTransformResult, IGetAllCatagoryRequest | void>(
      getCatagoryListEndpoint,
    ),
    getCatagoryById: builder.query<ICatagoryTransform, IGetCatagoryByIdRequest>(getCatagoryByIdEndpoint),
    createCatagory: builder.mutation<ICatagoryTransform, ICreateCatagoryRequest>(createCatagoryEndpoint),
    updateCatagory: builder.mutation<ICatagoryTransform, IUpdateCatagoryRequest>(updateCatagoryEndpoint),
    deleteCatagory: builder.mutation<{ id: string }, IDeleteCatagoryRequest>(deleteCatagoryEndpoint),
  }),
})

export const {
  useGetAllCatagoryQuery,
  useGetCatagoryByIdQuery,
  useCreateCatagoryMutation,
  useUpdateCatagoryMutation,
  useDeleteCatagoryMutation,
} = catagoryApi
