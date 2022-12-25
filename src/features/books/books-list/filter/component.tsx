import { useMemo, useState } from "react";

import { Toolbar } from "primereact/toolbar";

import {
  AuthorsFilter,
  CountriesFilter,
  GenresFilter,
} from "@/components/filters";
import { FilterActions } from "@/components/filters/filter-actions";
import { YearsFilter } from "@/components/filters/years-filter";

import { useBooksFilter } from "./context-hook";

export const BooksFilter = () => {
  const { state, dispatch } = useBooksFilter();

  const [filtersReady, setFiltersReady] = useState(false);
  const [countriesFilterInitialized, setCountriesFilterInitialized] =
    useState(false);
  const [authorsFilterInitialized, setAuthorsFilterInitialized] =
    useState(false);
  const [genresFilterInitialized, setGenresFilterInitialized] = useState(false);
  const [yearsFilterInitialized, setYearsFilterInitialized] = useState(false);

  if (
    countriesFilterInitialized &&
    authorsFilterInitialized &&
    genresFilterInitialized &&
    yearsFilterInitialized &&
    !filtersReady
  ) {
    console.log("setFiltersReady(true)");
    setFiltersReady(true);
  }

  const onCountriesFilterInitializedHandler = () => {
    console.log("Countries filter initialized");
    setCountriesFilterInitialized(true);
  };

  const onAuthorsFilterInitializedHandler = () => {
    console.log("Authors filter initialized");
    setAuthorsFilterInitialized(true);
  };

  const onGenresFilterInitializedHandler = () => {
    console.log("Genres filter initialized");
    setGenresFilterInitialized(true);
  };

  const onYearsFilterInitializedHandler = () => {
    console.log("Years filter initialized");
    setYearsFilterInitialized(true);
  };

  const applyHandler = (): void => {};
  const selectAllHandler = (): void => {};
  const unselectAllHandler = (): void => {};

  const leftContents = (
    <div className="flex flex-row gap-2">
      <CountriesFilter
        filterInitialized={onCountriesFilterInitializedHandler}
      />
      <AuthorsFilter filterInitialized={onAuthorsFilterInitializedHandler} />
      <GenresFilter filterInitialized={onGenresFilterInitializedHandler} />
      <YearsFilter filterInitialized={onYearsFilterInitializedHandler} />
    </div>
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

  return <Toolbar left={leftContents} right={rightContents} className="mb-2" />;
};
