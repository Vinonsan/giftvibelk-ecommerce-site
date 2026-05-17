'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Box,
  ChevronRight,
  ClipboardList,
  Contact,
  Folder,
  Grid2X2,
  HeartHandshake,
  Home,
  LayoutDashboard,
  PackageSearch,
  Settings,
  Sparkles,
  Tags,
  Ticket,
  Users,
  Webhook,
  type LucideIcon,
} from 'lucide-react'

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

const Sidebar = () => {
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <aside className="fixed  bottom-0 left-0  bg-background px-6 py-5 text-secondary">
      <div className="flex items-center gap-3 px-2">
        <div className="rounded-xl bg-white/10 p-3 text-white">
          <HeartHandshake className="size-6" />
        </div>

        <div>
          <h2 className="text-xl font-bold leading-none">GiftVibe</h2>
          <p className="pt-1 text-xs text-white/50">Admin Panel</p>
        </div>
      </div>

      <nav>
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)

            return (
              <li key={item.label} className="group/main relative">
                <Link
                  href={item.href}
                  className={`flex items-center justify-between gap-4 rounded-xl px-3 py-3 text-sm font-semibold transition ${
                    active
                      ? 'bg-secondary text-white'
                      : 'text-secondary hover:bg-secondary '
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon className="size-5" />
                    {item.label}
                  </span>

                  {item.children && <ChevronRight className="size-4" />}
                </Link>

                {item.children && (
                  <div className="invisible absolute top-0 left-full z-50 pl-3 opacity-0 transition group-hover/main:visible group-hover/main:opacity-100">
                    <div className="rounded-xl bg-primary p-2 shadow-2xl">
                      <ul className="space-y-1">
                        {item.children.map((subItem) => {
                          const SubIcon = subItem.icon
                          const subActive = isActive(subItem.href)

                          return (
                            <li key={subItem.label} className="group/sub relative">
                              <Link
                                href={subItem.href}
                                className={`flex items-center justify-between gap-6 rounded-lg px-3 py-3 text-sm font-semibold whitespace-nowrap transition ${
                                  subActive
                                    ? 'bg-white text-primary'
                                    : 'text-white/75 hover:bg-white hover:text-primary'
                                }`}
                              >
                                <span className="flex items-center gap-3">
                                  <SubIcon className="size-4" />
                                  {subItem.label}
                                </span>

                                {subItem.children && <ChevronRight className="size-4" />}
                              </Link>

                              {subItem.children && (
                                <div className="invisible absolute top-0 left-full z-50 pl-3 opacity-0 transition group-hover/sub:visible group-hover/sub:opacity-100">
                                  <div className="rounded-xl bg-primary p-2 shadow-2xl">
                                    <ul className="space-y-1">
                                      {subItem.children.map((childItem) => {
                                        const ChildIcon = childItem.icon
                                        const childActive = isActive(childItem.href)

                                        return (
                                          <li key={childItem.label}>
                                            <Link
                                              href={childItem.href}
                                              className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-semibold whitespace-nowrap transition ${
                                                childActive
                                                  ? 'bg-white text-primary'
                                                  : 'text-white/75 hover:bg-white hover:text-primary'
                                              }`}
                                            >
                                              <ChildIcon className="size-4" />
                                              {childItem.label}
                                            </Link>
                                          </li>
                                        )
                                      })}
                                    </ul>
                                  </div>
                                </div>
                              )}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar