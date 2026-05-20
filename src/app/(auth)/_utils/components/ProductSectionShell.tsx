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
      <div className="rounded-xl px-2 py-3">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-tight text-primary uppercase">{eyebrow}</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-admin-text lg:text-5xl">{title}</h1>
            <p className="mt-3 max-w-4xl text-base text-admin-muted lg:text-lg">{description}</p>
          </div>

          {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
        </div>
      </div>

      {children}
    </section>
  )
}
