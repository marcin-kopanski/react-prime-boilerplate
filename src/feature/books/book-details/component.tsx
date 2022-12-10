import { useQuery } from "@tanstack/react-query";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Book } from "src/models";
import { bookByIdLoader, bookByIdQuery } from "src/models/book/query-client";

export const BookDetails: FC<{}> = () => {
  const navigate = useNavigate();
  const { id } = useParams() as { id: string };

  const initialData = useLoaderData() as Awaited<ReturnType<ReturnType<typeof bookByIdLoader>>>;
  const { data: book, isLoading } = useQuery({ ...bookByIdQuery(+id), initialData });
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
      <p>{`"${book.title}" by ${book.author}`}</p>

      <form onSubmit={onSubmitHandler}>
        <Controller
          name="title"
          control={control}
          rules={{ required: { value: true, message: "Title is required!!" } }}
          render={({ field, fieldState: { error } }) => (
            <div className="field">
              <label htmlFor="title-input">Title</label>
              <InputText id="title-input" {...field} />
              <small id="title-input-help" className="block">
                {error ? error.message : "Helper"}
              </small>
            </div>
          )}
        />

        <Controller
          name="author"
          control={control}
          rules={{ required: { value: true, message: "Author is required!" } }}
          render={({ field, fieldState: { error } }) => (
            <div className="field">
              <label htmlFor="author-input">Author</label>
              <InputText id="author-input" {...field} />
              <small id="author-input-help" className="block">
                {error ? error.message : "Helper"}
              </small>
            </div>
          )}
        />

        <input type={"datetime-local"} {...register("releaseDate", { required: true })} />

        <Button type={"submit"}>Submit</Button>
      </form>

      <Button onClick={() => navigate("../")}>Back</Button>
    </div>
  );
};
