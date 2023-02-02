import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

import { useAuthorOverlay } from "@/components/overlays";
import { Book } from "@/models";

import { useBooksList } from "../context";

export const BooksTable: FC<{}> = () => {
  const navigate = useNavigate();
  const {
    booksData: { books, isLoading },
  } = useBooksList();
  const authorOverlay = useAuthorOverlay();

  const actionBodyTemplate = (data: Book) => {
    return (
      <Button
        type="button"
        icon="pi pi-search"
        className="p-button-sm p-button-rounded p-button-text p-button-secondary"
        onClick={() => navigate(`${data.id}`)}
      />
    );
  };

  const authorBodyTemplate = ({
    author: { id, firstName, lastName },
  }: Book) => {
    return (
      <div
        onMouseEnter={(e) => authorOverlay.events.onMouseEnter(e, id ? id : -1)}
        onMouseLeave={() => authorOverlay.events.onMouseLeave()}
      >
        {firstName} {lastName}
      </div>
    );
  };

  return (
    <>
      <DataTable
        value={books}
        loading={isLoading}
        className="with-details-button"
        tableClassName="border-1 surface-border"
        paginator
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
        rows={10}
        paginatorClassName=" border-top-none border-1 surface-border"
      >
        <Column
          body={actionBodyTemplate}
          headerStyle={{ width: "5rem", textAlign: "center" }}
          bodyStyle={{ textAlign: "center" }}
        />
        <Column field="id" header="Id" headerStyle={{ width: "5rem" }} />
        <Column field="title" header="Title" />
        <Column header="Author" body={authorBodyTemplate} />
        <Column field="releaseDate" header="Release date" />
        <Column field="genre.name" header="Genre" />
      </DataTable>

      {authorOverlay.dataOverlay}
    </>
  );
};
