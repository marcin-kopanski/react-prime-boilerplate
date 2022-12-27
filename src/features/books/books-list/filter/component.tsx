import { useCallback, useMemo } from "react";

import { Toolbar } from "primereact/toolbar";

import {
  AuthorsFilter,
  CountriesFilter,
  GenresFilter,
} from "@/components/filters";
import { FilterActions } from "@/components/filters/filter-actions";
import { YearsFilter } from "@/components/filters/years-filter";

import { useBooksList } from "../context";

export const BooksFilter = () => {
  const { dispatch } = useBooksList();

  const onCountriesFilterInitializedHandler = useCallback(
    (selectedElements: string[]) => {
      console.log("Countries filter initialized");
      dispatch({
        type: "COUNTRIES_INITIALIZED",
        selectedElements,
      });
    },
    [],
  );

  const onAuthorsFilterInitializedHandler = useCallback(
    (selectedElements: string[]) => {
      console.log("Authors filter initialized");
      dispatch({
        type: "AUTHORS_INITIALIZED",
        selectedElements,
      });
    },
    [],
  );

  const onGenresFilterInitializedHandler = useCallback(
    (selectedElements: string[]) => {
      console.log("Genres filter initialized");
      dispatch({
        type: "GENRES_INITIALIZED",
        selectedElements,
      });
    },
    [],
  );

  const onYearsFilterInitializedHandler = useCallback(
    (selectedElements: string[]) => {
      console.log("Years filter initialized");
      dispatch({
        type: "YEARS_INITIALIZED",
        selectedElements,
      });
    },
    [],
  );

  const applyHandler = useCallback(() => {
    dispatch({ type: "SET_CURRENT_FILTER" });
  }, []);

  const selectAllHandler = (): void => {};
  const unselectAllHandler = (): void => {};

  const leftContents = useMemo(
    () => (
      <div className="flex flex-row gap-2">
        <CountriesFilter
          filterInitialized={onCountriesFilterInitializedHandler}
        />
        <AuthorsFilter filterInitialized={onAuthorsFilterInitializedHandler} />
        <GenresFilter filterInitialized={onGenresFilterInitializedHandler} />
        <YearsFilter filterInitialized={onYearsFilterInitializedHandler} />
      </div>
    ),
    [],
  );

  const rightContents = useMemo(
    () => (
      <>
        <FilterActions
          onApply={applyHandler}
          onSelectAll={selectAllHandler}
          onUnselectAll={unselectAllHandler}
        />
      </>
    ),
    [],
  );

  return <Toolbar left={leftContents} right={rightContents} />;
};
