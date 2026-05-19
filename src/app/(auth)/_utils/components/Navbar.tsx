'use client'

import { Bell, Menu } from 'lucide-react'

import ThemeToggle from '@/components/ui/ThemeToggle'
import ProfileMenu from './navbar/ProfileMenu'

type NavbarProps = {
  onMenuClick: () => void
  isSidebarCollapsed: boolean
}

const Navbar = ({ onMenuClick, isSidebarCollapsed }: NavbarProps) => {
  return (
    <header
      className={ `fixed inset-x-0 top-0 z-40 border-b border-admin-border bg-background shadow-sm backdrop-blur transition-[left] ${
        isSidebarCollapsed ? 'lg:left-24' : 'lg:left-72'
      }` }
    >
      <div className="flex py-3 items-center justify-end gap-3 px-4">
        <button
          type="button"
          aria-label="Open admin navigation"
          onClick={ onMenuClick }
          className="mr-auto inline-flex size-11 items-center justify-center rounded-full border border-white/10 text-foreground transition  lg:hidden"
        >
          <Menu className="size-5" />
        </button>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label="View notifications"
            className="relative inline-flex size-10 items-center justify-center rounded-full text-foreground transition "
          >
            <Bell className="text-foreground" />
            <span className="absolute right-2 top-2 p-1 rounded-full bg-primary" />
          </button>
          <ProfileMenu />
        </div>
      </div>
    </header>
  )
}

export default Navbar
