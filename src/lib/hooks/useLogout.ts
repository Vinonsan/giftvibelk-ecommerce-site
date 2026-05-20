'use client'

import { useAppDispatch } from '@/lib/redux/hooks'
import { logout } from '@/lib/redux/slices/auth'

export function useLogout() {
  const dispatch = useAppDispatch()

  return () => {
    dispatch(logout())
    window.localStorage.removeItem('admin_token')
    window.location.href = '/login'
  }
}
