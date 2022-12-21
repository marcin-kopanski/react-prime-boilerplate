import { AuthorsFilter, CountriesFilter, GenresFilter } from "@/components/filters";
import { FilterActions } from "@/components/filters/filter-actions";
import { YearsFilter } from "@/components/filters/years-filter";
import { Toolbar } from "primereact/toolbar";
import { useMemo, useState } from "react";

export const BooksFilter = () => {
  const [filtersReady, setFiltersReady] = useState(false);
  const [countriesFilterInitialized, setCountriesFilterInitialized] = useState(false);
  const [authorsFilterInitialized, setAuthorsFilterInitialized] = useState(false);
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

  const handleSelectAll = (): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };

  const selectAllHandler = () => {
    handleSelectAll();
  };

  const leftContents = (
    <>
      <CountriesFilter filterInitialized={onCountriesFilterInitializedHandler} />
      <AuthorsFilter filterInitialized={onAuthorsFilterInitializedHandler} />
      <GenresFilter filterInitialized={onGenresFilterInitializedHandler} />
      <YearsFilter filterInitialized={onYearsFilterInitializedHandler} />
    </>
  );

  const rightContents = useMemo(
    () => (
      <>
        <FilterActions onSelectAll={selectAllHandler} />
      </>
    ),
    [],
  );

  return <Toolbar left={leftContents} right={rightContents} className="mb-2" />;
};
