import { Button } from "primereact/button";

export const FilterActions = () => {
  return (
    <>
      <Button label="Apply" className="p-button-success ml-2" />
      <Button label="Select all" className="ml-2" />
      <Button label="Unselect all" className="ml-2" />
    </>
  );
};
