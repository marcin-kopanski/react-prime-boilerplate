import { AuthorsFilter, CountriesFilter, GenresFilter } from "@/components/filters";
import { FilterActions } from "@/components/filters/filter-actions";
import { YearsFilter } from "@/components/filters/years-filter";
import { Toolbar } from "primereact/toolbar";
import { useMemo } from "react";

export const BooksFilter = () => {
  const leftContents = useMemo(
    () => (
      <>
        <CountriesFilter filterInitialized={() => console.log("Countries filter initialized")} />
        <AuthorsFilter filterInitialized={() => console.log("Authors filter initialized")} />
        <GenresFilter filterInitialized={() => console.log("Genres filter initialized")} />
        <YearsFilter filterInitialized={() => console.log("Years filter initialized")} />
      </>
    ),
    [],
  );

  const rightContents = useMemo(
    () => (
      <>
        <FilterActions />
      </>
    ),
    [],
  );

  return <Toolbar left={leftContents} right={rightContents} className="mb-2" />;
};
