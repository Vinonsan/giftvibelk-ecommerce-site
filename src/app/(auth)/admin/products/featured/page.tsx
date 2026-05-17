import { Eye, Sparkles, Star } from 'lucide-react'

import ProductSectionShell from '../../_utils/components/ProductSectionShell'

const featuredProducts = [
  'Premium Custom Celebration Box',
  'Romantic Rose & Chocolate Set',
  'Anniversary Keepsake Hamper',
]

export default function AdminProductFeaturedPage() {
  return (
    <ProductSectionShell
      eyebrow="Catalog"
      title="Featured products"
      description="Choose which products deserve the spotlight on the home page and keep your premium catalog visible."
      actions={
        <button className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary/5 dark:border-white/10 dark:bg-white/5 dark:text-white">
          <Eye className="size-4" />
          Preview Featured
        </button>
      }
    >
      <div className="grid gap-5 xl:grid-cols-3">
        { featuredProducts.map((name, index) => (
          <article
            key={ name }
            className="rounded-[28px] border border-primary/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
                <Sparkles className="size-5" />
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary dark:bg-primary/20 dark:text-white">
                Slot { index + 1 }
              </span>
            </div>

            <h2 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{ name }</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Featured on the storefront to drive attention during key gift-buying moments.
            </p>

            <button className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary/25 hover:text-primary dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200">
              <Star className="size-4" />
              Manage spotlight
            </button>
          </article>
        )) }
      </div>
    </ProductSectionShell>
  )
}
