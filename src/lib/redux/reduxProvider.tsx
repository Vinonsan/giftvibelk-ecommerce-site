'use client'

import { createElement, useState, type PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

import { makeStore, type AppStore } from '@/lib/redux/store'

const TypedProvider = Provider as unknown as (props: PropsWithChildren<{ store: AppStore }>) => React.ReactElement

export default function ReduxProvider({ children }: PropsWithChildren) {
  const [store] = useState<AppStore>(makeStore)

  return createElement(TypedProvider, { store }, children)
}
