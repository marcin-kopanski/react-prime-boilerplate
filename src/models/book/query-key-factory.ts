import { FilterConfig } from "@/features/books/books-list";

export const BooksKeys = {
  all: ["books"] as const,
  list: () => [...BooksKeys.all, "list"] as const,
  listFiltered: (booksFilter: FilterConfig) =>
    [...BooksKeys.list(), { booksFilter }] as const,
  details: () => [...BooksKeys.all, "details"] as const,
  detailsById: (id: number) => [...BooksKeys.details(), id] as const,
};
