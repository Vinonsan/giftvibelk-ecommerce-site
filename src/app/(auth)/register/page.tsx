import Link from 'next/link'
import { Mail, UserRound } from 'lucide-react'

import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import AuthPasswordInput from '../_utils/components/AuthPasswordInput'
import AuthShell from '../_utils/components/AuthShell'

export default function AdminRegisterPage() {
  return (
    <AuthShell
      eyebrow="Admin access"
      title="Create admin account"
      description="Set up access for a team member who manages catalog and product operations."
      footerText="Already have an account?"
      footerHref="/login"
      footerLinkText="Sign in"
    >
      <form className="space-y-5">
        <Input
          label="Full name"
          name="name"
          placeholder="GiftVibe Admin"
          leadingIcon={<UserRound className="size-4" />}
          required
        />

        <Input
          label="Email address"
          name="email"
          type="email"
          placeholder="admin@giftvibelk.lk"
          leadingIcon={<Mail className="size-4" />}
          required
        />

        <AuthPasswordInput placeholder="Create password" />
        <AuthPasswordInput label="Confirm password" name="confirmPassword" placeholder="Confirm password" />

        <p className="text-xs leading-5 text-admin-muted">
          By creating an account, you agree to use this workspace only for authorized GiftVibeLK operations.
        </p>

        <Button type="submit" variant="primary" fullWidth>
          Create account
        </Button>

        <Link href="/login" className="block text-center text-sm font-bold text-primary transition hover:text-primary/80">
          Back to sign in
        </Link>
      </form>
    </AuthShell>
  )
}
