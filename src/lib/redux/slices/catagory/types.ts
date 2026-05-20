import type { ICatagoryTransform } from '@/lib/redux/api/catagory/types/transform'

export interface CatagoryDetailState {
  data: ICatagoryTransform | null
  isLoading: boolean
}
