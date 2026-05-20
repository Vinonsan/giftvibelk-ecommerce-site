'use client'

import { CalendarDays, CheckCircle2, Clock3, Factory, FileBadge, PackageCheck, Search, Truck, XCircle } from 'lucide-react'
import { useMemo, useState } from 'react'

import Button from '@/components/ui/Button'
import DataTable, { type ColumnDef } from '@/components/ui/DataTable'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import { orders, orderStatusFilters } from '../constants'
import type { Order, OrderStatus, OrderStatusFilter } from '../types'

const statusCardConfig: Array<{
  label: string
  status: OrderStatus
  icon: typeof Clock3
  className: string
}> = [
  {
    label: 'Pending Orders',
    status: 'Pending',
    icon: Clock3,
    className: 'text-amber-700',
  },
  {
    label: 'Rejected Orders',
    status: 'Rejected',
    icon: XCircle,
    className: 'text-red-700',
  },
  {
    label: 'Completed Orders',
    status: 'Completed',
    icon: CheckCircle2,
    className: 'text-emerald-700',
  },
  {
    label: 'Shipping Orders',
    status: 'Shipping',
    icon: Truck,
    className: 'text-sky-700',
  },
]

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(value))
}

function StatusBadge({ status }: { status: OrderStatus }) {
  const className =
    status === 'Pending'
      ? 'border-amber-200 text-amber-700'
      : status === 'Accepted'
        ? 'border-indigo-200 text-indigo-700'
        : status === 'Rejected'
          ? 'border-red-200 text-red-700'
          : status === 'Shipping'
            ? 'border-sky-200 text-sky-700'
            : 'border-emerald-200 text-emerald-700'

  return <span className={`rounded-full border px-3 py-1 text-xs font-bold ${className}`}>{status}</span>
}

export default function PageChildren() {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<OrderStatusFilter>('All')
  const [dateFilter, setDateFilter] = useState('')

  const baseFilteredOrders = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    return orders.filter((order) => {
      const matchesSearch =
        !normalizedSearch ||
        order.orderNumber.toLowerCase().includes(normalizedSearch) ||
        order.customerName.toLowerCase().includes(normalizedSearch) ||
        order.customerPhone.toLowerCase().includes(normalizedSearch) ||
        order.city.toLowerCase().includes(normalizedSearch)
      const matchesDate = !dateFilter || order.orderDate === dateFilter

      return matchesSearch && matchesDate
    })
  }, [dateFilter, search])

  const statusCounts = useMemo(() => {
    return baseFilteredOrders.reduce<Record<OrderStatus, number>>(
      (acc, order) => {
        acc[order.status] += 1
        return acc
      },
      {
        Pending: 0,
        Accepted: 0,
        Rejected: 0,
        Shipping: 0,
        Completed: 0,
      },
    )
  }, [baseFilteredOrders])

  const filteredOrders = useMemo(() => {
    return baseFilteredOrders.filter((order) => {
      const matchesStatus = statusFilter === 'All' || order.status === statusFilter

      return matchesStatus
    })
  }, [baseFilteredOrders, statusFilter])

  const columns: ColumnDef<Order>[] = [
    {
      accessorKey: 'orderItem',
      header: 'Order Item',
      cell: ({ row }) => (
        <div>
          <p className="font-bold text-admin-text">{row.original.orderNumber}</p>
          <p className="text-xs text-admin-muted">{row.original.itemsCount} items</p>
        </div>
      ),
      meta: { width: 16 },
    },
    {
      accessorKey: 'customerName',
      header: 'Customer',
      cell: ({ row }) => (
        <div>
          <p className="font-semibold text-admin-text">{row.original.customerName}</p>
          <p className="text-xs text-admin-muted">{row.original.customerPhone}</p>
        </div>
      ),
      meta: { width: 22 },
    },
    {
      accessorKey: 'orderDate',
      header: 'Order Date',
      cell: ({ row }) => <span className="text-admin-muted">{formatDate(row.original.orderDate)}</span>,
      meta: { width: 16 },
    },
    {
      accessorKey: 'deliveryDate',
      header: 'Delivery',
      cell: ({ row }) => (
        <div>
          <p className="font-medium text-admin-text">{formatDate(row.original.deliveryDate)}</p>
          <p className="text-xs text-admin-muted">{row.original.city}</p>
        </div>
      ),
      meta: { width: 18 },
    },
    {
      accessorKey: 'Amount',
      header: 'Amount',
      cell: ({ row }) => <span className="font-bold text-admin-text">{row.original.total}</span>,
      meta: { width: 12 },
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => <StatusBadge status={row.original.status} />,
      meta: { width: 16 },
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-5 bg-black/5 rounded-xl px-4 py-4 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-admin-text">Orders</h1>
          <p className="max-w-xl text-base text-admin-muted">
            Track customer orders by status, delivery date, and customer details.
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-sm font-bold text-black/80'>12 Orders</p>
        </div>

        
      </div>

      <div className="py-6">
        <div className="grid gap-4 lg:grid-cols-[1fr_220px_220px_auto] lg:items-end">
          <Input
            label="Search"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value)
              setPage(1)
            }}
            placeholder="Search order, customer, phone, city"
            leadingIcon={<Search className="size-4" />}
          />
          <Select
            label="Status"
            value={statusFilter}
            onChange={(event) => {
              setStatusFilter(event.target.value as OrderStatusFilter)
              setPage(1)
            }}
            options={orderStatusFilters}
          />
          <Input
            label="Order date"
            type="date"
            value={dateFilter}
            onChange={(event) => {
              setDateFilter(event.target.value)
              setPage(1)
            }}
            leadingIcon={<CalendarDays className="size-4" />}
          />
          <Button
            type="button"
            variant="gray"
            onClick={() => {
              setSearch('')
              setStatusFilter('All')
              setDateFilter('')
              setPage(1)
            }}
          >
            <FileBadge className="size-4" />
          </Button>
        </div>
      </div>

      <DataTable
        data={filteredOrders}
        columns={columns}
        totalCount={filteredOrders.length}
        pageSize={pageSize}
        pageNumber={page}
        onPageSizeChange={setPageSize}
        onPageNumberChange={setPage}
        emptyMessage="No orders found"
        emptyDescription="Try changing the status, date, or search filter."
      />

    </div>
  )
}
