export const YearsKeys = {
  all: ["years"] as const,
  list: () => [...YearsKeys.all, "list"] as const,
  details: () => [...YearsKeys.all, "details"] as const,
  detailsById: (id: number) => [...YearsKeys.details(), id] as const,
};
