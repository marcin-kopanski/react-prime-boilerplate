import { queryAllYears, Year } from "@/models/year";
import { loaderAllYears } from "@/models/year/loader-client";
import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";

type YearsLoaderDataResult = {
  data: Year[];
  isLoading: boolean;
};

export const useYearsLoaderData = (): YearsLoaderDataResult => {
  const initialData = useLoaderData() as Awaited<ReturnType<ReturnType<typeof loaderAllYears>>>;
  const { data, isLoading } = useQuery({ ...queryAllYears(), initialData });

  return { data, isLoading };
};
