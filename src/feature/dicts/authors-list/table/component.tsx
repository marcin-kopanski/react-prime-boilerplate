import { Author } from "@/models/author";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

type AuthorsTableProps = {
  isLoading: boolean;
  data: Author[];
};

export const AuthorsTable: FC<AuthorsTableProps> = (props) => {
  const navigate = useNavigate();

  const actionBodyTemplate = (data: Author) => {
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
      <Column field="id" header="Id" />
      <Column field="firstName" header="First Name" />
      <Column field="lastName" header="Last Name" />
      <Column field="dateOfBirth" header="Date of Birth" />
      <Column field="dateOfDeath" header="Date of Death" />
      <Column field="country.name" header="Country" />
    </DataTable>
  );
};
