export type OrderStatus = 'Pending' | 'Accepted' | 'Rejected' | 'Shipping' | 'Completed'

export type Order = {
  id: string
  orderNumber: string
  customerName: string
  customerPhone: string
  total: string
  itemsCount: number
  status: OrderStatus
  orderDate: string
  deliveryDate: string
  city: string
}

export type OrderStatusFilter = 'All' | OrderStatus
