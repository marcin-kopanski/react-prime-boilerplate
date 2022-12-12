export const AuthorsKeys = {
  all: ["authors"] as const,
  list: () => [...AuthorsKeys.all, "list"] as const,
  details: () => [...AuthorsKeys.all, "details"] as const,
  detailsById: (id: number) => [...AuthorsKeys.details(), id] as const,
};
