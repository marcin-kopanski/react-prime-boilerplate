export const CountriesKeys = {
  all: ["countries"] as const,
  list: () => [...CountriesKeys.all, "list"] as const,
  details: () => [...CountriesKeys.all, "details"] as const,
  detailsById: (id: number) => [...CountriesKeys.details(), id] as const,
};
