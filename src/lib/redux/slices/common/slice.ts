import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialState } from './initialState'

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload
    }
  }
})

export const { setIsSidebarCollapsed } = commonSlice.actions

export default commonSlice.reducer
