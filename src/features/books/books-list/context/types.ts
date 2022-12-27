export type BookFilterSymbol = "COUNTRIES" | "AUTHORS" | "GENRES" | "YEARS";

export type Action =
  | {
      type:
        | "COUNTRIES_INITIALIZED"
        | "AUTHORS_INITIALIZED"
        | "GENRES_INITIALIZED"
        | "YEARS_INITIALIZED";
      selectedElements: string[];
    }
  | {
      type: "SET_CURRENT_FILTER";
    };

export type Dispatch = (action: Action) => void;
export type State = {
  filters: {
    countries?: FilterState;
    authors?: FilterState;
    genres?: FilterState;
    years?: FilterState;
  };
  filtersReady: boolean;
  currentFilter: FilterConfig | undefined;
};

export type FilterConfig = {
  countries: string[];
  authors: string[];
  genres: string[];
  years: string[];
};

export type FilterState = {
  isInitialized: boolean;
  // isAllSelected?: boolean;
  // isAllUnselected?: boolean;
  selectedElements?: string[];
};
