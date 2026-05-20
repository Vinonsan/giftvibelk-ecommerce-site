import { configureStore } from '@reduxjs/toolkit'

import { baseApi } from '@/lib/redux/api/base/baseApi'
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
      [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware, apiMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
  })

export const store = makeStore()

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
