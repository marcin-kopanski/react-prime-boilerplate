import { useLoaderData, useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import { LoaderGenres, QueryGenres, Genre } from "@/models/genre";

type GenresLoaderDetailsHook = {
  details: Genre | undefined;
  isLoading: boolean;
  isFetched: boolean;
};

export const useGenresLoaderDetails = (): GenresLoaderDetailsHook => {
  const { id } = useParams() as { id: string };
  const initialData = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof LoaderGenres.loaderGenreById>>
  >;
  const {
    data: details,
    isLoading,
    isFetched,
  } = useQuery({ ...QueryGenres.queryGenreById(+id), initialData });

  return { details, isLoading, isFetched };
};
