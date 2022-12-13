import { BooksFilter } from "./filter";
import { useBooksLoaderData } from "./loader-data-hook";
import { BooksTable } from "./table";

export const BooksList = () => {
  const { data, isLoading } = useBooksLoaderData();
  return (
    <>
      <BooksFilter />
      <BooksTable data={data} isLoading={isLoading} />
    </>
  );
};
