export interface FileUploadValue {
  file: File
  fieldName?: string
}

export function createUploadFormData(
  files: FileUploadValue[],
  values?: Record<string, string | Blob>,
): FormData {
  const formData = new FormData()

  files.forEach(({ file, fieldName }) => {
    formData.append(fieldName ?? 'file', file)
  })

  if (values) {
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value)
    })
  }

  return formData
}
