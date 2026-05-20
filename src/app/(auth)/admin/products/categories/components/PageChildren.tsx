'use client'

import Image from 'next/image'
import { PencilLine, Plus, Trash2 } from 'lucide-react'
import { useState } from 'react'

import DataTable, { type ColumnDef } from '@/components/ui/DataTable'
import { useGetAllCatagoryQuery } from '@/lib/redux/api/catagory/api'
import type { ICatagoryTransform } from '@/lib/redux/api/catagory/types/transform'
import type { ApiErrorShape } from '@/lib/types/api'
import Button from '@/components/ui/Button'

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

export default function PageChildren() {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(PAGE_LIMIT)
  const { data, error, isFetching, isLoading } = useGetAllCatagoryQuery({ page, limit: pageSize })
  const categories = data?.items ?? []
  const pagination = data?.pagination
  const loading = isLoading || isFetching

  const columns: ColumnDef<ICatagoryTransform>[] = [
    {
      accessorKey: 'name',
      header: 'Category',
      cell: ({ row }) => (
        <p className="font-semibold text-admin-text">{row.original.name}</p>
      ),
      meta: { width: 34 },
    },
    {
      accessorKey: 'imageUrl',
      header: 'Image',
      cell: ({ row }) => (
        <div className="relative size-16 overflow-hidden rounded-2xl bg-primary/8">
          {row.original.imageUrl ? (
            <Image
              src={row.original.imageUrl}
              alt={row.original.name}
              fill
              sizes="64px"
              className="object-cover"
            />
          ) : (
            <div className="flex size-full items-center justify-center text-xs font-semibold text-primary">
              No image
            </div>
          )}
        </div>
      ),
      meta: { width: 18 },
    },
    {
      accessorKey: 'createdAt',
      header: 'Created Date',
      cell: ({ row }) => <span className="text-admin-muted">{formatDate(row.original.createdAt)}</span>,
      meta: { width: 24 },
    },
    {
      id: 'actions',
      header: 'Action',
      cell: ({ row }) => (
        <div className="flex flex-wrap gap-4">
          <Button
            variant='gray'
            size='sm'

            onClick={()=>{}}
          >
            <PencilLine className="size-4" />
          </Button>
          <Button
            variant='gray'
            size='sm'
            onClick={()=>{}}
          >
            <Trash2 className="size-4" />
          </Button>
        </div>
      ),
      meta: { width: 24 },
    },
  ]

  return (
    <div className="space-y-6">


      <div className="rounded-xl flex justify-between items-center bg-black/5 px-2 py-3">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-dark/10">Category</h1>
          <p className="max-w-xl text-base text-admin-muted">
            Manage your product categories and organize your inventory.
          </p>
        </div>
        <Button
          variant="primary"
          size='sm'
          onClick={() => { }}
        >
          <Plus className="size-4" />
          Add Category
        </Button>
      </div>
      <DataTable
        data={categories}
        columns={columns}
        totalCount={pagination?.total ?? categories.length}
        pageSize={pageSize}
        pageNumber={page}
        onPageSizeChange={setPageSize}
        onPageNumberChange={setPage}
        isLoading={loading}
        isError={Boolean(error)}
        errorMessage={getErrorMessage(error)}
        emptyMessage="No categories found"
        emptyDescription="Create your first product category to start organizing gifts."
      />
    </div>
  )
}
