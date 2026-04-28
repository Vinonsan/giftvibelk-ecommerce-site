'use client'

import {
  createContext,
  createElement,
  useContext,
  useState,
  useSyncExternalStore,
  type PropsWithChildren,
} from 'react'

import { makeStore, store as defaultStore, type AppDispatch, type AppStore, type RootState } from '@/lib/redux/store'

const StoreContext = createContext<AppStore>(defaultStore)

export function StoreProvider({ children }: PropsWithChildren) {
  const [localStore] = useState<AppStore>(makeStore)

  return createElement(StoreContext.Provider, { value: localStore }, children)
}

export function useStore(): AppStore {
  return useContext(StoreContext)
}

export function useAppDispatch(): AppDispatch {
  return useStore().dispatch
}

export function useAppSelector<TSelected>(selector: (state: RootState) => TSelected): TSelected {
  const currentStore = useStore()
  const getSnapshot = () => selector(currentStore.getState())

  return useSyncExternalStore(currentStore.subscribe, getSnapshot, getSnapshot)
}
