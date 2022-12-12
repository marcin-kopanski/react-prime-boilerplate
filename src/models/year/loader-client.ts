import { QueryClient } from "@tanstack/react-query";
import { LoaderFunction } from "react-router-dom";
import { Year } from "./model";
import { QueryYears } from "./query-client";

const loaderAllYears = (queryClient: QueryClient) => async (): Promise<Year[]> => {
  const query = QueryYears.queryAllYears();
  return queryClient.getQueryData(query.queryKey as any[]) ?? (await queryClient.fetchQuery(query));
};

const loaderYearById =
  (queryClient: QueryClient): LoaderFunction =>
  async ({ params: { id } }): Promise<Year> => {
    if (!!id) {
      const query = QueryYears.queryYearById(+id);
      return (
        queryClient.getQueryData(query.queryKey as any[]) ?? (await queryClient.fetchQuery(query))
      );
    }
    return Promise.reject();
  };

export const LoaderYears = {
  loaderAllYears,
  loaderYearById,
};
