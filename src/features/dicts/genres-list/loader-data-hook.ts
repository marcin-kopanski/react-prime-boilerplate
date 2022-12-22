import { LoaderGenres, QueryGenres, Genre } from "@/models/genre";
import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";

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
