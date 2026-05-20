'use client'

import { FormEvent, useState } from 'react'
import { X } from 'lucide-react'

import Button from '@/components/ui/Button'
import FileUpload from '@/components/ui/FileUpload'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import { productCategoryOptions, productStatusOptions } from '../constants'
import type { Product } from '../types'

type AddProductModalProps = {
  isOpen: boolean
  product?: Product | null
  onClose: () => void
  onSubmit: (_payload: { id?: string; image: File | null }) => Promise<void> | void
}

export default function AddProductModal({
  isOpen,
  product,
  onClose,
  onSubmit,
}: AddProductModalProps) {
  const [image, setImage] = useState<File | null>(null)
  const isEditing = Boolean(product)

  if (!isOpen) {
    return null
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await onSubmit({ id: product?.id, image })
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/50 px-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-background p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{isEditing ? 'Update Product' : 'Add Product'}</h2>
            <p className="mt-1 text-sm text-admin-muted">Manage product details, pricing, stock, and display image.</p>
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

        <form onSubmit={handleSubmit} className="mt-6 grid gap-5 lg:grid-cols-2">
          <Input label="Product name" defaultValue={product?.name} placeholder="Premium Gift Hamper" required />
          <Input label="Price" defaultValue={product?.price} placeholder="LKR 8,500" required />
          <Select
            label="Category"
            defaultValue={product?.category}
            placeholder="Select category"
            options={productCategoryOptions}
          />
          <Input label="Stock" type="number" defaultValue={product?.stock} placeholder="10" min={0} />
          <Select label="Status" defaultValue={product?.status ?? 'Active'} options={productStatusOptions} />

          <div className="lg:row-span-2">
            <FileUpload
              file={image}
              onFileChange={setImage}
              previewUrl={product?.imageUrl}
              helperText="Upload a product image."
              label="Product image"
            />
          </div>

          <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end lg:col-span-2">
            <Button type="button" variant="outline" size="sm" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="sm">
              {isEditing ? 'Update Product' : 'Add Product'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
