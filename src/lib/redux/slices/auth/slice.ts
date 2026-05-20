import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialState } from './initialState'

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setClientToken: (state, action: PayloadAction<string>) => {
      state.clientToken = action.payload
    },
    setAuthToken: (state, action: PayloadAction<string>) => {
      state.authToken = action.payload
      state.clientToken = null
    },
    logout: (state) => {
      state.authToken = null
    },
    setRehydrated: (state, action: PayloadAction<boolean>) => {
      state.isRehydrated = action.payload
    }
  }
})

export const { setAuthToken, setClientToken, logout, setRehydrated } = authSlice.actions

export default authSlice.reducer
