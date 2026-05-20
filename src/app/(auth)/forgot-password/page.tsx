import Link from 'next/link'
import { Mail } from 'lucide-react'

import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import AuthShell from '../_utils/components/AuthShell'

export default function AdminForgotPasswordPage() {
  return (
    <AuthShell
      eyebrow="Account recovery"
      title="Reset your password"
      description="Enter your admin email and we will send instructions to recover access."
      footerText="Remember your password?"
      footerHref="/login"
      footerLinkText="Sign in"
    >
      <form className="space-y-5">
        <Input
          label="Email address"
          name="email"
          type="email"
          placeholder="admin@giftvibelk.lk"
          leadingIcon={<Mail className="size-4" />}
          required
        />

        <Button type="submit" variant="primary" fullWidth>
          Send reset link
        </Button>

        <Link href="/login" className="block text-center text-sm font-bold text-primary transition hover:text-primary/80">
          Back to sign in
        </Link>
      </form>
    </AuthShell>
  )
}
