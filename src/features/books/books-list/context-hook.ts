import { useContext } from "react";
import { BooksListContext } from "./context";

export const useBooksList = () => {
  const context = useContext(BooksListContext);

  if (context === undefined) {
    throw new Error("useBooksList must be used within a BooksListContext");
  }

  return context;
};
