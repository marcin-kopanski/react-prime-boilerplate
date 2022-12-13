import { Genre } from "@/models/genre";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

type GenresTableProps = {
  isLoading: boolean;
  data: Genre[];
};

export const GenresTable: FC<GenresTableProps> = (props) => {
  const navigate = useNavigate();

  const actionBodyTemplate = (data: Genre) => {
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
    <DataTable
      value={props.data}
      className="with-details-button"
      tableClassName="border-1 surface-border border-round"
    >
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
