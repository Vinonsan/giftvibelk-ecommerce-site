'use client'

import Image from 'next/image'
import { ImagePlus, X } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'

interface FileUploadProps {
  acceptedFormats?: string[]
  className?: string
  disabled?: boolean
  file: File | null
  helperText?: string
  label?: string
  maxFileSize?: number
  onFileChange: (_file: File | null) => void
  onValidationError?: (_errors: string[]) => void
  previewUrl?: string
}

const defaultFormats = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp']

function formatMegabytes(value: number) {
  return `${value}MB`
}

export default function FileUpload({
  acceptedFormats = defaultFormats,
  className = '',
  disabled = false,
  file,
  helperText,
  label = 'Image',
  maxFileSize = 2,
  onFileChange,
  onValidationError,
  previewUrl,
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const objectUrl = useMemo(() => (file ? URL.createObjectURL(file) : null), [file])
  const preview = objectUrl ?? previewUrl

  useEffect(() => {
    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl)
      }
    }
  }, [objectUrl])

  const validateFile = (selectedFile: File) => {
    const errors: string[] = []

    if (!acceptedFormats.includes(selectedFile.type)) {
      errors.push('Please upload a valid image file.')
    }

    if (selectedFile.size > maxFileSize * 1024 * 1024) {
      errors.push(`File size must be less than ${formatMegabytes(maxFileSize)}.`)
    }

    if (errors.length) {
      onValidationError?.(errors)
      return false
    }

    return true
  }

  const handleFiles = (files: FileList | File[]) => {
    const selectedFile = Array.from(files)[0]

    if (!selectedFile || !validateFile(selectedFile)) {
      return
    }

    onValidationError?.([])
    onFileChange(selectedFile)
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {label ? <p className="text-sm font-medium text-foreground">{label}</p> : null}

      <button
        type="button"
        disabled={disabled}
        onClick={() => inputRef.current?.click()}
        onDragOver={(event) => {
          event.preventDefault()
          setIsDragOver(true)
        }}
        onDragLeave={(event) => {
          event.preventDefault()
          setIsDragOver(false)
        }}
        onDrop={(event) => {
          event.preventDefault()
          setIsDragOver(false)
          handleFiles(event.dataTransfer.files)
        }}
        className={`relative flex min-h-44 w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed p-4 text-center transition disabled:cursor-not-allowed disabled:opacity-60 ${
          isDragOver
            ? 'border-primary bg-primary/5'
            : 'border-secondary/20 hover:border-primary/50 hover:bg-primary/5'
        }`}
      >
        {preview ? (
          <>
            <Image src={preview} alt="Selected upload preview" fill sizes="320px" className="object-cover" />
            <span className="absolute inset-0 bg-black/25" />
            <span className="relative rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-primary">
              Change image
            </span>
          </>
        ) : (
          <>
            <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <ImagePlus className="size-5" />
            </span>
            <span className="mt-3 text-sm font-semibold text-foreground">Upload category image</span>
            <span className="mt-1 text-xs text-admin-muted">PNG, JPG or WEBP up to {formatMegabytes(maxFileSize)}</span>
          </>
        )}
      </button>

      <input
        ref={inputRef}
        type="file"
        accept={acceptedFormats.join(',')}
        className="hidden"
        disabled={disabled}
        onChange={(event) => {
          if (event.target.files) {
            handleFiles(event.target.files)
            event.target.value = ''
          }
        }}
      />

      {file || previewUrl ? (
        <button
          type="button"
          onClick={() => onFileChange(null)}
          className="inline-flex items-center gap-2 text-xs font-semibold text-admin-muted transition hover:text-primary"
        >
          <X className="size-3.5" />
          Remove image
        </button>
      ) : helperText ? (
        <p className="text-xs text-admin-muted">{helperText}</p>
      ) : null}
    </div>
  )
}
