import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import { MainOutlet } from "@/components/main-outlet";
import { BookDetails } from "@/features/books/book-details";
import { BooksList } from "@/features/books/books-list";
import { Demo } from "@/features/demo";
import { AuthorDetails } from "@/features/dicts/author-details";
import { AuthorsList } from "@/features/dicts/authors-list";
import { CountriesList } from "@/features/dicts/countries-list";
import { CountryDetails } from "@/features/dicts/country-details";
import { Dictionaries } from "@/features/dicts/dicts-outlet";
import { GenreDetails } from "@/features/dicts/genre-details";
import { GenresList } from "@/features/dicts/genres-list";
import { YearDetails } from "@/features/dicts/year-details";
import { YearsList } from "@/features/dicts/years-list";
import { LoaderAuthors } from "@/models/author";
import { LoaderBooks } from "@/models/book/loader-client";
import { LoaderCountries } from "@/models/country";
import { LoaderGenres } from "@/models/genre";
import { LoaderYears } from "@/models/year/loader-client";
import { queryClient } from "@/services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainOutlet />,
    children: [
      {
        index: true,
        element: <Navigate to={"books"} />,
      },
      {
        path: "books",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <BooksList />,
            loader: LoaderBooks.loaderAllBooks(queryClient),
          },
          {
            path: ":id",
            element: <BookDetails />,
            loader: LoaderBooks.loaderBookById(queryClient),
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
            element: <Outlet />,
            children: [
              {
                index: true,
                element: <AuthorsList />,
                loader: LoaderAuthors.loaderAllAuthors(queryClient),
              },
              {
                path: ":id",
                element: <AuthorDetails />,
                loader: LoaderAuthors.loaderAuthorById(queryClient),
              },
            ],
          },
          {
            path: "countries",
            element: <Outlet />,
            children: [
              {
                index: true,
                element: <CountriesList />,
                loader: LoaderCountries.loaderAllCountries(queryClient),
              },
              {
                path: ":id",
                element: <CountryDetails />,
                loader: LoaderCountries.loaderCountryById(queryClient),
              },
            ],
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
      {
        path: "demo",
        element: <Demo />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
