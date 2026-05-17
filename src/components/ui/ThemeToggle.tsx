'use client'

import { Moon, Sun } from 'lucide-react'

import { useTheme } from '@/lib/hooks/useTheme'

type ThemeToggleProps = {
  variant?: 'admin' | 'public'
}

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

const variantClasses: Record<NonNullable<ThemeToggleProps['variant']>, string> = {
  public:
    'inline-flex items-center justify-center rounded-full border border-primary/12 px-3 py-3 text-foreground transition hover:border-primary hover:text-primary',
  admin:
    'inline-flex items-center justify-center rounded-full px-2 py-2 text-slate-300 transition hover:text-white',
}

export default function ThemeToggle({ variant = 'public' }: ThemeToggleProps) {
  const { isDark, toggleTheme } = useTheme()
  const Icon = isDark ? Sun : Moon

  return (
    <button
      type="button"
      aria-label={ isDark ? 'Switch to light mode' : 'Switch to dark mode' }
      onClick={ toggleTheme }
      className={ cn(variantClasses[variant]) }
    >
      <Icon className={ cn('h-5 w-5', variant === 'admin' && 'h-6 w-6') } />
    </button>
  )
}
