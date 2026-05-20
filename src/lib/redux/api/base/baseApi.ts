import { createApi } from '@reduxjs/toolkit/query/react'

import { apiBase } from '@/lib/redux/api/base'

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: apiBase,
  tagTypes: ['Catagory'],
  endpoints: () => ({}),
})
