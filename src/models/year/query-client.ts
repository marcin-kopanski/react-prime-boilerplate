import { UseQueryOptions } from "@tanstack/react-query";
import { YearsClient } from "./client";
import { Year } from "./model";
import { YearsKeys } from "./query-key-factory";

const queryAllYears = (): UseQueryOptions<Year[]> => ({
  queryKey: YearsKeys.list(),
  queryFn: async () => YearsClient.findAllYears(),
});

const queryYearById = (id: number): UseQueryOptions<Year> => ({
  queryKey: YearsKeys.detailsById(id),
  queryFn: async () => YearsClient.findYearById(id),
});

export const QueryYears = {
  queryAllYears,
  queryYearById,
};
