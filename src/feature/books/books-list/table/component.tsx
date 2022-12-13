import { Book } from "@/models";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

type BooksTableProps = {
  isLoading: boolean;
  data: Book[];
};

export const BooksTable: FC<BooksTableProps> = (props) => {
  const navigate = useNavigate();

  const actionBodyTemplate = (data: Book) => {
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
    <DataTable value={props.data} className="with-details-button">
      <Column
        body={actionBodyTemplate}
        headerStyle={{ width: "5rem", textAlign: "center" }}
        bodyStyle={{ textAlign: "center" }}
      />
      <Column field="id" header="Id" headerStyle={{ width: "5rem" }} />
      <Column field="title" header="Title" />
      <Column field="author.firstName" header="Author - first name" />
      <Column field="author.lastName" header="Author - last name" />
      <Column field="releaseDate" header="Release date" />
      <Column field="genre.name" header="Genre" />
    </DataTable>
  );
};
