import { Genre } from "@/models/genre";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { FC } from "react";

type GenresTableProps = {
  isLoading: boolean;
  data: Genre[];
};

export const GenresTable: FC<GenresTableProps> = (props) => {
  return (
    <DataTable value={props.data}>
      <Column field="id" header="Id" />
      <Column field="name" header="Name" />
    </DataTable>
  );
};
