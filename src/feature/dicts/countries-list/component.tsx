import { useCountriesLoaderData } from "./loader-data-hook";
import { CountriesTable } from "./table";

export const CountriesList = () => {
  const { data, isLoading } = useCountriesLoaderData();
  return <CountriesTable data={data} isLoading={isLoading} />;
};
