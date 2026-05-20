'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Box,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Contact,
  Folder,
  Grid2X2,
  HeartHandshake,
  LayoutDashboard,
  LogOut,
  PackageSearch,
  Settings,
  Sparkles,
  Tags,
  Ticket,
  X,
  Users,
  Webhook,
  type LucideIcon,
} from 'lucide-react'

import { useLogout } from '@/lib/hooks/useLogout'

type SubMenuItem = {
  label: string
  href: string
  icon: LucideIcon
  children?: SubMenuItem[]
}

type MenuItem = {
  label: string
  href: string
  icon: LucideIcon
  children?: SubMenuItem[]
}

const menuItems: MenuItem[] = [
  {
    label: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
  },
  {
    label: 'Orders',
    href: '/admin/orders',
    icon: ClipboardList,
  },
  {
    label: 'Products',
    href: '/admin/products',
    icon: PackageSearch,
    children: [
      {
        label: 'All Products',
        href: '/admin/products',
        icon: Box,
      },
      {
        label: 'Categories',
        href: '/admin/products/categories',
        icon: Tags,
      },
      {
        label: 'Featured',
        href: '/admin/products/featured',
        icon: Sparkles,
      },
    ],
  },
  {
    label: 'Customers',
    href: '/admin/customers',
    icon: Contact,
  },
  {
    label: 'Gift Collections',
    href: '/admin/collections',
    icon: Folder,
  },
  {
    label: 'System',
    href: '/admin/system',
    icon: Settings,
    children: [
      {
        label: 'System Ideas',
        href: '/admin/system/ideas',
        icon: Grid2X2,
      },
      {
        label: 'Tickets',
        href: '/admin/system/tickets',
        icon: Ticket,
      },
      {
        label: 'Settings',
        href: '/admin/system/settings',
        icon: Settings,
        children: [
          {
            label: 'Users & Groups',
            href: '/admin/system/settings/users',
            icon: Users,
          },
          {
            label: 'Webhooks',
            href: '/admin/system/settings/webhooks',
            icon: Webhook,
          },
        ],
      },
    ],
  },
]

type SidebarProps = {
  isOpen: boolean
  isCollapsed: boolean
  onClose: () => void
  onToggleCollapse: () => void
}

const hasActivePath = (item: MenuItem | SubMenuItem, pathname: string): boolean => {
  if (item.href === '/admin') {
    return pathname === item.href
  }

  return pathname === item.href || pathname.startsWith(`${item.href}/`)
}

const hasActiveDescendant = (item: MenuItem | SubMenuItem, pathname: string): boolean => {
  return item.children?.some((child) => hasActivePath(child, pathname) || hasActiveDescendant(child, pathname)) ?? false
}

const getPathDepth = (href: string) => href.split('/').filter(Boolean).length

const isMostSpecificActive = (item: SubMenuItem, siblings: SubMenuItem[], pathname: string) => {
  const itemActive = hasActivePath(item, pathname) || hasActiveDescendant(item, pathname)

  if (!itemActive) {
    return false
  }

  return !siblings.some((sibling) => {
    if (sibling.href === item.href) {
      return false
    }

    return getPathDepth(sibling.href) > getPathDepth(item.href) && hasActivePath(sibling, pathname)
  })
}

const getDefaultExpandedItems = (pathname: string) => {
  const expandedItems: string[] = []

  menuItems.forEach((item) => {
    if (hasActiveDescendant(item, pathname)) {
      expandedItems.push(item.label)
    }

    item.children?.forEach((child) => {
      if (hasActiveDescendant(child, pathname)) {
        expandedItems.push(child.label)
      }
    })
  })

  return expandedItems
}

const Sidebar = ({ isOpen, isCollapsed, onClose, onToggleCollapse }: SidebarProps) => {
  const pathname = usePathname()
  const handleLogout = useLogout()
  const [expandedItems, setExpandedItems] = useState<string[]>(() => getDefaultExpandedItems(pathname))
  const activeExpandedItems = getDefaultExpandedItems(pathname)

  const isExactActive = (href: string) => {
    return pathname === href
  }

  const isLinkActive = (item: MenuItem | SubMenuItem) => {
    if (item.href === '/admin') {
      return pathname === item.href
    }

    if (item.children) {
      return hasActivePath(item, pathname) || hasActiveDescendant(item, pathname)
    }

    return isExactActive(item.href)
  }

  const toggleTopLevelItem = (label: string) => {
    setExpandedItems((currentItems) => (currentItems.includes(label) ? [] : [label]))
  }

  const toggleNestedItem = (label: string) => {
    setExpandedItems((currentItems) =>
      currentItems.includes(label) ? currentItems.filter((item) => item !== label) : [...currentItems, label],
    )
  }

  return (
    <>
      <div
        className={ `fixed inset-0 z-40 bg-slate-950/45 backdrop-blur-sm transition lg:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }` }
        onClick={ onClose }
      />

      <aside
        className={ `fixed inset-y-0 left-0 z-50 flex flex-col border-r border-admin-border bg-background text-admin-text shadow-2xl transition-[width,transform] duration-300 lg:translate-x-0 ${
          isCollapsed ? 'w-24' : 'w-72'
        } ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }` }
      >
        <button
          type="button"
          aria-label={ isCollapsed ? 'Expand admin navigation' : 'Collapse admin navigation' }
          onClick={ onToggleCollapse }
          className="absolute -right-5 top-6 hidden size-10 items-center justify-center rounded-full border border-admin-border bg-admin-surface text-admin-muted shadow-md transition hover:bg-primary/10 hover:text-primary lg:inline-flex"
        >
          { isCollapsed ? <ChevronRight className="size-5" /> : <ChevronLeft className="size-5" /> }
        </button>

        <div className={ `flex h-20 items-center gap-6 border-b border-admin-border px-4 ${isCollapsed ? 'justify-center' : ''}` }>
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/25">
            <HeartHandshake className="size-6" />
          </div>

          <div className={ `min-w-0 ${isCollapsed ? 'hidden' : 'block'}` }>
            <h2 className="truncate text-xl font-bold leading-none">GiftVibe</h2>
            <p className="pt-1 text-xs font-medium text-admin-muted">Admin workspace</p>
          </div>

          <button
            type="button"
            aria-label="Close admin navigation"
            onClick={ onClose }
            className="ml-auto inline-flex size-10 items-center justify-center rounded-full text-admin-muted transition hover:bg-primary/10 hover:text-primary lg:hidden"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ul className="space-y-5">
            { menuItems.map((item) => {
              const Icon = item.icon
              const active = isLinkActive(item)
              const expanded = expandedItems.includes(item.label) || activeExpandedItems.includes(item.label)

              return (
                <li key={ item.label }>
                  { item.children ? (
                    <button
                      type="button"
                      onClick={ () => {
                        if (isCollapsed) {
                          onToggleCollapse()
                        }

                        toggleTopLevelItem(item.label)
                      } }
                      title={ isCollapsed ? item.label : undefined }
                      className={ `flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                        isCollapsed ? 'justify-center px-0' : 'justify-between'
                      } ${
                        active
                          ? 'bg-primary text-white shadow-sm'
                          : 'text-admin-muted hover:text-primary'
                      }` }
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <Icon className="size-5 shrink-0" />
                        <span className={ `truncate ${isCollapsed ? 'hidden' : 'inline'}` }>{ item.label }</span>
                      </span>

                      { !isCollapsed ? (
                        <ChevronRight className={ `size-4 shrink-0 transition ${expanded ? 'rotate-90' : ''}` } />
                      ) : null }
                    </button>
                  ) : (
                    <Link
                      href={ item.href }
                      onClick={ onClose }
                      title={ isCollapsed ? item.label : undefined }
                      className={ `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                        isCollapsed ? 'justify-center px-0' : 'justify-between'
                      } ${
                        active
                          ? 'bg-primary text-white shadow-sm'
                          : 'text-admin-muted hover:text-primary'
                      }` }
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <Icon className="size-5 shrink-0" />
                        <span className={ `truncate ${isCollapsed ? 'hidden' : 'inline'}` }>{ item.label }</span>
                      </span>
                    </Link>
                  ) }

                  { item.children && expanded && !isCollapsed ? (
                    <ul className="mt-3 space-y-3 border-l border-admin-border pl-4">
                      { item.children.map((subItem) => {
                        const SubIcon = subItem.icon
                        const subActive = isMostSpecificActive(subItem, item.children ?? [], pathname)
                        const subExpanded = expandedItems.includes(subItem.label) || activeExpandedItems.includes(subItem.label)

                        return (
                          <li key={ subItem.label }>
                            { subItem.children ? (
                              <button
                                type="button"
                                onClick={ () => toggleNestedItem(subItem.label) }
                                className={ `flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                                  subActive
                                    ? 'bg-primary text-white shadow-sm'
                                    : 'text-admin-muted hover:text-primary'
                                }` }
                              >
                                <span className="flex min-w-0 items-center gap-3">
                                  <SubIcon className="size-4 shrink-0" />
                                  <span className="truncate">{ subItem.label }</span>
                                </span>

                                <ChevronRight className={ `size-4 shrink-0 transition ${subExpanded ? 'rotate-90' : ''}` } />
                              </button>
                            ) : (
                              <Link
                                href={ subItem.href }
                                onClick={ onClose }
                                className={ `flex items-center justify-between gap-6 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                                  subActive
                                    ? 'bg-primary/5 text-primary shadow-sm'
                                    : 'text-admin-muted hover:text-primary'
                                }` }
                              >
                                <span className="flex min-w-0 items-center gap-3">
                                  <SubIcon className="size-4 shrink-0" />
                                  <span className="truncate">{ subItem.label }</span>
                                </span>
                              </Link>
                            ) }

                            { subItem.children && subExpanded ? (
                              <ul className="mt-1 space-y-1 pl-6">
                                { subItem.children.map((childItem) => {
                                  const ChildIcon = childItem.icon
                                  const childActive = isMostSpecificActive(childItem, subItem.children ?? [], pathname)

                                  return (
                                    <li key={ childItem.label }>
                                      <Link
                                        href={ childItem.href }
                                        onClick={ onClose }
                                        className={ `flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition ${
                                          childActive
                                            ? 'bg-primary/5 text-white shadow-sm'
                                            : 'text-admin-muted hover:text-primary'
                                        }` }
                                      >
                                        <ChildIcon className="size-4 shrink-0" />
                                        <span className="truncate">{ childItem.label }</span>
                                      </Link>
                                    </li>
                                  )
                                }) }
                              </ul>
                            ) : null }
                          </li>
                        )
                      }) }
                    </ul>
                  ) : null }
                </li>
              )
            }) }
          </ul>
        </nav>

        <div className="border-t border-admin-border p-4">
          <button
            type="button"
            onClick={ handleLogout }
            title={ isCollapsed ? 'Logout' : undefined }
            className={ `flex w-full items-center gap-3 rounded-2xl border border-admin-border px-4 py-3 text-sm font-semibold text-admin-muted transition hover:border-primary/40 hover:text-primary ${
              isCollapsed ? 'justify-center px-0' : ''
            }` }
          >
            <LogOut className="size-5 shrink-0" />
            <span className={ isCollapsed ? 'hidden' : 'inline' }>Logout</span>
          </button>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
