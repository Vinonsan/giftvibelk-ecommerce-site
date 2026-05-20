import { PaginationResponse, PaginationTransform } from './types/pagination-transform'

export const transformPaginatedData = <TInput, TOutput>(
  response: PaginationResponse & { items: TInput[] },
  dataTransform: (_item: TInput) => TOutput
): PaginationTransform & { data: TOutput[] } => {
  return {
    totalCount: response.totalCount,
    currentPageCount: response.items.length,
    pageNumber: response.pageNumber ?? 1,
    pageSize: response.pageSize ?? 10,
    data: response.items.map(dataTransform)
  }
}
