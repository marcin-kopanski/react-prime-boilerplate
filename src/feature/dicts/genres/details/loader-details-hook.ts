import { LoaderGenres, QueryGenres, Genre } from "@/models/genre";
import { useQuery } from "@tanstack/react-query";
import { useLoaderData, useParams } from "react-router-dom";

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
