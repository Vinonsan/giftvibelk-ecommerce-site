'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ChevronsUpDown } from 'lucide-react'
import {
  type ColumnDef,
  type SortingState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import Button from './Button'
import Select from './Select'

interface DataTableProps<TData> {
  data: TData[]
  columns: ColumnDef<TData>[]
  totalCount: number
  pageSize: number
  pageNumber: number
  onPageSizeChange: (_pageSize: number) => void
  onPageNumberChange: (_pageNumber: number) => void
  sorting?: SortingState
  onSortChange?: (_sorting: SortingState) => void
  onRowClick?: (_row: TData) => void
  onRowDoubleClick?: (_row: TData) => void
  isLoading?: boolean
  loadingComponent?: ReactNode
  isError?: boolean
  errorComponent?: ReactNode
  errorMessage?: string
  isEmpty?: boolean
  emptyComponent?: ReactNode
  emptyMessage?: string
  emptyDescription?: string
  pageSizeOptions?: number[]
  defaultPageSize?: number
  paginationType?: 'button' | 'link'
  baseUrl?: string
  isPagination?: boolean
}

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

const getColumnWidth = <TData,>(columns: ColumnDef<TData>[], columnId: string) => {
  const column = columns.find((col) => {
    if (col.id === columnId) return true
    const accessorColumn = col as ColumnDef<TData, unknown> & { accessorKey?: string }
    return accessorColumn.accessorKey === columnId
  })
  const meta = column?.meta as { width?: number } | undefined

  if (!meta?.width || meta.width < 0 || meta.width > 100) {
    return undefined
  }

  return `${meta.width}%`
}

const DataTable = <TData,>({
  data,
  columns,
  totalCount,
  pageSize,
  pageNumber,
  onPageSizeChange,
  onPageNumberChange,
  sorting = [],
  onSortChange,
  onRowClick,
  onRowDoubleClick,
  isLoading = false,
  loadingComponent,
  isError = false,
  errorComponent,
  errorMessage = 'Something went wrong while loading data.',
  isEmpty,
  emptyComponent,
  emptyMessage = 'No data available',
  emptyDescription,
  pageSizeOptions = [10, 25, 50, 100],
  defaultPageSize = 10,
  paginationType = 'button',
  baseUrl,
  isPagination = true,
}: DataTableProps<TData>) => {
  'use no memo'

  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize))
  const firstItem = totalCount === 0 ? 0 : (pageNumber - 1) * pageSize + 1
  const lastItem = Math.min(pageNumber * pageSize, totalCount)

  const handleSortingChange = (updater: SortingState | ((_old: SortingState) => SortingState)) => {
    if (!onSortChange) return

    onSortChange(typeof updater === 'function' ? updater(sorting) : updater)
    onPageNumberChange(1)
  }

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: handleSortingChange,
    getCoreRowModel: getCoreRowModel(),
    manualSorting: true,
    manualPagination: true,
  })

  const buildPaginationUrl = (targetPage: number) => {
    if (!baseUrl) return '#'

    const params = new URLSearchParams()
    if (targetPage > 1) params.set('page', String(targetPage))
    if (pageSize !== defaultPageSize) params.set('pageSize', String(pageSize))
    if (sorting.length) params.set('sort', JSON.stringify(sorting))

    const query = params.toString()
    return query ? `${baseUrl}?${query}` : baseUrl
  }

  const pageNumbers = (() => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, index) => index + 1)
    }

    if (pageNumber <= 4) {
      return [1, 2, 3, 4, 5, 'ellipsis' as const, totalPages]
    }

    if (pageNumber >= totalPages - 3) {
      return [1, 'ellipsis' as const, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
    }

    return [1, 'ellipsis' as const, pageNumber - 1, pageNumber, pageNumber + 1, 'ellipsis' as const, totalPages]
  })()

  const renderPageButton = (targetPage: number) => {
    const isActive = pageNumber === targetPage
    const className = cn(
      'inline-flex size-10 items-center justify-center rounded-full border text-sm font-semibold transition',
      isActive
        ? 'border-primary bg-primary text-white shadow-lg shadow-primary/20'
        : 'border-admin-border text-admin-text hover:border-primary/35 hover:text-primary',
    )

    if (paginationType === 'link' && baseUrl) {
      return (
        <Link
          key={targetPage}
          href={buildPaginationUrl(targetPage)}
          onClick={(event) => {
            event.preventDefault()
            onPageNumberChange(targetPage)
          }}
          className={className}
        >
          {targetPage}
        </Link>
      )
    }

    return (
      <button key={targetPage} type="button" onClick={() => onPageNumberChange(targetPage)} className={className}>
        {targetPage}
      </button>
    )
  }

  const renderSkeletonRows = () => (
    <>
      {Array.from({ length: Math.min(Math.max(pageSize, 3), 10) }).map((_, rowIndex) => (
        <tr key={`loading-${rowIndex}`} className="border-b border-admin-border/70">
          {columns.map((column, columnIndex) => (
            <td
              key={`loading-${rowIndex}-${columnIndex}`}
              className="border-r border-admin-border/70 px-5 py-4 last:border-r-0"
              style={{ width: getColumnWidth(columns, column.id ?? String(columnIndex)) }}
            >
              <div className="h-4 w-3/4 animate-pulse rounded-full bg-primary/10" />
            </td>
          ))}
        </tr>
      ))}
    </>
  )

  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-xl border border-admin-border">
        <div className="overflow-x-auto">
          <table className="w-full min-w-full table-fixed border-collapse">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const canSort = header.column.getCanSort() && Boolean(onSortChange)
                  const width = getColumnWidth(columns, header.column.id)

                  return (
                      <th
                        key={header.id}
                        className="border-b border-r border-admin-border px-5 py-4 text-left text-base font-bold uppercase tracking-[0.14em] text-admin-text last:border-r-0"
                        style={{ width }}
                      >
                      <button
                        type="button"
                        disabled={!canSort}
                        onClick={canSort ? header.column.getToggleSortingHandler() : undefined}
                        className={cn(
                          'inline-flex items-center gap-2 text-left',
                          canSort && 'cursor-pointer hover:text-primary/80',
                        )}
                      >
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                        {canSort ? <ChevronsUpDown className="size-3.5" /> : null}
                      </button>
                      </th>
                  )
                })}
              </tr>
            ))}
          </thead>

          <tbody>
            {isError ? (
              <tr>
                <td colSpan={columns.length} className="px-5 py-12 text-center">
                  {errorComponent ?? <p className="text-sm font-semibold text-error">{errorMessage}</p>}
                </td>
              </tr>
            ) : isLoading ? (
              loadingComponent ?? renderSkeletonRows()
            ) : (isEmpty ?? table.getRowModel().rows.length === 0) ? (
              <tr>
                <td colSpan={columns.length} className="px-5 py-12 text-center">
                  {emptyComponent ?? (
                    <div className="mx-auto max-w-sm">
                      <p className="text-sm font-semibold text-admin-text">{emptyMessage}</p>
                      {emptyDescription ? <p className="mt-2 text-sm text-admin-muted">{emptyDescription}</p> : null}
                    </div>
                  )}
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  onClick={() => onRowClick?.(row.original)}
                  onDoubleClick={() => onRowDoubleClick?.(row.original)}
                  className={cn(
                    'border-b border-admin-border/70 transition last:border-b-0 hover:bg-primary/5 cursor-pointer',
                    (onRowClick || onRowDoubleClick) && 'cursor-pointer',
                  )}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="border-r border-admin-border/70 px-5 py-4 text-sm font-medium text-admin-text last:border-r-0"
                      style={{ width: getColumnWidth(columns, cell.column.id) }}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
          </table>
        </div>
      </div>

      {isPagination ? (
        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm font-medium text-admin-muted">
            Showing {firstItem} to {lastItem} of {totalCount} entries
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="flex items-center gap-2 text-sm font-medium text-admin-muted">
              Rows
              <Select
                options={pageSizeOptions.map((option) => ({ label: String(option), value: String(option) }))}
                value={String(pageSize)}
                onChange={(event) => {
                  onPageSizeChange(Number(event.target.value))
                  onPageNumberChange(1)
                }}
                inputSize="sm"
                className="w-24"
              />
            </label>

            <div className="flex flex-wrap items-center gap-2">
              <Button
                type="button"
                size="sm"
                variant="outline"
                disabled={pageNumber <= 1}
                onClick={() => onPageNumberChange(Math.max(1, pageNumber - 1))}
                className="px-3"
              >
                <ChevronLeft className="size-4" />
              </Button>

              {pageNumbers.map((page, index) =>
                page === 'ellipsis' ? (
                  <span key={`ellipsis-${index}`} className="px-1 text-sm font-semibold text-admin-muted">
                    ...
                  </span>
                ) : (
                  renderPageButton(page)
                ),
              )}

              <Button
                type="button"
                size="sm"
                variant="outline"
                disabled={pageNumber >= totalPages}
                onClick={() => onPageNumberChange(Math.min(totalPages, pageNumber + 1))}
                className="px-3"
              >
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default DataTable
export type { ColumnDef, SortingState } from '@tanstack/react-table'
