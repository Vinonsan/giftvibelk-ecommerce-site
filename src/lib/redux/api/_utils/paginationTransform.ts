import type {
  PaginatedResult,
  PaginationMeta,
} from '@/lib/redux/api/_utils/types/pagination-transform'

const DEFAULT_PAGINATION: PaginationMeta = {
  page: 1,
  limit: 10,
  total: 0,
  totalPages: 0,
}

export function createPaginationMeta(input?: Partial<PaginationMeta>): PaginationMeta {
  return {
    ...DEFAULT_PAGINATION,
    ...input,
  }
}

export function toPaginatedResult<T>(
  items: T[],
  pagination?: Partial<PaginationMeta>,
): PaginatedResult<T> {
  return {
    items,
    pagination: createPaginationMeta(pagination),
  }
}
