export const BooksKeys = {
  all: ["books"] as const,
  list: () => [...BooksKeys.all, "list"] as const,
  listFiltered: (filters: any) => [...BooksKeys.list(), { filters }] as const,
  details: () => [...BooksKeys.all, "details"] as const,
  detailsById: (id: number) => [...BooksKeys.details(), id] as const,
};
