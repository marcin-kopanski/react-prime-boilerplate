import {
  createContext,
  FC,
  PropsWithChildren,
  Reducer,
  useReducer,
} from "react";

type FilterState = {
  isInitialized: boolean;
  isAllSelected: boolean | undefined;
  isAllUnselected: boolean | undefined;
};

type Action = { type: "type" };
type Dispatch = (action: Action) => void;
type State = {
  filters: {
    countries?: FilterState;
    authors?: FilterState;
    genres?: FilterState;
    years?: FilterState;
  };
};

const booksFilterReducer: Reducer<State, Action> = (
  state: State,
  action: Action,
): State => {
  switch (action.type) {
    case "type":
      return state;
  }
};

export const BooksFilterContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

export const BooksFilterProvider: FC<PropsWithChildren> = ({ children }) => {
  const [reducerState, dispatch] = useReducer(booksFilterReducer, {
    filters: {
      countries: {
        isInitialized: false,
        isAllSelected: undefined,
        isAllUnselected: undefined,
      },
    },
  });

  const value = { state: reducerState, dispatch };

  return (
    <BooksFilterContext.Provider value={value}>
      {children}
    </BooksFilterContext.Provider>
  );
};
