import { UseQueryOptions } from "@tanstack/react-query";

import { AuthorsClient } from "./client";
import { Author } from "./model";
import { AuthorsKeys } from "./query-key-factory";

const queryAllAuthors = (): UseQueryOptions<Author[]> => ({
  queryKey: AuthorsKeys.list(),
  queryFn: async () => AuthorsClient.findAllAuthors(),
});

const queryAuthorById = (id: number): UseQueryOptions<Author> => ({
  queryKey: AuthorsKeys.detailsById(id),
  queryFn: async () => AuthorsClient.findAuthorById(id),
});

export const QueryAuthors = {
  queryAllAuthors,
  queryAuthorById,
};
