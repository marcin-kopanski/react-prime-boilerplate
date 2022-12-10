import { BookDetails } from "@/feature/books/book-details";
import { BooksList } from "@/feature/books/books-list";
import { allBooksLoader, bookByIdLoader } from "@/models/book/query-client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { queryClient } from "@/services";

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
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
