import { useLoaderData, useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import { LoaderYears, QueryYears, Year } from "@/models/year";

type YearsLoaderDetailsHook = {
  details: Year | undefined;
  isLoading: boolean;
  isFetched: boolean;
};

export const useYearsLoaderDetails = (): YearsLoaderDetailsHook => {
  const { id } = useParams() as { id: string };
  const initialData = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof LoaderYears.loaderYearById>>
  >;
  const {
    data: details,
    isLoading,
    isFetched,
  } = useQuery({ ...QueryYears.queryYearById(+id), initialData });

  return { details, isLoading, isFetched };
};
