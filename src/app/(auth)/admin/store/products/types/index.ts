export type ProductStatus = 'Active' | 'Draft' | 'Archived'

export type Product = {
  id: string
  name: string
  category: string
  price: string
  imageUrl: string
  stock: number
  status: ProductStatus
  createdAt: string
}
