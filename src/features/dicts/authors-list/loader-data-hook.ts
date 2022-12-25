import { useLoaderData } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import { LoaderAuthors, QueryAuthors, Author } from "@/models/author";

type AuthorsLoaderDataResult = {
  data: Author[];
  isLoading: boolean;
};

export const useAuthorsLoaderData = (): AuthorsLoaderDataResult => {
  const initialData = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof LoaderAuthors.loaderAllAuthors>>
  >;
  const { data, isLoading } = useQuery({
    ...QueryAuthors.queryAllAuthors(),
    initialData,
  });

  return { data, isLoading };
};
