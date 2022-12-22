import { QueryClient } from "@tanstack/react-query";
import { LoaderFunction } from "react-router-dom";
import { Country } from "./model";
import { QueryCountries } from "./query-client";

const loaderAllCountries =
  (queryClient: QueryClient) => async (): Promise<Country[]> => {
    const query = QueryCountries.queryAllCountries();
    return (
      queryClient.getQueryData(query.queryKey as any[]) ??
      (await queryClient.fetchQuery(query))
    );
  };

const loaderCountryById =
  (queryClient: QueryClient): LoaderFunction =>
  async ({ params: { id } }): Promise<Country> => {
    if (!!id) {
      const query = QueryCountries.queryCountryById(+id);
      return (
        queryClient.getQueryData(query.queryKey as any[]) ??
        (await queryClient.fetchQuery(query))
      );
    }
    return Promise.reject();
  };

export const LoaderCountries = {
  loaderAllCountries,
  loaderCountryById,
};
