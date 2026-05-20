'use client'

import { useAppDispatch } from '@/lib/redux/hooks'
import { logout } from '@/lib/redux/slices/auth'
import { clearAdminSession } from '@/lib/auth/session'

export function useLogout() {
  const dispatch = useAppDispatch()

  return () => {
    dispatch(logout())
    clearAdminSession()
    window.location.href = '/login'
  }
}
