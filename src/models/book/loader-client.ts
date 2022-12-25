import { LoaderFunction } from "react-router-dom";

import { QueryClient } from "@tanstack/react-query";

import { Book } from "./model";
import { QueryBooks } from "./query-client";

const loaderAllBooks =
  (queryClient: QueryClient) => async (): Promise<Book[]> => {
    const query = QueryBooks.queryAllBooks();
    return (
      queryClient.getQueryData(query.queryKey as any[]) ??
      (await queryClient.fetchQuery(query))
    );
  };

const loaderBookById =
  (queryClient: QueryClient): LoaderFunction =>
  async ({ params: { id } }): Promise<Book> => {
    if (!!id) {
      const query = QueryBooks.queryBookById(+id);
      return (
        queryClient.getQueryData(query.queryKey as any[]) ??
        (await queryClient.fetchQuery(query))
      );
    }
    return Promise.reject();
  };

export const LoaderBooks = {
  loaderAllBooks,
  loaderBookById,
};
