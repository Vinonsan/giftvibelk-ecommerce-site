import { transformApiResponse } from '../base/transform/apiTransform'
import type { ApiResponse } from '../base/types/api'

export interface UploadRequestInput {
  file: Blob | FormData
  storageType: number
  fieldName?: string
  fileName?: string
}

export const isFormDataBody = (value: unknown): value is FormData => {
  return typeof FormData !== 'undefined' && value instanceof FormData
}

export const isWrappedApiResponse = (
  response: unknown
): response is { isError: boolean; error: unknown; result: unknown } => {
  return (
    response !== null &&
    typeof response === 'object' &&
    'isError' in response &&
    'error' in response &&
    'result' in response
  )
}

export const createUploadFormData = ({
  file,
  storageType,
  fieldName = 'file',
  fileName
}: UploadRequestInput): FormData => {
  if (isFormDataBody(file)) {
    if (!file.has('StorageType')) {
      file.append('StorageType', String(storageType))
    }

    return file
  }

  const formData = new FormData()
  const resolvedFileName =
    fileName ?? ('name' in file && typeof file.name === 'string' ? file.name : 'upload')

  formData.append(fieldName, file, resolvedFileName)
  formData.append('StorageType', String(storageType))

  return formData
}

const isLikelyFileUrl = (value: string): boolean => {
  return /^(https?:\/\/|\/)/i.test(value)
}

export const extractUrlFromValue = (
  value: unknown,
  visited = new Set<unknown>()
): string | null => {
  if (typeof value === 'string') {
    return isLikelyFileUrl(value) ? value : null
  }

  if (!value || typeof value !== 'object' || visited.has(value)) {
    return null
  }

  visited.add(value)

  if (Array.isArray(value)) {
    for (const item of value) {
      const nestedUrl = extractUrlFromValue(item, visited)

      if (nestedUrl) return nestedUrl
    }

    return null
  }

  const responseRecord = value as Record<string, unknown>
  const candidateKeys = [
    'url',
    'fileUrl',
    'downloadUrl',
    'absoluteUrl',
    'publicUrl',
    'uri',
    'location',
    'path',
    'filePath',
    'fullPath',
    'blobUrl'
  ] as const

  for (const key of candidateKeys) {
    const candidateValue = responseRecord[key]

    if (typeof candidateValue === 'string' && candidateValue.length > 0) {
      return candidateValue
    }
  }

  for (const nestedValue of Object.values(responseRecord)) {
    const nestedUrl = extractUrlFromValue(nestedValue, visited)

    if (nestedUrl) return nestedUrl
  }

  return null
}

export const transformUploadResponse = <T>(
  response: unknown,
  mapResult: (_url: string) => T
): T => {
  const normalizeResponse = (result: unknown): T => {
    if (typeof result === 'string') {
      return mapResult(result)
    }

    const extractedUrl = extractUrlFromValue(result)

    if (extractedUrl) {
      return mapResult(extractedUrl)
    }

    throw new Error('Invalid blob upload response format')
  }

  if (isWrappedApiResponse(response)) {
    return transformApiResponse(response as ApiResponse<unknown>, normalizeResponse)
  }

  return normalizeResponse(response)
}
