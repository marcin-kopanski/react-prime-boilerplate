import { axiosInstance } from "@/services";
import { AxiosResponse } from "axios";
import { Book } from "./model";

const BOOKS_URL_API = "dicts/books";

const responseBody = (response: AxiosResponse) => response.data;

const BookRequests = {
  get: (url: string) => axiosInstance.get<Book[]>(url).then(responseBody),
  post: (url: string, body: Book) => axiosInstance.post<Book>(url, body).then(responseBody),
  patch: (url: string, body: Book) => axiosInstance.patch<Book>(url, body).then(responseBody),
  delete: (url: string) => axiosInstance.delete<Book>(url).then(responseBody),
};

export const BooksClient = {
  createBook: (body: Book) => BookRequests.post(BOOKS_URL_API, body),
  findAllBooks: (): Promise<Book[]> => BookRequests.get(BOOKS_URL_API),
  findBookById: (id: number): Promise<Book> => BookRequests.get(`${BOOKS_URL_API}/${id}`),
  updateBook: (id: number, body: Book): Promise<Book> =>
    BookRequests.patch(`${BOOKS_URL_API}/${id}`, body),
  removeBook: (id: number): Promise<Book> => BookRequests.delete(`${BOOKS_URL_API}/${id}`),
};
