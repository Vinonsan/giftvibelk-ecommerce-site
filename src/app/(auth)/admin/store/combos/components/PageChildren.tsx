'use client'

import Image from 'next/image'
import { PencilLine, Plus, Trash2 } from 'lucide-react'
import { useState } from 'react'

import Button from '@/components/ui/Button'
import DataTable, { type ColumnDef } from '@/components/ui/DataTable'
import { combos } from '../constants'
import type { Combo, ComboStatus } from '../types'
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
  const [editingCombo, setEditingCombo] = useState<Combo | null>(null)
  const [deletingCombo, setDeletingCombo] = useState<Combo | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const openAddModal = () => {
    setEditingCombo(null)
    setIsFormOpen(true)
  }

  const openEditModal = (combo: Combo) => {
    setEditingCombo(combo)
    setIsFormOpen(true)
  }

  const columns: ColumnDef<Combo>[] = [
    {
      accessorKey: 'name',
      header: 'Combo',
      cell: ({ row }) => (
        <div className="flex items-center gap-4">
          <div className="relative size-14 overflow-hidden rounded-2xl bg-primary/8">
            <Image src={row.original.imageUrl} alt={row.original.name} fill sizes="56px" className="object-cover" />
          </div>
          <div>
            <p className="font-semibold text-admin-text">{row.original.name}</p>
            <p className="text-xs text-admin-muted">{row.original.itemCount} products included</p>
          </div>
        </div>
      ),
      meta: { width: 36 },
    },
    {
      accessorKey: 'price',
      header: 'Price',
      cell: ({ row }) => <span className="font-bold text-admin-text">{row.original.price}</span>,
      meta: { width: 18 },
    },
    {
      accessorKey: 'createdAt',
      header: 'Created Date',
      cell: ({ row }) => <span className="text-admin-muted">{formatDate(row.original.createdAt)}</span>,
      meta: { width: 20 },
    },
    {
      id: 'actions',
      header: 'Action',
      cell: ({ row }) => (
        <div className="flex flex-row gap-3">
          <Button type="button" variant="gray" size="sm" onClick={() => openEditModal(row.original)}>
            <PencilLine className="size-4" />
          </Button>
          <Button type="button" variant="gray" size="sm" onClick={() => setDeletingCombo(row.original)}>
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
          <h1 className="text-2xl font-extrabold tracking-tight text-admin-text">Combos</h1>
          <p className="max-w-xl text-base text-admin-muted">Manage grouped gift combos and storefront bundles.</p>
        </div>
        <Button type="button" variant="primary" size="sm" onClick={openAddModal}>
          <Plus className="size-4" />
          Add Combo
        </Button>
      </div>

      <DataTable
        data={combos}
        columns={columns}
        totalCount={combos.length}
        pageSize={pageSize}
        pageNumber={page}
        onPageSizeChange={setPageSize}
        onPageNumberChange={setPage}
        emptyMessage="No combos found"
        emptyDescription="Create a combo to sell curated gift bundles."
      />

      <AddProductModal
        key={editingCombo?.id ?? 'new-combo'}
        combo={editingCombo}
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false)
          setEditingCombo(null)
        }}
        onSubmit={() => {
          setIsFormOpen(false)
          setEditingCombo(null)
        }}
      />
      <DeleteProductModal
        combo={deletingCombo}
        isOpen={Boolean(deletingCombo)}
        onClose={() => setDeletingCombo(null)}
        onConfirm={() => setDeletingCombo(null)}
      />
    </div>
  )
}
