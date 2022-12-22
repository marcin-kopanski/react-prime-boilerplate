import { LoaderAuthors, QueryAuthors, Author } from "@/models/author";
import { useQuery } from "@tanstack/react-query";
import { useLoaderData, useParams } from "react-router-dom";

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
