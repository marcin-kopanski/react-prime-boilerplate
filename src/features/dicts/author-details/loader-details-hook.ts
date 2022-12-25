import { useLoaderData, useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import { LoaderAuthors, QueryAuthors, Author } from "@/models/author";

type AuthorsLoaderDetailsHook = {
  details: Author | undefined;
  isLoading: boolean;
  isFetched: boolean;
};

export const useAuthorsLoaderDetails = (): AuthorsLoaderDetailsHook => {
  const { id } = useParams() as { id: string };
  const initialData = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof LoaderAuthors.loaderAuthorById>>
  >;
  const {
    data: details,
    isLoading,
    isFetched,
  } = useQuery({ ...QueryAuthors.queryAuthorById(+id), initialData });

  return { details, isLoading, isFetched };
};
