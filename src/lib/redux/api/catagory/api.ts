import { createApi } from '@reduxjs/toolkit/query/react'

import { getCatagoryByIdEndpoint, getCatagoryListEndpoint } from './endpoint'
import { IGetAllCatagoryRequest, IGetCatagoryByIdRequest } from './types/request'
import { ICatagoryGetAllTransformResult, ICatagoryTransform } from './types/transform'
import { publicApiBase } from '../base'

export const catagoryApi = createApi({
  reducerPath: 'catagoryApi',
  baseQuery: publicApiBase,
  tagTypes: ['Catagory'],
  endpoints: (builder) => ({
    getAllCatagory: builder.query<ICatagoryGetAllTransformResult, IGetAllCatagoryRequest | void>(
      getCatagoryListEndpoint,
    ),
    getCatagoryById: builder.query<ICatagoryTransform, IGetCatagoryByIdRequest>(
      getCatagoryByIdEndpoint,
    ),
  }),
})

export const { useGetAllCatagoryQuery, useGetCatagoryByIdQuery } = catagoryApi
