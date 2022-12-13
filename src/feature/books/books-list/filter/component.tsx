import { GeneralFilter } from "@/components/filters";
import { FilterActions } from "@/components/filters/filter-actions";
import { YearsFilter } from "@/components/filters/years-filter";
import { Toolbar } from "primereact/toolbar";
import { useMemo } from "react";

export const BooksFilter = () => {
  const leftContents = useMemo(
    () => (
      <>
        <GeneralFilter />
        <GeneralFilter />
        <GeneralFilter />
        <YearsFilter />
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
