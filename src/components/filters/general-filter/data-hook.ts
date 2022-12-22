import { useQuery, UseQueryOptions } from "@tanstack/react-query";

type FilterDataResults<T> = {
  data: T | undefined;
  isLoading: boolean;
  isFetched: boolean;
};

export const useFilterData = <T>(
  query: UseQueryOptions<T>,
): FilterDataResults<T> => {
  const { data, isLoading, isFetched } = useQuery<T>({ ...query });

  return { data, isLoading, isFetched };
};
