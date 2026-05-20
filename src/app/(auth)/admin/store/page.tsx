import Image from 'next/image'
import { Eye, PencilLine, Plus, Star } from 'lucide-react'

import ProductSectionShell from '../../_utils/components/ProductSectionShell'

const productStats = [
  { label: 'Total Products', value: '24', note: 'Across all gift categories' },
  { label: 'Featured Items', value: '08', note: 'Highlighted on the home page' },
  { label: 'Low Stock', value: '03', note: 'Need quick restock attention' },
]

const products = [
  {
    category: 'Birthday',
    image: '/images/birthday.png',
    name: 'Birthday Surprise Gift Box',
    price: 'LKR 4,500',
    stock: 0,
    status: 'Out of Stock',
  },
  {
    category: 'Romance',
    image: '/images/imageone.png',
    name: 'Romantic Rose & Chocolate Set',
    price: 'LKR 5,250',
    stock: 8,
    status: 'Active',
  },
  {
    category: 'Anniversary',
    image: '/images/imagetwo.png',
    name: 'Anniversary Keepsake Hamper',
    price: 'LKR 6,800',
    stock: 5,
    status: 'Active',
  },
  {
    category: 'Custom Gift',
    image: '/images/imagethree.png',
    name: 'Premium Custom Celebration Box',
    price: 'LKR 7,200',
    stock: 9,
    status: 'Featured',
  },
]

export default function AdminProductsPage() {
  return (
    <ProductSectionShell
      eyebrow="Catalog"
      title="Manage Giftvibelk products"
      description="Control your catalog, keep pricing tidy, and make sure the store always highlights the right gift products."
      actions={
        <>
          <button className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary/5 dark:border-white/10 dark:bg-white/5 dark:text-white">
            <Eye className="size-4" />
            Preview Store
          </button>
          <button className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90">
            <Plus className="size-4" />
            Add Product
          </button>
        </>
      }
    >
      <div className="rounded-[2.25rem] bg-[var(--admin-panel)] p-8 text-white shadow-[0_14px_40px_rgba(15,23,42,0.14)]">
        <h2 className="text-3xl font-bold text-white">Today&apos;s Product Summary</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <div className="rounded-[1.4rem] bg-rose-100/10 px-6 py-5">
            <p className="text-lg text-slate-300">Draft Items</p>
            <p className="mt-2 text-4xl font-bold text-primary">04</p>
          </div>
          <div className="rounded-[1.4rem] bg-emerald-400/10 px-6 py-5">
            <p className="text-lg text-slate-300">Published</p>
            <p className="mt-2 text-4xl font-bold text-emerald-300">18</p>
          </div>
          <div className="rounded-[1.4rem] bg-fuchsia-400/10 px-6 py-5">
            <p className="text-lg text-slate-300">Featured</p>
            <p className="mt-2 text-4xl font-bold text-fuchsia-300">08</p>
          </div>
          <div className="rounded-[1.4rem] bg-amber-400/10 px-6 py-5">
            <p className="text-lg text-slate-300">Out of Stock</p>
            <p className="mt-2 text-4xl font-bold text-amber-300">03</p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90">
            <Plus className="size-5" />
            Add Product
          </button>
          <button className="inline-flex items-center gap-2 rounded-2xl bg-slate-500 px-6 py-4 text-lg font-semibold text-white transition hover:bg-slate-400">
            <PencilLine className="size-5" />
            Update Catalog
          </button>
          <button className="inline-flex items-center gap-2 rounded-2xl bg-slate-500 px-6 py-4 text-lg font-semibold text-white transition hover:bg-slate-400">
            <Star className="size-5" />
            Refresh Featured
          </button>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.6fr_1fr]">
        <div className="grid gap-4 md:grid-cols-3">
          { productStats.map((stat) => (
            <div
              key={ stat.label }
            className="rounded-[28px] border border-[var(--admin-border)] bg-[var(--admin-surface)] p-6 shadow-sm"
          >
              <p className="text-sm font-medium text-[var(--admin-muted)]">{ stat.label }</p>
              <p className="mt-3 text-3xl font-semibold text-[var(--admin-text)]">{ stat.value }</p>
              <p className="mt-2 text-sm text-[var(--admin-muted)]">{ stat.note }</p>
            </div>
          )) }
        </div>

        <div className="rounded-[2rem] border border-[var(--admin-border)] bg-[var(--admin-surface)] p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
          <p className="text-xs font-semibold tracking-[0.24em] text-primary uppercase">Quick View</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">Catalog health</h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl bg-slate-50 px-4 py-4 dark:bg-white/[0.04]">
              <p className="text-sm text-[var(--admin-muted)]">Most active category</p>
              <p className="mt-2 text-xl font-semibold text-[var(--admin-text)]">Birthday Gifts</p>
            </div>
            <div className="rounded-2xl bg-slate-50 px-4 py-4 dark:bg-white/[0.04]">
              <p className="text-sm text-[var(--admin-muted)]">Needs review</p>
              <p className="mt-2 text-xl font-semibold text-[var(--admin-text)]">3 products low on stock</p>
            </div>
            <div className="rounded-2xl bg-slate-50 px-4 py-4 dark:bg-white/[0.04]">
              <p className="text-sm text-[var(--admin-muted)]">Homepage spotlight</p>
              <p className="mt-2 text-xl font-semibold text-[var(--admin-text)]">8 featured products live</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.7fr_1fr]">
        <div className="rounded-[2rem] border border-[var(--admin-border)] bg-[var(--admin-surface)] p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.24em] text-primary uppercase">Products</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">All products</h2>
            </div>
            <div className="rounded-full bg-primary/8 px-4 py-2 text-sm font-semibold text-primary dark:bg-primary/12">
              4 products
            </div>
          </div>

          <div className="mt-6 grid gap-5">
            { products.map((product) => {
              const isFeatured = product.status === 'Featured'
              const isOutOfStock = product.stock === 0

              return (
                <article
                  key={ product.name }
                  className="overflow-hidden rounded-[28px] border border-primary/10 bg-slate-50/70 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="relative h-56 w-full md:h-auto md:w-52">
                      <Image src={ product.image } alt={ product.name } fill className="object-cover" />
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                            { product.category }
                          </p>
                          <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                            { product.name }
                          </h3>
                        </div>

                        <div
                          className={ `rounded-full px-3 py-1 text-xs font-semibold ${
                            isOutOfStock
                              ? 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-300'
                              : isFeatured
                                ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-white'
                                : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300'
                          }` }
                        >
                          { product.status }
                        </div>
                      </div>

                      <div className="mt-5 grid gap-3 sm:grid-cols-3">
                        <div className="rounded-2xl bg-white px-4 py-3 dark:bg-white/[0.04]">
                          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Price</p>
                          <p className="mt-2 text-base font-semibold text-slate-900 dark:text-white">
                            { product.price }
                          </p>
                        </div>
                        <div className="rounded-2xl bg-white px-4 py-3 dark:bg-white/[0.04]">
                          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Stock</p>
                          <p className="mt-2 text-base font-semibold text-slate-900 dark:text-white">
                            { product.stock }
                          </p>
                        </div>
                        <div className="rounded-2xl bg-white px-4 py-3 dark:bg-white/[0.04]">
                          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Visibility</p>
                          <p className="mt-2 text-base font-semibold text-slate-900 dark:text-white">
                            { isFeatured ? 'Homepage' : 'Catalog' }
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-3">
                        <button className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary/25 hover:text-primary dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200">
                          <PencilLine className="size-4" />
                          Edit
                        </button>
                        <button className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary/25 hover:text-primary dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200">
                          <Eye className="size-4" />
                          View
                        </button>
                        <button className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary/25 hover:text-primary dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200">
                          <Star className="size-4" />
                          { isFeatured ? 'Featured' : 'Feature' }
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              )
            }) }
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-[2rem] border border-[var(--admin-border)] bg-[var(--admin-surface)] p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
            <p className="text-xs font-semibold tracking-[0.24em] text-primary uppercase">Featured plan</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">Spotlight queue</h2>
            <div className="mt-5 space-y-3">
              <div className="rounded-2xl bg-slate-50 px-4 py-4 dark:bg-white/[0.04]">
                <p className="font-semibold text-slate-900 dark:text-white">Premium Custom Celebration Box</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Priority homepage placement</p>
              </div>
              <div className="rounded-2xl bg-slate-50 px-4 py-4 dark:bg-white/[0.04]">
                <p className="font-semibold text-slate-900 dark:text-white">Romantic Rose & Chocolate Set</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Strong seasonal engagement</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--admin-border)] bg-[var(--admin-surface)] p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
            <p className="text-xs font-semibold tracking-[0.24em] text-primary uppercase">Restock watch</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">Low inventory</h2>
            <div className="mt-5 rounded-2xl bg-amber-50 px-4 py-4 dark:bg-amber-500/10">
              <p className="font-semibold text-slate-900 dark:text-white">Birthday Surprise Gift Box</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Out of stock and hidden from quick checkout flows.</p>
            </div>
          </div>
        </div>
      </div>
    </ProductSectionShell>
  )
}
