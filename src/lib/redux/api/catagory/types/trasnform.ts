export interface ICatagoryTransform {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  isArchived: boolean
  archivedAt: string | null
}

export interface ICatagoryPagination {
  page: number
  limit: number
  total: number
  totalPages: number
}

export interface ICatagoryGetAllTransformResult {
  items: ICatagoryTransform[]
  pagination: ICatagoryPagination
}
