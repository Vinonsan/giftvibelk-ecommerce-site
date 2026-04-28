'use client'

import { useState } from 'react'

import { createUploadFormData } from '@/lib/redux/api/_utils/upload'
import { apiClient } from '@/lib/redux/api/base'
import { getApiErrorMessage } from '@/lib/redux/api/base/errorHandler'

interface UploadOptions {
  endpoint: string
  fieldName?: string
  values?: Record<string, string | Blob>
}

export function useFileUpload<TResponse = unknown>() {
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function upload(file: File, options: UploadOptions): Promise<TResponse | null> {
    setIsUploading(true)
    setError(null)

    const response = await apiClient.post<TResponse>(
      options.endpoint,
      createUploadFormData([{ file, fieldName: options.fieldName }], options.values),
    )

    setIsUploading(false)

    if (response.isError) {
      setError(getApiErrorMessage(response.error))
      return null
    }

    return response.result
  }

  return {
    upload,
    isUploading,
    error,
  }
}
