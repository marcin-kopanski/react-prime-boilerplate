import { useGenresLoaderData } from "./loader-data-hook";
import { GenresTable } from "./table";

export const GenresList = () => {
  const { data, isLoading } = useGenresLoaderData();
  return <GenresTable data={data} isLoading={isLoading} />;
};
