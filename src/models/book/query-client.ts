import { UseQueryOptions } from "@tanstack/react-query";
import { BooksClient } from "./client";
import { Book } from "./model";
import { BooksKeys } from "./query-key-factory";

const queryAllBooks = (): UseQueryOptions<Book[]> => ({
  queryKey: BooksKeys.list(),
  queryFn: async () => BooksClient.findAllBooks(),
});

const queryBookById = (id: number): UseQueryOptions<Book> => ({
  queryKey: BooksKeys.detailsById(id),
  queryFn: async () => BooksClient.findBookById(id),
});

export const QueryBooks = {
  queryAllBooks,
  queryBookById,
};
