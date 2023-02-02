import { Controller, useForm } from "react-hook-form";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

import { useQuery } from "@tanstack/react-query";

import { Book } from "@/models";
import { LoaderBooks } from "@/models/book/loader-client";
import { QueryBooks } from "@/models/book/query-client";

export const BookDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams() as { id: string };

  const initialData = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof LoaderBooks.loaderBookById>>
  >;
  const { data: book, isLoading } = useQuery({
    ...QueryBooks.queryBookById(+id),
    initialData,
  });
  const { register, control, handleSubmit, watch, formState } = useForm<Book>({
    defaultValues: {
      ...book,
    },
  });

  const onSubmitHandler = handleSubmit((data) => {
    console.log(data);

    // const response = await axiosInstance.patch(`books/${data.id}`, data);
    // console.log("response", response);
  });

  return (
    <div>
      <h1>{`"${book?.title}" by ${book?.author.firstName} ${book?.author.lastName}`}</h1>

      <form onSubmit={onSubmitHandler}>
        <Controller
          name="title"
          control={control}
          rules={{ required: { value: true, message: "Title is required!!" } }}
          render={({ field, fieldState: { error } }) => (
            <div className="field grid">
              <label htmlFor="title-input" className="col-fixed w-10rem">
                Title
              </label>
              <div className="col">
                <InputText id="title-input" {...field} />
                <small id="title-input-help" className="hidden mt-2">
                  {error ? error.message : "Helper"}
                </small>
              </div>
            </div>
          )}
        />

        <Controller
          name="author.firstName"
          control={control}
          rules={{ required: { value: true, message: "Author is required!" } }}
          render={({ field, fieldState: { error } }) => (
            <div className="field grid">
              <label htmlFor="author-input" className="col-fixed w-10rem">
                Author First Name
              </label>
              <div className="col">
                <InputText id="author-input" {...field} />
                <small id="author-input-help" className="hidden mt-2">
                  {error ? error.message : "Helper"}
                </small>
              </div>
            </div>
          )}
        />

        <input
          type={"datetime-local"}
          {...register("releaseDate", { required: true })}
        />

        <Button type={"submit"}>Submit</Button>
      </form>

      <Button onClick={() => navigate("../")}>Back</Button>
    </div>
  );
};
