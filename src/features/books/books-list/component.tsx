import { BooksListContextProvider } from "./context";
import { BooksFilter, BooksFilterProvider } from "./filter";
import { BooksTable } from "./table";

export const BooksList = () => {
  return (
    <BooksListContextProvider>
      <BooksFilterProvider>
        <BooksFilter />
      </BooksFilterProvider>
      <BooksTable />
    </BooksListContextProvider>
  );
};
