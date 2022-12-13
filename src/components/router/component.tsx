import { BookDetails } from "@/feature/books/book-details";
import { BooksList } from "@/feature/books/books-list";
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
import { LoaderBooks } from "@/models/book/loader-client";
import { LoaderAuthors } from "@/models/author";
import { AuthorDetails } from "@/feature/dicts/author-details";
import { LoaderCountries } from "@/models/country";
import { CountryDetails } from "@/feature/dicts/country-details";
import { MainOutlet } from "@/feature/main-outlet";

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
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
