import { UseQueryOptions } from "@tanstack/react-query";
import { GenresClient } from "./client";
import { Genre } from "./model";
import { GenresKeys } from "./query-key-factory";

const queryAllGenres = (): UseQueryOptions<Genre[]> => ({
  queryKey: GenresKeys.list(),
  queryFn: async () => GenresClient.findAllGenres(),
});

const queryGenreById = (id: number): UseQueryOptions<Genre> => ({
  queryKey: GenresKeys.detailsById(id),
  queryFn: async () => GenresClient.findGenreById(id),
});

export const QueryGenres = {
  queryAllGenres,
  queryGenreById,
};
