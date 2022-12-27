import { FC } from "react";

import { useQuery } from "@tanstack/react-query";

import { QueryYears } from "@/models/year";

import {
  GeneralFilter,
  GeneralFilterElement,
  SpecificFilterProps,
} from "../general-filter";

interface YearsFilterProps extends SpecificFilterProps {}

export const YearsFilter: FC<YearsFilterProps> = (props) => {
  const { data, isLoading, isFetched } = useQuery({
    ...QueryYears.queryAllYears(),
  });

  return (
    <GeneralFilter
      isLoading={isLoading && !isFetched}
      placeholder="Select Years"
      data={
        data?.map((element) => ({
          label: `${element.year}`,
          value: `${element.id}`,
        })) as GeneralFilterElement[]
      }
      filterInitialized={props.filterInitialized}
    />
  );
};
