'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

import { ChevronDown } from 'lucide-react'

import Button from '@/components/ui/Button'
import { useLogout } from '@/lib/hooks/useLogout'

const ProfileMenu = () => {
  const menuRef = useRef<HTMLDivElement>(null)
  const handleLogout = useLogout()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative" ref={ menuRef }>
      <Button
        type="button"
        disabled={ false }
        variant="none"
        onClick={ toggleMenu }
        className="relative flex items-center rounded-full bg-transparent px-1 py-1"
      >
        <span className="absolute -inset-1.5" />
        <span className="sr-only">Open user menu</span>
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
          className="size-12 rounded-full border-2 border-primary object-cover"
        />
        <span className="hidden lg:flex lg:items-center">
          <span className="ml-4 text-left">
            <span className="block text-base font-semibold text-white">Giftvibelk Admin</span>
            <span className="block pt-1 text-sm text-white/70">Staff</span>
          </span>
          <ChevronDown className="ml-3 size-4 text-white/70" />
        </span>
      </Button>

      { isMenuOpen && (
        <div className="absolute right-0 z-50 mt-3 w-56 origin-top-right rounded-2xl border border-admin-border bg-admin-surface py-2 shadow-lg">
          <Link
            href="#"
            className="block px-4 py-2 text-sm text-admin-text transition-colors hover:bg-primary/5 focus:bg-primary/5 focus:outline-hidden"
          >
            Your profile
          </Link>
          <button
            type="button"
            onClick={ handleLogout }
            className="block w-full px-4 py-2 text-left text-sm text-admin-text transition-colors hover:bg-primary/5 focus:bg-primary/5 focus:outline-hidden"
          >
            Sign out
          </button>
        </div>
      ) }
    </div>
  )
}

export default ProfileMenu
