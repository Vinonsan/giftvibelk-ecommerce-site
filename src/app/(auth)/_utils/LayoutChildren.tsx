'use client'

import { useState } from 'react'
import type { PropsWithChildren } from 'react'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

export default function LayoutChildren({ children }: PropsWithChildren) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-admin-surface-soft text-admin-text">
      <Sidebar
        isOpen={ isSidebarOpen }
        isCollapsed={ isSidebarCollapsed }
        onClose={ () => setIsSidebarOpen(false) }
        onToggleCollapse={ () => setIsSidebarCollapsed((value) => !value) }
      />
      <Navbar onMenuClick={ () => setIsSidebarOpen(true) } isSidebarCollapsed={ isSidebarCollapsed } />

      <div className={ isSidebarCollapsed ? 'lg:pl-24' : 'lg:pl-72' }>
        <main className="min-h-screen overflow-x-hidden px-4 pb-10 pt-24 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  )
}
