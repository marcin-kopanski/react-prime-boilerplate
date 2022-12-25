import { useContext } from "react";

import { BooksFilterContext } from "./context";

export const useBooksFilter = () => {
  const context = useContext(BooksFilterContext);

  if (context === undefined) {
    throw new Error("useBooksFilter must be used within a BooksFilterContext");
  }

  return context;
};
