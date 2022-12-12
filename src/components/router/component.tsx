import { BookDetails } from "@/feature/books/book-details";
import { BooksList } from "@/feature/books/books-list";
import { allBooksLoader, bookByIdLoader } from "@/models/book/query-client";
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import { queryClient } from "@/services";
import { Dictionaries } from "@/feature/dicts/component";
import { AuthorsList } from "@/feature/dicts/authors";
import { CountriesList } from "@/feature/dicts/countries";
import { GenresList } from "@/feature/dicts/genres";
import { YearsList } from "@/feature/dicts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <>Hello</>,
  },
  {
    path: "books",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <BooksList />,
        loader: allBooksLoader(queryClient),
      },
      {
        path: ":id",
        element: <BookDetails />,
        loader: bookByIdLoader(queryClient),
      },
    ],
  },
  {
    path: "dicts",
    element: <Dictionaries />,
    children: [
      {
        index: true,
        element: <Navigate to={"authors"} />,
      },
      {
        path: "authors",
        element: <AuthorsList />,
      },
      {
        path: "countries",
        element: <CountriesList />,
      },
      {
        path: "genres",
        element: <GenresList />,
      },
      {
        path: "years",
        element: <YearsList />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
