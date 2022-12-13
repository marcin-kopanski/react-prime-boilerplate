import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useState } from "react";

type FilterDataResults<T> = {
  data: T | undefined;
  isLoading: boolean;
  isFetched: boolean;
};

export const useFilterData = <T>(query: UseQueryOptions<T>): FilterDataResults<T> => {
  const { data, isLoading, isFetched } = useQuery<T>({ ...query });
  const [selectedCities1, setSelectedCities1] = useState<T>();

  return { data, isLoading, isFetched };
};
