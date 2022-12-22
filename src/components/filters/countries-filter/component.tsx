import { QueryCountries } from "@/models/country";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import {
  GeneralFilter,
  GeneralFilterElement,
  SpecificFilterProps,
} from "../general-filter";

interface CountriesFilterProps extends SpecificFilterProps {}

export const CountriesFilter: FC<CountriesFilterProps> = (props) => {
  const { data, isLoading, isFetched } = useQuery({
    ...QueryCountries.queryAllCountries(),
  });

  return (
    <GeneralFilter
      filterName="countries filter"
      isLoading={isLoading && !isFetched}
      placeholder="Select Countries"
      data={
        data?.map((element) => ({
          label: `${element.name}`,
          value: `${element.id}`,
        })) as GeneralFilterElement[]
      }
      filterInitialized={() => props.filterInitialized()}
    />
  );
};
