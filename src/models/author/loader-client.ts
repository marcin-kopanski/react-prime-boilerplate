import { QueryClient } from "@tanstack/react-query";
import { LoaderFunction } from "react-router-dom";
import { Author } from "./model";
import { QueryAuthors } from "./query-client";

const loaderAllAuthors =
  (queryClient: QueryClient) => async (): Promise<Author[]> => {
    const query = QueryAuthors.queryAllAuthors();
    return (
      queryClient.getQueryData(query.queryKey as any[]) ??
      (await queryClient.fetchQuery(query))
    );
  };

const loaderAuthorById =
  (queryClient: QueryClient): LoaderFunction =>
  async ({ params: { id } }): Promise<Author> => {
    if (!!id) {
      const query = QueryAuthors.queryAuthorById(+id);
      return (
        queryClient.getQueryData(query.queryKey as any[]) ??
        (await queryClient.fetchQuery(query))
      );
    }
    return Promise.reject();
  };

export const LoaderAuthors = {
  loaderAllAuthors,
  loaderAuthorById,
};
