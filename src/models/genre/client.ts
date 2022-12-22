import { axiosInstance } from "@/services";
import { AxiosResponse } from "axios";
import { Genre } from "./model";

const GENRES_URL_API = "dicts/genres";

const responseBody = (response: AxiosResponse) => response.data;

const GenreRequests = {
  get: (url: string) => axiosInstance.get<Genre[]>(url).then(responseBody),
  post: (url: string, body: Genre) =>
    axiosInstance.post<Genre>(url, body).then(responseBody),
  patch: (url: string, body: Genre) =>
    axiosInstance.patch<Genre>(url, body).then(responseBody),
  delete: (url: string) => axiosInstance.delete<Genre>(url).then(responseBody),
};

export const GenresClient = {
  createGenre: (body: Genre) => GenreRequests.post(GENRES_URL_API, body),
  findAllGenres: (): Promise<Genre[]> => GenreRequests.get(GENRES_URL_API),
  findGenreById: (id: number): Promise<Genre> =>
    GenreRequests.get(`${GENRES_URL_API}/${id}`),
  updateGenre: (id: number, body: Genre): Promise<Genre> =>
    GenreRequests.patch(`${GENRES_URL_API}/${id}`, body),
  removeGenre: (id: number): Promise<Genre> =>
    GenreRequests.delete(`${GENRES_URL_API}/${id}`),
};
