import { useLoaderData } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import { LoaderGenres, QueryGenres, Genre } from "@/models/genre";

type GenresLoaderDataResult = {
  data: Genre[];
  isLoading: boolean;
};

export const useGenresLoaderData = (): GenresLoaderDataResult => {
  const initialData = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof LoaderGenres.loaderAllGenres>>
  >;
  const { data, isLoading } = useQuery({
    ...QueryGenres.queryAllGenres(),
    initialData,
  });

  return { data, isLoading };
};
