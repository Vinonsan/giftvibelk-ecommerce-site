import type { Product } from '../types'

export const products: Product[] = [
  {
    id: 'prd-001',
    name: 'Premium Gift Hamper',
    category: 'Gift Hampers',
    price: 'LKR 8,500',
    imageUrl: '/images/birthday.png',
    stock: 18,
    status: 'Active',
    createdAt: '2026-05-12',
  },
  {
    id: 'prd-002',
    name: 'Rose and Chocolate Box',
    category: 'Flowers',
    price: 'LKR 6,200',
    imageUrl: '/images/imageone.png',
    stock: 9,
    status: 'Active',
    createdAt: '2026-05-10',
  },
  {
    id: 'prd-003',
    name: 'Birthday Surprise Set',
    category: 'Birthday Gifts',
    price: 'LKR 11,900',
    imageUrl: '/images/imagetwo.png',
    stock: 4,
    status: 'Draft',
    createdAt: '2026-05-06',
  },
]

export const productCategoryOptions = [
  { label: 'Gift Hampers', value: 'Gift Hampers' },
  { label: 'Flowers', value: 'Flowers' },
  { label: 'Birthday Gifts', value: 'Birthday Gifts' },
]

export const productStatusOptions = [
  { label: 'Active', value: 'Active' },
  { label: 'Draft', value: 'Draft' },
  { label: 'Archived', value: 'Archived' },
]
