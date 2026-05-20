'use client'

import Image from 'next/image'
import { PencilLine, Plus, Trash2 } from 'lucide-react'
import { useState } from 'react'

import Button from '@/components/ui/Button'
import DataTable, { type ColumnDef } from '@/components/ui/DataTable'
import { products } from '../constants'
import type { Product } from '../types'
import AddProductModal from './AddProductModal'
import DeleteProductModal from './DeleteProductModal'

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(value))
}

export default function PageChildren() {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [deletingProduct, setDeletingProduct] = useState<Product | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const openAddModal = () => {
    setEditingProduct(null)
    setIsFormOpen(true)
  }

  const openEditModal = (product: Product) => {
    setEditingProduct(product)
    setIsFormOpen(true)
  }

  const columns: ColumnDef<Product>[] = [
    {
      accessorKey: 'name',
      header: 'Product',
      cell: ({ row }) => (
        <div className="flex items-center gap-4">
          <div className="relative size-14 overflow-hidden rounded-2xl bg-primary/8">
            <Image src={row.original.imageUrl} alt={row.original.name} fill sizes="56px" className="object-cover" />
          </div>
          <div>
            <p className="font-semibold text-admin-text">{row.original.name}</p>
            <p className="text-xs text-admin-muted">{row.original.category}</p>
          </div>
        </div>
      ),
      meta: { width: 34 },
    },
    {
      accessorKey: 'price',
      header: 'Price',
      cell: ({ row }) => <span className="font-bold text-admin-text">{row.original.price}</span>,
      meta: { width: 16 },
    },
    {
      accessorKey: 'stock',
      header: 'Stock',
      cell: ({ row }) => <span className="text-admin-muted">{row.original.stock} available</span>,
      meta: { width: 14 },
    },
    {
      accessorKey: 'createdAt',
      header: 'Created Date',
      cell: ({ row }) => <span className="text-admin-muted">{formatDate(row.original.createdAt)}</span>,
      meta: { width: 16 },
    },
    {
      id: 'actions',
      header: 'Action',
      cell: ({ row }) => (
        <div className="flex flex-row gap-3">
          <Button type="button" variant="gray" size="sm" onClick={() => openEditModal(row.original)}>
            <PencilLine className="size-4" />
          </Button>
          <Button type="button" variant="gray" size="sm" onClick={() => setDeletingProduct(row.original)}>
            <Trash2 className="size-4" />
          </Button>
        </div>
      ),
      meta: { width: 12 },
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-xl bg-black/5 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-admin-text">Products</h1>
          <p className="max-w-xl text-base text-admin-muted">Manage products, images, stock, and storefront status.</p>
        </div>
        <Button type="button" variant="primary" size="sm" onClick={openAddModal}>
          <Plus className="size-4" />
          Add Product
        </Button>
      </div>

      <DataTable
        data={products}
        columns={columns}
        totalCount={products.length}
        pageSize={pageSize}
        pageNumber={page}
        onPageSizeChange={setPageSize}
        onPageNumberChange={setPage}
        emptyMessage="No products found"
        emptyDescription="Create your first product to start building your catalog."
      />

      <AddProductModal
        key={editingProduct?.id ?? 'new-product'}
        product={editingProduct}
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false)
          setEditingProduct(null)
        }}
        onSubmit={() => {
          setIsFormOpen(false)
          setEditingProduct(null)
        }}
      />
      <DeleteProductModal
        product={deletingProduct}
        isOpen={Boolean(deletingProduct)}
        onClose={() => setDeletingProduct(null)}
        onConfirm={() => setDeletingProduct(null)}
      />
    </div>
  )
}
