import { Button } from "primereact/button";
import { FC } from "react";

type FilterActionsProps = {
  onSelectAll: () => void;
};

export const FilterActions: FC<FilterActionsProps> = ({ onSelectAll }) => {
  return (
    <>
      <Button label="Apply" className="p-button-success ml-2" />
      <Button label="Select all" className="ml-2" onClick={onSelectAll} />
      <Button label="Unselect all" className="ml-2" />
    </>
  );
};
