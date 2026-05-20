import type { RootState } from '@/lib/redux/store'

export const selectCatagoryDetail = (state: RootState) => state.catagory.data

export const selectCatagoryLoading = (state: RootState) => state.catagory.isLoading
