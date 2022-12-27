import { useQuery } from "@tanstack/react-query";

import { Book, QueryBooks } from "@/models/book";

import { FilterConfig } from "./context";

type BooksLoaderDataResult = {
  data: Book[];
  isLoading: boolean;
};

export const useBooksLoaderData = (
  filterConfig: FilterConfig | undefined,
): BooksLoaderDataResult => {
  const { data, isLoading, isFetching } = useQuery({
    ...QueryBooks.queryBooksByFilter(filterConfig),
  });

  return { data: data ? data : [], isLoading: isFetching && isLoading };
};
