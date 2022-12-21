import { MultiSelect } from "primereact/multiselect";
import { ProgressSpinner } from "primereact/progressspinner";
import { FC, useState } from "react";
import { GeneralFilterElement } from "./model";

export type SpecificFilterProps = {
  filterInitialized: () => void;
};

type GeneralFilterProps = {
  filterName: string;
  isLoading: boolean;
  placeholder: string;
  data: GeneralFilterElement[];
  filterInitialized: () => void;
};

export const GeneralFilter: FC<GeneralFilterProps> = ({
  filterName,
  isLoading,
  placeholder,
  data,
  filterInitialized,
}) => {
  const [selectedElements, setSelectedElements] = useState<string[]>();

  if (!isLoading && !selectedElements) {
    setSelectedElements(data.map((element) => element.value));
    filterInitialized();
  }

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
          className="mr-2"
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
