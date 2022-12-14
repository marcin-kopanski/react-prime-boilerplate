import { FC } from "react";

import { useQuery } from "@tanstack/react-query";

import { QueryAuthors } from "@/models/author";

import {
  GeneralFilter,
  GeneralFilterElement,
  SpecificFilterProps,
} from "../general-filter";

interface AuthorsFilterProps extends SpecificFilterProps {}

export const AuthorsFilter: FC<AuthorsFilterProps> = (props) => {
  const { data, isLoading, isFetched } = useQuery({
    ...QueryAuthors.queryAllAuthors(),
  });

  return (
    <GeneralFilter
      isLoading={isLoading && !isFetched}
      placeholder="Select Authors"
      data={
        data?.map((element) => ({
          label: `${element.firstName} ${element.lastName}`,
          value: `${element.id}`,
        })) as GeneralFilterElement[]
      }
      filterInitialized={props.filterInitialized}
      selectedElementsChange={props.selectedElementsChange}
    />
  );
};
