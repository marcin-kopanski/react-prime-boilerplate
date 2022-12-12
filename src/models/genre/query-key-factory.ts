export const GenresKeys = {
  all: ["Genres"] as const,
  list: () => [...GenresKeys.all, "list"] as const,
  details: () => [...GenresKeys.all, "details"] as const,
  detailsById: (id: number) => [...GenresKeys.details(), id] as const,
};
