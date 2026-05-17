import type { PropsWithChildren } from 'react'

import LayoutChildren from './_utils/LayoutChildren'

export default function AdminLayout({ children }: PropsWithChildren) {
  return <LayoutChildren>{ children }</LayoutChildren>
}
