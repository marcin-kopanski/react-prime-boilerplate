import { Button } from "primereact/button";

export const FilterActions = () => {
  return (
    <>
      <Button label="Apply" className="p-button-success p-button-sm ml-2" />
      <Button label="Select all" className="p-button-sm ml-2" />
      <Button label="Unselect all" className="p-button-sm ml-2" />
    </>
  );
};
