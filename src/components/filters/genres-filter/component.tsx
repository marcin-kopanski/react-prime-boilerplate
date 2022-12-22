import { QueryGenres } from "@/models/genre";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
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
      filterName="genres filter"
      isLoading={isLoading && !isFetched}
      placeholder="Select Genres"
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
