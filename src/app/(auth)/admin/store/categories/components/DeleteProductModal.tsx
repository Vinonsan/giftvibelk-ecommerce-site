'use client'

import { AlertTriangle, X } from 'lucide-react'

import Button from '@/components/ui/Button'
import type { ICatagoryTransform } from '@/lib/redux/api/catagory/types/transform'

type DeleteProductModalProps = {
  category: ICatagoryTransform | null
  isDeleting?: boolean
  isOpen: boolean
  onClose: () => void
  onConfirm: (_category: ICatagoryTransform) => Promise<void> | void
}

export default function DeleteProductModal({
  category,
  isDeleting = false,
  isOpen,
  onClose,
  onConfirm,
}: DeleteProductModalProps) {
  if (!isOpen || !category) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/50 px-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl bg-background p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-full bg-red-50 text-red-600">
              <AlertTriangle className="size-5" />
            </span>
            <h2 className="text-xl font-bold text-foreground">Delete Category</h2>
          </div>

          <button
            type="button"
            aria-label="Close modal"
            onClick={onClose}
            className="inline-flex size-10 items-center justify-center rounded-full text-admin-muted transition hover:bg-primary/10 hover:text-primary"
          >
            <X className="size-5" />
          </button>
        </div>

        <p className="mt-5 text-sm leading-6 text-admin-muted">
          Are you sure you want to delete <strong className="font-bold text-foreground">{category.name}</strong>?
          This action cannot be undone.
        </p>

        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Button type="button" variant="outline" size="sm" onClick={onClose}>
            Cancel
          </Button>
          <Button type="button" variant="primary" size="sm" disabled={isDeleting} onClick={() => onConfirm(category)}>
            {isDeleting ? 'Deleting...' : 'Okay, Delete'}
          </Button>
        </div>
      </div>
    </div>
  )
}
