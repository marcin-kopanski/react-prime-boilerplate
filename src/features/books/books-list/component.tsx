import { BooksListContextProvider } from "./context";
import { BooksFilter } from "./filter";
import { BooksTable } from "./table";

export const BooksList = () => {
  return (
    <BooksListContextProvider>
      <div className="flex flex-column gap-2">
        <BooksFilter />
        <BooksTable />
      </div>
    </BooksListContextProvider>
  );
};
