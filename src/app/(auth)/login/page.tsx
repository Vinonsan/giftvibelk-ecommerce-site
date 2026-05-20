'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { Mail } from 'lucide-react'

import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { useAppDispatch } from '@/lib/redux/hooks'
import { setAuthToken } from '@/lib/redux/slices/auth'
import { getApiBaseUrl } from '@/lib/utils'
import AuthPasswordInput from '../_utils/components/AuthPasswordInput'
import AuthShell from '../_utils/components/AuthShell'

type LoginResponse = {
  message: string
  data: {
    token: string
    role: string
  }
}

function getLoginErrorMessage(error: unknown) {
  if (error && typeof error === 'object' && 'message' in error) {
    return String((error as { message: unknown }).message)
  }

  return 'Unable to sign in.'
}

async function loginAdmin(email: string, password: string) {
  const response = await fetch(`${getApiBaseUrl()}auth/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userName: email, password }),
  })

  const data = (await response.json().catch(() => null)) as LoginResponse | { message?: string } | null

  if (!response.ok) {
    throw new Error(data?.message ?? 'Invalid email or password.')
  }

  if (!data || !('data' in data) || !data.data.token) {
    throw new Error('Login response did not include an auth token.')
  }

  return data.data
}

export default function AdminLoginPage() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrorMessage(null)

    const formData = new FormData(event.currentTarget)
    const email = String(formData.get('email') ?? '')
    const password = String(formData.get('password') ?? '')

    try {
      setIsLoading(true)
      const response = await loginAdmin(email, password)
      window.localStorage.setItem('admin_token', response.token)
      window.localStorage.setItem('giftvibelk_access_token', response.token)
      window.localStorage.setItem('admin_role', response.role)
      dispatch(setAuthToken(response.token))
      router.replace('/admin')
    } catch (error) {
      setErrorMessage(getLoginErrorMessage(error))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthShell
      eyebrow="Welcome back"
      title="Sign in to admin"
      description="Access your GiftVibeLK catalog tools, category controls, and order workspace."
      footerText="New to the admin team?"
      footerHref="/register"
      footerLinkText="Create an account"
    >
      <form className="space-y-5" onSubmit={handleSubmit}>
        <Input
          label="Email address"
          name="email"
          type="email"
          placeholder="admin@giftvibelk.lk"
          leadingIcon={<Mail className="size-4" />}
          required
        />

        <AuthPasswordInput />

        <div className="flex items-center justify-between gap-4">
          <label className="inline-flex items-center gap-2 text-sm font-medium text-admin-muted">
            <input type="checkbox" className="size-4 rounded border-admin-border accent-primary" />
            Remember me
          </label>
          <Link href="/forgot-password" className="text-sm font-bold text-primary transition hover:text-primary/80">
            Forgot password?
          </Link>
        </div>

        {errorMessage ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
            {errorMessage}
          </div>
        ) : null}

        <Button type="submit" variant="primary" fullWidth disabled={isLoading}>
          {isLoading ? 'Signing in...' : 'Sign in'}
        </Button>
      </form>
    </AuthShell>
  )
}
