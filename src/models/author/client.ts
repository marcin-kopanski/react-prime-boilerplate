import { axiosInstance } from "@/services";
import { AxiosResponse } from "axios";
import { Author } from "./model";

const AUTHORS_URL_API = "dicts/authors";

const responseBody = (response: AxiosResponse) => response.data;

const AuthorRequests = {
  get: (url: string) => axiosInstance.get<Author[]>(url).then(responseBody),
  post: (url: string, body: Author) =>
    axiosInstance.post<Author>(url, body).then(responseBody),
  patch: (url: string, body: Author) =>
    axiosInstance.patch<Author>(url, body).then(responseBody),
  delete: (url: string) => axiosInstance.delete<Author>(url).then(responseBody),
};

export const AuthorsClient = {
  createAuthor: (body: Author) => AuthorRequests.post(AUTHORS_URL_API, body),
  findAllAuthors: (): Promise<Author[]> => AuthorRequests.get(AUTHORS_URL_API),
  findAuthorById: (id: number): Promise<Author> =>
    AuthorRequests.get(`${AUTHORS_URL_API}/${id}`),
  updateAuthor: (id: number, body: Author): Promise<Author> =>
    AuthorRequests.patch(`${AUTHORS_URL_API}/${id}`, body),
  removeAuthor: (id: number): Promise<Author> =>
    AuthorRequests.delete(`${AUTHORS_URL_API}/${id}`),
};
