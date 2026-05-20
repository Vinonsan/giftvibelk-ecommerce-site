export interface ICatagoryResponseItem {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  isArchived: boolean
  archivedAt: string | null
}

export interface IGetAllCatagoryResponse {
  message?: string
  data: ICatagoryResponseItem[]
  pagination: {
    page?: number
    limit?: number
    total?: number
    totalItems?: number
    totalPages?: number
  }
}

export interface ICatagorySingleResponse {
  message?: string
  data: ICatagoryResponseItem
}

export interface IDeleteCatagoryResponse {
  message?: string
  data: {
    id: string
  }
}
