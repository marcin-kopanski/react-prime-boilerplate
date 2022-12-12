import { Country } from "@/models/country";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

type CountriesTableProps = {
  isLoading: boolean;
  data: Country[];
};

export const CountriesTable: FC<CountriesTableProps> = (props) => {
  const navigate = useNavigate();

  const actionBodyTemplate = (data: Country) => {
    return (
      <Button
        type="button"
        icon="pi pi-search"
        className="p-button-sm p-button-rounded p-button-text p-button-secondary"
        onClick={() => navigate(`${data.id}`)}
      ></Button>
    );
  };

  return (
    <DataTable value={props.data}>
      <Column
        body={actionBodyTemplate}
        headerStyle={{ width: "5rem", textAlign: "center" }}
        bodyStyle={{ textAlign: "center" }}
      />
      <Column field="id" header="Id" headerStyle={{ width: "5rem" }} />
      <Column field="name" header="Name" />
    </DataTable>
  );
};
