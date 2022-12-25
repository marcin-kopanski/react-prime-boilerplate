import { UseQueryOptions } from "@tanstack/react-query";

import { UsersClient } from "./client";
import { User } from "./model";
import { UsersKeys } from "./query-key-factory";

const queryAllUsers = (): UseQueryOptions<User[]> => ({
  queryKey: UsersKeys.list(),
  queryFn: async () => UsersClient.findAllUsers(),
});

const queryUserById = (id: number): UseQueryOptions<User> => ({
  queryKey: UsersKeys.detailsById(id),
  queryFn: async () => UsersClient.findUserById(id),
});

export const QueryUsers = {
  queryAllUsers,
  queryUserById,
};
