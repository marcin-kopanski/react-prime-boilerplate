import { LoaderCountries, QueryCountries, Country } from "@/models/country";
import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";

type CountriesLoaderDataResult = {
  data: Country[];
  isLoading: boolean;
};

export const useCountriesLoaderData = (): CountriesLoaderDataResult => {
  const initialData = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof LoaderCountries.loaderAllCountries>>
  >;
  const { data, isLoading } = useQuery({
    ...QueryCountries.queryAllCountries(),
    initialData,
  });

  return { data, isLoading };
};
