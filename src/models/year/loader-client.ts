import { QueryClient } from "@tanstack/react-query";
import { LoaderFunction, LoaderFunctionArgs } from "react-router-dom";
import { Year } from "./model";
import { queryAllYears, queryYearById } from "./query-client";

export const loaderAllYears = (queryClient: QueryClient) => async (): Promise<Year[]> => {
  const query = queryAllYears();
  return queryClient.getQueryData(query.queryKey as any[]) ?? (await queryClient.fetchQuery(query));
};

export const loaderYearById =
  (queryClient: QueryClient): LoaderFunction =>
  async ({ params: { id } }): Promise<Year> => {
    if (!!id) {
      const query = queryYearById(+id);
      return (
        queryClient.getQueryData(query.queryKey as any[]) ?? (await queryClient.fetchQuery(query))
      );
    }
    return Promise.reject();
  };
