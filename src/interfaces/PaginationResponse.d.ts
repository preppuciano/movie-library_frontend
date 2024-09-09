export interface PaginationInterface {
  page: number;
  limit: number;
  totalPages: number;
  totalMovies: number;
}

export interface PaginationResponseInterface<T> {
  data: T[];
  pagination: PaginationInterface;
}