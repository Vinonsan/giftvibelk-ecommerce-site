'use client'

import type { PropsWithChildren } from 'react'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

export default function LayoutChildren({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-admin-surface-soft text-admin-text">
      <Navbar />
      <Sidebar />

      <div className="">
        <main className="overflow-x-hidden px-8 py-6">
          {children}
        </main>
      </div>
    </div>
  )
}