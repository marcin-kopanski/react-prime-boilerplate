import { FC } from "react";

import { useQuery } from "@tanstack/react-query";

import { QueryGenres } from "@/models/genre";

import {
  GeneralFilter,
  GeneralFilterElement,
  SpecificFilterProps,
} from "../general-filter";

interface GenresFilterProps extends SpecificFilterProps {}

export const GenresFilter: FC<GenresFilterProps> = (props) => {
  const { data, isLoading, isFetched } = useQuery({
    ...QueryGenres.queryAllGenres(),
  });

  return (
    <GeneralFilter
      isLoading={isLoading && !isFetched}
      placeholder="Select Genres"
      data={
        data?.map((element) => ({
          label: `${element.name}`,
          value: `${element.id}`,
        })) as GeneralFilterElement[]
      }
      filterInitialized={props.filterInitialized}
      selectedElementsChange={props.selectedElementsChange}
    />
  );
};
