import type { Combo } from '../types'

export const combos: Combo[] = [
  {
    id: 'cmb-001',
    name: 'Birthday Celebration Combo',
    price: 'LKR 15,500',
    imageUrl: '/images/imagethree.png',
    itemCount: 4,
    status: 'Active',
    createdAt: '2026-05-11',
  },
  {
    id: 'cmb-002',
    name: 'Romantic Evening Combo',
    price: 'LKR 13,900',
    imageUrl: '/images/imagefour.png',
    itemCount: 3,
    status: 'Active',
    createdAt: '2026-05-09',
  },
  {
    id: 'cmb-003',
    name: 'New Baby Welcome Combo',
    price: 'LKR 18,200',
    imageUrl: '/images/secondaryhero.png',
    itemCount: 5,
    status: 'Draft',
    createdAt: '2026-05-03',
  },
]

export const comboStatusOptions = [
  { label: 'Active', value: 'Active' },
  { label: 'Draft', value: 'Draft' },
  { label: 'Archived', value: 'Archived' },
]
