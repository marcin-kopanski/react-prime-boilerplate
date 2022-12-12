import { BookDetails } from "@/feature/books/book-details";
import { BooksList } from "@/feature/books/books-list";
import { allBooksLoader, bookByIdLoader } from "@/models/book/query-client";
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import { queryClient } from "@/services";
import { LoaderYears } from "@/models/year/loader-client";
import { LoaderGenres } from "@/models/genre";
import { Dictionaries } from "@/feature/dicts/dicts-outlet";
import { AuthorsList } from "@/feature/dicts/authors-list";
import { CountriesList } from "@/feature/dicts/countries-list";
import { GenresList } from "@/feature/dicts/genres-list";
import { GenreDetails } from "@/feature/dicts/genre-details";
import { YearsList } from "@/feature/dicts/years-list";
import { YearDetails } from "@/feature/dicts/year-details";

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
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <GenresList />,
            loader: LoaderGenres.loaderAllGenres(queryClient),
          },
          {
            path: ":id",
            element: <GenreDetails />,
            loader: LoaderGenres.loaderGenreById(queryClient),
          },
        ],
      },
      {
        path: "years",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <YearsList />,
            loader: LoaderYears.loaderAllYears(queryClient),
          },
          {
            path: ":id",
            element: <YearDetails />,
            loader: LoaderYears.loaderYearById(queryClient),
          },
        ],
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
