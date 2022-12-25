import { useLoaderData } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import { LoaderBooks, QueryBooks, Book } from "@/models/book";

type BooksLoaderDataResult = {
  data: Book[];
  isLoading: boolean;
};

export const useBooksLoaderData = (): BooksLoaderDataResult => {
  const initialData = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof LoaderBooks.loaderAllBooks>>
  >;
  const { data, isLoading } = useQuery({
    ...QueryBooks.queryAllBooks(),
    initialData,
  });

  return { data, isLoading };
};
