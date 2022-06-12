export interface PaginatedResponse<T> {
  data: T;
  pagination: Pagination;
}

export interface Pagination {
  itemsNumber: number;
  offset: number;
  total: number;
}
