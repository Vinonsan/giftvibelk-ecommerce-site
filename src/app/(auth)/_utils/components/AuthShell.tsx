import Link from 'next/link'
import type { ReactNode } from 'react'

type AuthShellProps = {
  children: ReactNode
  eyebrow: string
  title: string
  description: string
  footerText: string
  footerHref: string
  footerLinkText: string
}

export default function AuthShell({
  children,
  description,
  eyebrow,
  footerHref,
  footerLinkText,
  footerText,
  title,
}: AuthShellProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-admin-surface-soft px-4 py-10 text-admin-text">
      <section className="w-full max-w-md">
        <div className="rounded-2xl border border-admin-border bg-admin-surface p-6 shadow-[0_10px_35px_rgba(15,23,42,0.06)] sm:p-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-admin-text">{title}</h1>
            <p className="mt-3 text-sm leading-6 text-admin-muted">{description}</p>
          </div>

          <div className="mt-7">{children}</div>
        </div>

        <p className="mt-6 text-center text-sm text-admin-muted">
          {footerText}{' '}
          <Link href={footerHref} className="font-bold text-primary transition hover:text-primary/80">
            {footerLinkText}
          </Link>
        </p>
      </section>
    </main>
  )
}
