import { QueryClient } from "@tanstack/react-query";
import { LoaderFunction } from "react-router-dom";
import { User } from "./model";
import { QueryUsers } from "./query-client";

const loaderAllUsers =
  (queryClient: QueryClient) => async (): Promise<User[]> => {
    const query = QueryUsers.queryAllUsers();
    return (
      queryClient.getQueryData(query.queryKey as any[]) ??
      (await queryClient.fetchQuery(query))
    );
  };

const loaderUserById =
  (queryClient: QueryClient): LoaderFunction =>
  async ({ params: { id } }): Promise<User> => {
    if (!!id) {
      const query = QueryUsers.queryUserById(+id);
      return (
        queryClient.getQueryData(query.queryKey as any[]) ??
        (await queryClient.fetchQuery(query))
      );
    }
    return Promise.reject();
  };

export const LoaderUsers = {
  loaderAllUsers,
  loaderUserById,
};
