'use client'

import { FormEvent, useState } from 'react'
import { X } from 'lucide-react'

import Button from '@/components/ui/Button'
import FileUpload from '@/components/ui/FileUpload'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import { comboStatusOptions } from '../constants'
import type { Combo } from '../types'

type AddProductModalProps = {
  combo?: Combo | null
  isOpen: boolean
  onClose: () => void
  onSubmit: (_payload: { id?: string; image: File | null }) => Promise<void> | void
}

export default function AddProductModal({
  combo,
  isOpen,
  onClose,
  onSubmit,
}: AddProductModalProps) {
  const [image, setImage] = useState<File | null>(null)
  const isEditing = Boolean(combo)

  if (!isOpen) {
    return null
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await onSubmit({ id: combo?.id, image })
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/50 px-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-background p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{isEditing ? 'Update Combo' : 'Add Combo'}</h2>
            <p className="mt-1 text-sm text-admin-muted">Manage combo name, price, products, and display image.</p>
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
          <Input label="Combo name" defaultValue={combo?.name} placeholder="Birthday Celebration Combo" required />
          <Input label="Combo price" defaultValue={combo?.price} placeholder="LKR 15,500" required />
          <Input label="Products count" type="number" defaultValue={combo?.itemCount} placeholder="4" min={1} />
          <Select label="Status" defaultValue={combo?.status ?? 'Active'} options={comboStatusOptions} />

          <div className="lg:col-span-2">
            <FileUpload
              file={image}
              onFileChange={setImage}
              previewUrl={combo?.imageUrl}
              helperText="Upload a combo image."
              label="Combo image"
            />
          </div>

          <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end lg:col-span-2">
            <Button type="button" variant="outline" size="sm" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="sm">
              {isEditing ? 'Update Combo' : 'Add Combo'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
