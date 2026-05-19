import type { ReactNode } from 'react'

type ProductSectionShellProps = {
  actions?: ReactNode
  children: ReactNode
  description: string
  eyebrow: string
  title: string
}

export default function ProductSectionShell({
  actions,
  children,
  description,
  eyebrow,
  title,
}: ProductSectionShellProps) {
  return (
    <section className="space-y-8">
      <div className="rounded-4xl bg-admin-surface px-8 py-7 shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
        <p className="text-sm font-semibold tracking-tight text-primary uppercase">{ eyebrow }</p>
        <h1 className="mt-3 text-6xl font-extrabold tracking-tight text-admin-text">{ title }</h1>
        <p className="mt-3 max-w-4xl text-xl text-admin-muted">{ description }</p>

        { actions ? <div className="mt-8 flex flex-wrap gap-3">{ actions }</div> : null }
      </div>

      { children }
    </section>
  )
}
