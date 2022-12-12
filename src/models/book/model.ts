import { Author } from "../author";
import { Genre } from "../genre";

export type Book = {
  id?: number;
  title: string;
  author: Author;
  releaseDate: string;
  genre: Genre;
};
