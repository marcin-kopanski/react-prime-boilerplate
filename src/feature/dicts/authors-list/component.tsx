import { useAuthorsLoaderData } from "./loader-data-hook";
import { AuthorsTable } from "./table";

export const AuthorsList = () => {
  const { data, isLoading } = useAuthorsLoaderData();
  return <AuthorsTable data={data} isLoading={isLoading} />;
};
