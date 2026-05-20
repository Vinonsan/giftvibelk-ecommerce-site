export type ComboStatus = 'Active' | 'Draft' | 'Archived'

export type Combo = {
  id: string
  name: string
  price: string
  imageUrl: string
  itemCount: number
  status: ComboStatus
  createdAt: string
}
