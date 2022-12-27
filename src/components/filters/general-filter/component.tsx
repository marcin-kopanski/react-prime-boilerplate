import { FC, useEffect, useState } from "react";

import { MultiSelect } from "primereact/multiselect";
import { ProgressSpinner } from "primereact/progressspinner";

import { GeneralFilterElement } from "./interfaces";

export type SpecificFilterProps = {
  filterInitialized: (selectedElements: string[]) => void;
};

type GeneralFilterProps = {
  isLoading: boolean;
  placeholder: string;
  data: GeneralFilterElement[];
  filterInitialized: (selectedElements: string[]) => void;
};

export const GeneralFilter: FC<GeneralFilterProps> = ({
  isLoading,
  placeholder,
  data,
  filterInitialized,
}) => {
  const [selectedElements, setSelectedElements] = useState<string[]>();

  useEffect(() => {
    if (!isLoading && !selectedElements) {
      const elementsToSelect = data.map((element) => element.value);
      setSelectedElements(elementsToSelect);
      filterInitialized(elementsToSelect);
    }
  }, [isLoading, selectedElements]);

  return (
    <>
      {isLoading && (
        <ProgressSpinner
          style={{ width: "50px", height: "50px" }}
          strokeWidth="8"
          fill="var(--surface-ground)"
          animationDuration=".5s"
        />
      )}
      {!isLoading && (
        <MultiSelect
          value={selectedElements}
          options={data}
          onChange={(e) => setSelectedElements(e.value)}
          placeholder={placeholder}
          maxSelectedLabels={0}
          selectedItemsLabel={`Selected {0} of ${data?.length}`}
        />
      )}
    </>
  );
};
