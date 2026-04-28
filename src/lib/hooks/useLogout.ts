'use client'

import { useRouter } from 'next/navigation'

import { AUTH_TOKEN_COOKIE_NAME } from '@/lib/auth'
import { useAppDispatch } from '@/lib/redux/hooks'
import { resetCommonState, setAuthToken } from '@/lib/redux/slices/common'
import { removeCookie } from '@/lib/utils/storage'

export function useLogout() {
  const dispatch = useAppDispatch()
  const router = useRouter()

  return () => {
    removeCookie(AUTH_TOKEN_COOKIE_NAME, '/')
    dispatch(setAuthToken(null))
    dispatch(resetCommonState())
    router.push('/')
  }
}
