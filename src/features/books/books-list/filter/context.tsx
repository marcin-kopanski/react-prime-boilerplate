import { Filter } from "@/models/filter/model";
import {
  createContext,
  FC,
  PropsWithChildren,
  Reducer,
  useReducer,
} from "react";

export const FilterContext = createContext(null);
export const FilterDispatchProvider = createContext(null);

export const FiltersProvider: FC<PropsWithChildren> = ({ children }) => {
  const [tasks, dispatch] = useReducer(filterReducer, {});

  return (
    <FilterContext.Provider value={null}>
      <FilterDispatchProvider.Provider value={null}>
        {children}
      </FilterDispatchProvider.Provider>
    </FilterContext.Provider>
  );
};

enum FilterReducerTypes {
  CREATE = "CREATE",
}

const filterReducer: Reducer<Filter, FilterReducerTypes> = (state, action) => {
  switch (action) {
    case FilterReducerTypes.CREATE:
      return state;

    default:
      return state;
  }
};
