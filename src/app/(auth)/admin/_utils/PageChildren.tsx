import { ClipboardList, Gift, PackageSearch, Users } from 'lucide-react'

const overviewCards = [
  { label: 'Orders today', value: '18', note: '6 waiting for confirmation', icon: ClipboardList },
  { label: 'Active products', value: '24', note: '8 highlighted as featured', icon: PackageSearch },
  { label: 'Customers', value: '142', note: '12 new this week', icon: Users },
  { label: 'Gift requests', value: '09', note: 'Custom orders in progress', icon: Gift },
]

export default function PageChildren() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Dashboard</p>
        <h1 className="mt-2 text-3xl font-bold text-admin-text">Giftvibelk overview</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-admin-muted">
          Track the store activity that needs attention before moving into products, orders, and customers.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        { overviewCards.map((card) => {
          const Icon = card.icon

          return (
            <article
              key={ card.label }
              className="rounded-[28px] border border-admin-border bg-admin-surface p-6 shadow-sm"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <p className="mt-5 text-sm font-medium text-admin-muted">{ card.label }</p>
              <p className="mt-2 text-3xl font-semibold text-admin-text">{ card.value }</p>
              <p className="mt-2 text-sm text-admin-muted">{ card.note }</p>
            </article>
          )
        }) }
      </div>
    </section>
  )
}
