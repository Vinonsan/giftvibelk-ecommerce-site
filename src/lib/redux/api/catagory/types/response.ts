import type { BackendPaginatedResponse } from '@/lib/redux/api/_utils/types/pagination-transform'

export interface ICatagoryApiResponseItem {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  isArchived: boolean
  archivedAt: string | null
}

export interface ICatagoryGetAllApiResponse extends BackendPaginatedResponse<ICatagoryApiResponseItem> {
  message?: string
}

export interface ICatagorySingleApiResponse {
  message?: string
  data: ICatagoryApiResponseItem
}
