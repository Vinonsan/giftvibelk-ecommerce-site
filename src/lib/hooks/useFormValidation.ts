'use client'

import { useState } from 'react'
import type { ZodIssue, ZodSchema } from 'zod'

export type FormErrors<TValues> = Partial<Record<keyof TValues, string>>

function toFormErrors<TValues>(issues: ZodIssue[]): FormErrors<TValues> {
  const nextErrors: Partial<Record<keyof TValues, string>> = {}

  issues.forEach((issue) => {
    const field = issue.path[0] as keyof TValues | undefined

    if (field && !nextErrors[field]) {
      nextErrors[field] = issue.message
    }
  })

  return nextErrors
}

export function useFormValidation<TValues extends Record<string, unknown>>(
  schema: ZodSchema<TValues>,
) {
  const [errors, setErrors] = useState<FormErrors<TValues>>({})

  function validate(values: TValues): boolean {
    const result = schema.safeParse(values)

    if (result.success) {
      setErrors({})
      return true
    }

    setErrors(toFormErrors<TValues>(result.error.issues))
    return false
  }

  function clearErrors(): void {
    setErrors({})
  }

  return {
    errors,
    validate,
    clearErrors,
    setErrors,
  }
}
