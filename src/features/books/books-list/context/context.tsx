import { createContext, FC, PropsWithChildren, useReducer } from "react";

import { Book } from "@/models";

import { useBooksLoaderData } from "../loader-data-hook";
import { booksListReducer } from "./reducer";
import { Dispatch, State } from "./types";

export const BooksListContext = createContext<
  | {
      state: State;
      booksData: { books: Book[]; isLoading: boolean };
      dispatch: Dispatch;
    }
  | undefined
>(undefined);

export const BooksListContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [reducerState, dispatch] = useReducer(booksListReducer, {
    filters: {
      countries: { isInitialized: false },
      authors: { isInitialized: false },
      genres: { isInitialized: false },
      years: { isInitialized: false },
    },
    filtersReady: false,
    currentFilter: undefined,
  });
  const { data: books, isLoading } = useBooksLoaderData(
    reducerState.currentFilter,
  );

  const value = {
    state: reducerState,
    booksData: { books, isLoading },
    dispatch,
  };

  return (
    <BooksListContext.Provider value={value}>
      {children}
    </BooksListContext.Provider>
  );
};
