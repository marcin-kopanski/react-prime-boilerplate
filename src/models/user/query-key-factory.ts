export const UsersKeys = {
  all: ["users"] as const,
  list: () => [...UsersKeys.all, "list"] as const,
  listFiltered: (filters: any) => [...UsersKeys.list(), { filters }] as const,
  details: () => [...UsersKeys.all, "details"] as const,
  detailsById: (id: number) => [...UsersKeys.details(), id] as const,
};
