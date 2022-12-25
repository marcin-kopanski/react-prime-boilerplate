import { UseQueryOptions } from "@tanstack/react-query";

import { CountriesClient } from "./client";
import { Country } from "./model";
import { CountriesKeys } from "./query-key-factory";

const queryAllCountries = (): UseQueryOptions<Country[]> => ({
  queryKey: CountriesKeys.list(),
  queryFn: async () => CountriesClient.findAllCountries(),
});

const queryCountryById = (id: number): UseQueryOptions<Country> => ({
  queryKey: CountriesKeys.detailsById(id),
  queryFn: async () => CountriesClient.findCountryById(id),
});

export const QueryCountries = {
  queryAllCountries,
  queryCountryById,
};
