import { LoaderCountries, QueryCountries, Country } from "@/models/country";
import { useQuery } from "@tanstack/react-query";
import { useLoaderData, useParams } from "react-router-dom";

type CountriesLoaderDetailsHook = {
  details: Country | undefined;
  isLoading: boolean;
  isFetched: boolean;
};

export const useCountriesLoaderDetails = (): CountriesLoaderDetailsHook => {
  const { id } = useParams() as { id: string };
  const initialData = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof LoaderCountries.loaderCountryById>>
  >;
  const {
    data: details,
    isLoading,
    isFetched,
  } = useQuery({ ...QueryCountries.queryCountryById(+id), initialData });

  return { details, isLoading, isFetched };
};
