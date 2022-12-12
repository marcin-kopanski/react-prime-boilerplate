import { Year } from "@/models/year";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { FC } from "react";

type YearsTableProps = {
  isLoading: boolean;
  data: Year[];
};

export const YearsTable: FC<YearsTableProps> = (props) => {
  return (
    <DataTable value={props.data}>
      <Column field="id" header="Id" />
      <Column field="year" header="Year" />
    </DataTable>
  );
};
