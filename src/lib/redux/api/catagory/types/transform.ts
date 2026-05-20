import type { PaginatedTransformResult } from '@/lib/redux/api/_utils/types/pagination-transform'

export interface ICatagoryTransform {
  id: string
  name: string
  imageUrl: string
  createdAt: string
  updatedAt: string
  isArchived: boolean
  archivedAt: string | null
}

export type ICatagoryGetAllTransformResult = PaginatedTransformResult<ICatagoryTransform>
