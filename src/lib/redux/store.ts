import { configureStore } from '@reduxjs/toolkit'

import { authApi } from '@/lib/redux/api/auth/api'
import { catagoryApi } from '@/lib/redux/api/catagory/api'
import { uploadApi } from '@/lib/redux/api/upload/api'
import { apiMiddleware } from '@/lib/redux/middleware/apiMiddleware'
import { authReducer } from '@/lib/redux/slices/auth'
import { commonReducer } from '@/lib/redux/slices/common'
import { catagoryReducer } from '@/lib/redux/slices/catagory'

export const makeStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
      common: commonReducer,
      catagory: catagoryReducer,
      [authApi.reducerPath]: authApi.reducer,
      [catagoryApi.reducerPath]: catagoryApi.reducer,
      [uploadApi.reducerPath]: uploadApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware, catagoryApi.middleware, uploadApi.middleware, apiMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
  })

export const store = makeStore()

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
