'use client'

import { useEffect, useState, useSyncExternalStore } from 'react'
import type { PropsWithChildren } from 'react'
import { useRouter } from 'next/navigation'

import { useAppSelector } from '@/lib/redux/hooks'
import { selectAuthToken } from '@/lib/redux/slices/auth'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const tokenKeys = ['admin_token', 'giftvibelk_access_token']

function subscribeToStorageUpdates(callback: () => void) {
  window.addEventListener('storage', callback)
  return () => window.removeEventListener('storage', callback)
}

function getStoredAuthToken() {
  if (typeof window === 'undefined') {
    return null
  }

  return tokenKeys.map((key) => window.localStorage.getItem(key)).find(Boolean) ?? null
}

export default function LayoutChildren({ children }: PropsWithChildren) {
  const router = useRouter()
  const authToken = useAppSelector(selectAuthToken)
  const storedAuthToken = useSyncExternalStore(subscribeToStorageUpdates, getStoredAuthToken, () => null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const hasAdminAccess = Boolean(authToken || storedAuthToken)

  useEffect(() => {
    if (!hasAdminAccess) {
      router.replace('/login')
    }
  }, [hasAdminAccess, router])

  if (!hasAdminAccess) {
    return null
  }

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
