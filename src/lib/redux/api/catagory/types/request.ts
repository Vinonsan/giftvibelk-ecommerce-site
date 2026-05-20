import type { CommonRequestParams } from '@/lib/redux/api/_utils/types/query-params'

export interface IGetAllCatagoryRequest extends CommonRequestParams {
  page?: number
  limit?: number
  isArchived?: boolean
}

export interface IGetCatagoryByIdRequest {
  id: string
}

export interface ICreateCatagoryRequest {
  name: string
}

export interface IUpdateCatagoryRequest {
  id: string
  name?: string
  isArchived?: boolean
}

export interface IDeleteCatagoryRequest {
  id: string
}
