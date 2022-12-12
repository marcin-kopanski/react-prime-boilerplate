import { LoaderBooks } from "@/models/book/loader-client";
import { QueryBooks } from "@/models/book/query-client";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

type BooksListProps = {};

export const BooksList: FC<BooksListProps> = (props) => {
  const navigate = useNavigate();
  const initialData = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof LoaderBooks.loaderAllBooks>>
  >;

  const { data: books, isLoading } = useQuery({ ...QueryBooks.queryAllBooks(), initialData });

  return (
    <div>
      <p>Books</p>
      {isLoading && "Loading"}
      {!isLoading && (
        <ul>
          {books &&
            books.map((book) => (
              <li
                key={`book_${book.id}`}
                onClick={() => navigate(`${book.id}`)}
              >{`${book.id}) ${book.author} - "${book.title}"`}</li>
            ))}
        </ul>
      )}
    </div>
  );
};
