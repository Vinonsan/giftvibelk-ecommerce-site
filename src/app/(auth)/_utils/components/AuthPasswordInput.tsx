'use client'

import { Eye, EyeOff, Lock } from 'lucide-react'
import { useState } from 'react'

import Input from '@/components/ui/Input'

type AuthPasswordInputProps = {
  label?: string
  name?: string
  placeholder?: string
}

export default function AuthPasswordInput({
  label = 'Password',
  name = 'password',
  placeholder = 'Enter password',
}: AuthPasswordInputProps) {
  const [isVisible, setIsVisible] = useState(false)
  const Icon = isVisible ? EyeOff : Eye

  return (
    <Input
      label={label}
      name={name}
      type={isVisible ? 'text' : 'password'}
      placeholder={placeholder}
      leadingIcon={<Lock className="size-4" />}
      trailingIcon={
        <button
          type="button"
          aria-label={isVisible ? 'Hide password' : 'Show password'}
          onClick={() => setIsVisible((value) => !value)}
          className="text-admin-muted transition hover:text-primary"
        >
          <Icon className="size-4" />
        </button>
      }
      required
    />
  )
}
