import { UseQueryOptions } from "@tanstack/react-query";
import { YearsClient } from "./client";
import { Year } from "./model";
import { YearsKeys } from "./query-key-factory";

export const queryAllYears = (): UseQueryOptions<Year[]> => ({
  queryKey: YearsKeys.list(),
  queryFn: async () => YearsClient.findAllYears(),
});

export const queryYearById = (id: number): UseQueryOptions<Year> => ({
  queryKey: YearsKeys.detailsById(id),
  queryFn: async () => YearsClient.findYearById(id),
});
