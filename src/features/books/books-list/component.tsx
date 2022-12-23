import { BooksListContextProvider } from "./context";
import { BooksFilter } from "./filter";
import { BooksTable } from "./table";

export const BooksList = () => {
  return (
    <BooksListContextProvider>
      <BooksFilter />
      <BooksTable />
    </BooksListContextProvider>
  );
};
