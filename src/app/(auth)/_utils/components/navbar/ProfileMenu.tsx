'use client'

import Image from 'next/image'

const ProfileMenu = () => {
  return (
    <div className="flex items-center gap-3 rounded-full px-1 py-1">
      <Image
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="Giftvibelk Admin"
        width={ 44 }
        height={ 44 }
        unoptimized
        className="size-11 rounded-full border-2 border-primary object-cover"
      />
      <span className="hidden min-w-0 text-left sm:block">
        <span className="block truncate text-sm font-semibold text-foreground">Giftvibelk Admin</span>
        <span className="block truncate pt-0.5 text-xs text-foreground/80">Staff</span>
      </span>
    </div>
  )
}

export default ProfileMenu
