'use client'

import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux'

import type { AppDispatch, RootState } from './store'

export { default as StoreProvider } from './reduxProvider'

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
