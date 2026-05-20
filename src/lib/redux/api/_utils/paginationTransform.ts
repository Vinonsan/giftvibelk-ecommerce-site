import type {
  PaginatedResponseInput,
  PaginatedTransformResult,
} from './types/pagination-transform'

export const transformPaginatedData = <TInput, TOutput>(
  response: PaginatedResponseInput<TInput>,
  dataTransform: (_item: TInput) => TOutput
): PaginatedTransformResult<TOutput> => {
  const isLegacyPagination = 'items' in response
  const sourceItems = isLegacyPagination ? response.items : response.data
  const totalCount = isLegacyPagination
    ? response.totalCount
    : response.pagination?.totalItems ?? response.pagination?.total ?? 0
  const pageNumber = isLegacyPagination
    ? response.pageNumber ?? 1
    : response.pagination?.page ?? 1
  const pageSize = isLegacyPagination
    ? response.pageSize ?? 10
    : response.pagination?.limit ?? 10
  const totalPages = isLegacyPagination ? 0 : response.pagination?.totalPages ?? 0
  const transformedItems = sourceItems.map(dataTransform)

  return {
    totalCount,
    currentPageCount: sourceItems.length,
    pageNumber,
    pageSize,
    data: transformedItems,
    items: transformedItems,
    pagination: {
      page: pageNumber,
      limit: pageSize,
      total: totalCount,
      totalItems: totalCount,
      totalPages,
    },
  }
}
