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
      dispatch({
        type: "COUNTRIES_INITIALIZED",
        selectedElements,
      });
    },
    [],
  );

  const onCountriesFilterSelectedElementsChangeHandler = useCallback(
    (selectedElements: string[]) => {
      console.log("Countries filter changed", selectedElements);
      dispatch({
        type: "COUNTRIES_CHANGED",
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

  const onAuthorsFilterSelectedElementsChangeHandler = useCallback(
    (selectedElements: string[]) => {
      dispatch({
        type: "AUTHORS_CHANGED",
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

  const onGenresFilterSelectedElementsChangeHandler = useCallback(
    (selectedElements: string[]) => {
      dispatch({
        type: "GENRES_CHANGED",
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

  const onYearsFilterSelectedElementsChangeHandler = useCallback(
    (selectedElements: string[]) => {
      console.log("Years filter changed", selectedElements);
      dispatch({
        type: "YEARS_CHANGED",
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
          selectedElementsChange={
            onCountriesFilterSelectedElementsChangeHandler
          }
        />
        <AuthorsFilter
          filterInitialized={onAuthorsFilterInitializedHandler}
          selectedElementsChange={onAuthorsFilterSelectedElementsChangeHandler}
        />
        <GenresFilter
          filterInitialized={onGenresFilterInitializedHandler}
          selectedElementsChange={onGenresFilterSelectedElementsChangeHandler}
        />
        <YearsFilter
          filterInitialized={onYearsFilterInitializedHandler}
          selectedElementsChange={onYearsFilterSelectedElementsChangeHandler}
        />
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
