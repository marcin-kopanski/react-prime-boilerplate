import { Book } from "@/models";
import { createContext, FC, PropsWithChildren } from "react";
import { useBooksLoaderData } from "./loader-data-hook";

type State = {
  books: Book[];
  isLoading: boolean;
};

export const BooksListContext = createContext<{ state: State } | undefined>(
  undefined,
);

export const BooksListContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const { data, isLoading } = useBooksLoaderData();
  const value = { state: { books: data, isLoading } };

  return (
    <BooksListContext.Provider value={value}>
      {children}
    </BooksListContext.Provider>
  );
};
