'use client'

import { FormEvent, useState } from 'react'
import { X } from 'lucide-react'

import Button from '@/components/ui/Button'
import FileUpload from '@/components/ui/FileUpload'
import Input from '@/components/ui/Input'
import type { ICatagoryTransform } from '@/lib/redux/api/catagory/types/transform'

type AddProductModalProps = {
  category?: ICatagoryTransform | null
  isOpen: boolean
  isSubmitting?: boolean
  onClose: () => void
  onSubmit: (_payload: { id?: string; name: string; image: File | null }) => Promise<void> | void
}

export default function AddProductModal({
  category,
  isOpen,
  isSubmitting = false,
  onClose,
  onSubmit,
}: AddProductModalProps) {
  const [name, setName] = useState(() => category?.name ?? '')
  const [image, setImage] = useState<File | null>(null)
  const [errors, setErrors] = useState<string[]>([])
  const isEditing = Boolean(category)

  if (!isOpen) {
    return null
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!name.trim()) {
      setErrors(['Category name is required.'])
      return
    }

    await onSubmit({
      id: category?.id,
      name: name.trim(),
      image,
    })
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/50 px-4 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-2xl bg-background p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{isEditing ? 'Update Category' : 'Add Category'}</h2>
            <p className="mt-1 text-sm text-admin-muted">
              {isEditing ? 'Update category name and image.' : 'Create a new category for your product catalog.'}
            </p>
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

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <Input
            label="Category name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Gift Hampers"
            error={errors[0]}
          />

          <FileUpload
            file={image}
            onFileChange={setImage}
            previewUrl={category?.imageUrl}
            onValidationError={setErrors}
            helperText="Upload a category image."
          />

          <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
            <Button type="button" variant="outline" size="sm" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="sm" disabled={isSubmitting}>
              {isSubmitting ? 'Saving...' : isEditing ? 'Update Category' : 'Add Category'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
