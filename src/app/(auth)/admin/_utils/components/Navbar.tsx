'use client'

import Image from 'next/image'
import Link from 'next/link'

import ProfileMenu from './navbar/ProfileMenu'

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-admin-border bg-admin-shell px-8 py-4 shadow-sm">
      <Link href="/admin/products" className="flex items-center gap-4">
        <Image
          src="/logo/test.png"
          alt="Giftvibelk"
          width={ 56 }
          height={ 56 }
          className="w-14 rounded-2xl border border-white/10 object-cover shadow-sm"
        />
        <div>
          <p className="text-base font-semibold tracking-wide text-white">Giftvibelk Administration</p>
          <p className="pt-1 text-sm text-white/70">Product management panel</p>
        </div>
      </Link>

      <div className="ml-auto flex items-center">
        <ProfileMenu />
      </div>
    </header>
  )
}

export default Navbar
