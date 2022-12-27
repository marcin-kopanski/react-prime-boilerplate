import { UseQueryOptions } from "@tanstack/react-query";

import { FilterConfig } from "@/features/books/books-list";

import { BooksClient } from "./client";
import { Book } from "./model";
import { BooksKeys } from "./query-key-factory";

const queryAllBooks = (): UseQueryOptions<Book[]> => ({
  queryKey: BooksKeys.list(),
  queryFn: async () => BooksClient.findAllBooks(),
});

const queryBooksByFilter = (
  booksFilter: FilterConfig | undefined,
): UseQueryOptions<Book[]> => ({
  queryKey: BooksKeys.listFiltered(booksFilter as FilterConfig),
  queryFn: async () => BooksClient.findAllBooks(),
  enabled: booksFilter !== undefined,
});

const queryBookById = (id: number): UseQueryOptions<Book> => ({
  queryKey: BooksKeys.detailsById(id),
  queryFn: async () => BooksClient.findBookById(id),
});

export const QueryBooks = {
  queryAllBooks,
  queryBooksByFilter,
  queryBookById,
};
