import { Book } from "../book";
import { Country } from "../country";

export type Author = {
  id?: number;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  dateOfDeath: Date;
  country: Country;
  books: Book[];
};
