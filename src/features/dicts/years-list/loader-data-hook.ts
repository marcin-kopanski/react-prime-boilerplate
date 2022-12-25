import { useLoaderData } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import { LoaderYears, QueryYears, Year } from "@/models/year";

type YearsLoaderDataResult = {
  data: Year[];
  isLoading: boolean;
};

export const useYearsLoaderData = (): YearsLoaderDataResult => {
  const initialData = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof LoaderYears.loaderAllYears>>
  >;
  const { data, isLoading } = useQuery({
    ...QueryYears.queryAllYears(),
    initialData,
  });

  return { data, isLoading };
};
