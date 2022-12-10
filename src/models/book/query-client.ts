import { QueryClient } from "@tanstack/react-query";
import { LoaderFunction, LoaderFunctionArgs, Params } from "react-router-dom";
import { BooksClient } from "./client";
import { Book } from "./model";
import { BooksKeys } from "./query-key-factory";

export const allBooksQuery = () => ({
  queryKey: BooksKeys.all,
  queryFn: async () => BooksClient.getAllBooks(),
  staleTime: 0,
});

export const allBooksLoader = (queryClient: QueryClient) => async (): Promise<Book[]> => {
  const query = allBooksQuery();
  return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
};

export const bookByIdQuery = (id: number) => ({
  queryKey: BooksKeys.detailsById(id),
  queryFn: async () => BooksClient.getSingleBook(id),
});

export const bookByIdLoader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs): Promise<Book> => {
    if (params.id) {
      const query = bookByIdQuery(+params.id);
      return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
    }
    return Promise.reject();
  };
