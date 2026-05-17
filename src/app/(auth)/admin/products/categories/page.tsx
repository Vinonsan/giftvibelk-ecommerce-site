import { Plus, Tags } from 'lucide-react'

import ProductSectionShell from '../../_utils/components/ProductSectionShell'

const categories = [
  { name: 'Birthday', products: 8, accent: 'Best-selling celebration boxes' },
  { name: 'Anniversary', products: 5, accent: 'Keepsakes and curated hampers' },
  { name: 'Romance', products: 6, accent: 'Flowers, chocolates, and custom sets' },
  { name: 'Custom Gift', products: 5, accent: 'Tailored gift experiences' },
]

export default function AdminProductCategoriesPage() {
  return (
    <ProductSectionShell
      eyebrow="Catalog"
      title="Product categories"
      description="Organize your catalog with category groupings that match how customers browse the store."
      actions={
        <button className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90">
          <Plus className="size-4" />
          Add Category
        </button>
      }
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        { categories.map((category) => (
          <article
            key={ category.name }
            className="rounded-[28px] border border-primary/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-primary/20 dark:text-white">
              <Tags className="size-5" />
            </div>
            <h2 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{ category.name }</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{ category.accent }</p>
            <div className="mt-5 rounded-2xl bg-slate-50 px-4 py-3 dark:bg-white/[0.04]">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Products</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{ category.products }</p>
            </div>
          </article>
        )) }
      </div>
    </ProductSectionShell>
  )
}
