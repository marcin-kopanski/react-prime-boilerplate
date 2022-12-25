import { LoaderFunction } from "react-router-dom";

import { QueryClient } from "@tanstack/react-query";

import { Genre } from "./model";
import { QueryGenres } from "./query-client";

const loaderAllGenres =
  (queryClient: QueryClient) => async (): Promise<Genre[]> => {
    const query = QueryGenres.queryAllGenres();
    return (
      queryClient.getQueryData(query.queryKey as any[]) ??
      (await queryClient.fetchQuery(query))
    );
  };

const loaderGenreById =
  (queryClient: QueryClient): LoaderFunction =>
  async ({ params: { id } }): Promise<Genre> => {
    if (!!id) {
      const query = QueryGenres.queryGenreById(+id);
      return (
        queryClient.getQueryData(query.queryKey as any[]) ??
        (await queryClient.fetchQuery(query))
      );
    }
    return Promise.reject();
  };

export const LoaderGenres = {
  loaderAllGenres,
  loaderGenreById,
};
