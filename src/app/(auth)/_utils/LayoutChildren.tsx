'use client'

import { useEffect, useState } from 'react'
import type { PropsWithChildren } from 'react'
import { useRouter } from 'next/navigation'

import { getAdminSessionToken } from '@/lib/auth/session'
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks'
import { selectAuthToken, setAuthToken } from '@/lib/redux/slices/auth'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

export default function LayoutChildren({ children }: PropsWithChildren) {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const authToken = useAppSelector(selectAuthToken)
  const [storedAuthToken, setStoredAuthToken] = useState<string | null>(null)
  const [isSessionChecked, setIsSessionChecked] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const hasAdminAccess = Boolean(authToken || storedAuthToken)

  useEffect(() => {
    const syncSession = window.setTimeout(() => {
      const token = getAdminSessionToken()
      setStoredAuthToken(token)

      if (token && !authToken) {
        dispatch(setAuthToken(token))
      }

      setIsSessionChecked(true)
    }, 0)

    return () => window.clearTimeout(syncSession)
  }, [authToken, dispatch])

  useEffect(() => {
    if (isSessionChecked && !hasAdminAccess) {
      router.replace('/login')
    }
  }, [hasAdminAccess, isSessionChecked, router])

  if (!isSessionChecked || !hasAdminAccess) {
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
