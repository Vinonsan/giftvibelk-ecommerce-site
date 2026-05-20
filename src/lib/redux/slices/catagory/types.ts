import type { ICatagoryTransform } from '@/lib/redux/api/catagory/types/trasnform'

export interface CatagoryDetailState {
  data: ICatagoryTransform | null
  isLoading: boolean
}
