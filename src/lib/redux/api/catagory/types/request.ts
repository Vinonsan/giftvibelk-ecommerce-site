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
  image?: File | null
}

export interface IUpdateCatagoryRequest extends ICreateCatagoryRequest {
  id: string
}

export interface IDeleteCatagoryRequest {
  id: string
}
