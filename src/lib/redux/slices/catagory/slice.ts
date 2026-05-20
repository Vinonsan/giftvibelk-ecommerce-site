import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type { ICatagoryTransform } from '@/lib/redux/api/catagory/types/trasnform'

import { initialState } from './initialState'

const catagorySlice = createSlice({
  name: 'catagory',
  initialState,
  reducers: {
    setCatagoryDetail: (state, action: PayloadAction<ICatagoryTransform>) => {
      state.data = action.payload
      state.isLoading = false
    },
    setCatagoryLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    clearCatagoryDetail: (state) => {
      state.data = null
      state.isLoading = false
    },
  },
})

export const { setCatagoryDetail, setCatagoryLoading, clearCatagoryDetail } = catagorySlice.actions
export default catagorySlice.reducer
