'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Plus, RefreshCw, Tags } from 'lucide-react'

import { useGetAllCatagoryQuery } from '@/lib/redux/api/catagory/api'
import type { ApiErrorShape } from '@/lib/types/api'
import ProductSectionShell from '../../../_utils/components/ProductSectionShell'

const PAGE_LIMIT = 10

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(value))
}

function getErrorMessage(error: unknown) {
  return (error as ApiErrorShape | undefined)?.detail ?? 'Unable to load categories.'
}

export default function AdminProductCategoriesPage() {
  const [page, setPage] = useState(1)
  const { data, error, isFetching, isLoading, refetch } = useGetAllCatagoryQuery({ page, limit: PAGE_LIMIT })
  const categories = data?.items ?? []
  const pagination = data?.pagination
  const loading = isLoading || isFetching
  const totalPages = pagination?.totalPages ?? 0
  const canGoPrevious = page > 1
  const canGoNext = totalPages > 0 ? page < totalPages : categories.length === PAGE_LIMIT

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
      <div className="rounded-[2rem] border border-[var(--admin-border)] bg-[var(--admin-surface)] p-5 shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-primary uppercase">Categories API</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">All categories</h2>
          </div>

          <button
            type="button"
            onClick={() => refetch()}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/5 dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            <RefreshCw className={`size-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>

        {error ? (
          <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-200">
            {getErrorMessage(error)}
          </div>
        ) : null}

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {loading && categories.length === 0
            ? Array.from({ length: 6 }, (_, index) => (
                <div
                  key={index}
                  className="h-44 animate-pulse rounded-[28px] border border-primary/10 bg-slate-100 dark:border-white/10 dark:bg-white/[0.05]"
                />
              ))
            : categories.map((category) => (
                <article
                  key={category.id}
                  className="rounded-[28px] border border-primary/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-primary/20 dark:text-white">
                      <Tags className="size-5" />
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        category.isArchived
                          ? 'bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300'
                          : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300'
                      }`}
                    >
                      {category.isArchived ? 'Archived' : 'Active'}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{category.name}</h3>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-slate-50 px-4 py-3 dark:bg-white/[0.04]">
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Created</p>
                      <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                        {formatDate(category.createdAt)}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 px-4 py-3 dark:bg-white/[0.04]">
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Updated</p>
                      <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                        {formatDate(category.updatedAt)}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
        </div>

        {!loading && categories.length === 0 && !error ? (
          <div className="mt-6 rounded-2xl bg-slate-50 px-4 py-8 text-center text-sm font-medium text-slate-500 dark:bg-white/[0.04] dark:text-slate-300">
            No categories found.
          </div>
        ) : null}

        <div className="mt-6 flex flex-col gap-4 border-t border-[var(--admin-border)] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-[var(--admin-muted)]">
            Page {pagination?.page ?? page}
            {totalPages > 0 ? ` of ${totalPages}` : ''} · {pagination?.total ?? categories.length} categories
          </p>

          <div className="flex gap-2">
            <button
              type="button"
              disabled={!canGoPrevious || loading}
              onClick={() => setPage((currentPage) => Math.max(1, currentPage - 1))}
              className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary/25 hover:text-primary disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200"
            >
              <ChevronLeft className="size-4" />
              Previous
            </button>
            <button
              type="button"
              disabled={!canGoNext || loading}
              onClick={() => setPage((currentPage) => currentPage + 1)}
              className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary/25 hover:text-primary disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200"
            >
              Next
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </ProductSectionShell>
  )
}
