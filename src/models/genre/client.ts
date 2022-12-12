import { axiosInstance } from "@/services";
import { AxiosResponse } from "axios";
import { Genre } from "./model";

const GENRES_URL_API = "dicts/genres";

const responseBody = (response: AxiosResponse) => response.data;

const genreRequests = {
  get: (url: string) => axiosInstance.get<Genre[]>(url).then(responseBody),
  post: (url: string, body: Genre) => axiosInstance.post<Genre>(url, body).then(responseBody),
  patch: (url: string, body: Genre) => axiosInstance.patch<Genre>(url, body).then(responseBody),
  delete: (url: string) => axiosInstance.delete<Genre>(url).then(responseBody),
};

export const GenresClient = {
  createGenre: (body: Genre) => genreRequests.post(GENRES_URL_API, body),
  findAllGenres: (): Promise<Genre[]> => genreRequests.get(GENRES_URL_API),
  findGenreById: (id: number): Promise<Genre> => genreRequests.get(`${GENRES_URL_API}/${id}`),
  updateGenre: (id: number, body: Genre): Promise<Genre> =>
    genreRequests.patch(`${GENRES_URL_API}/${id}`, body),
  removeGenre: (id: number): Promise<Genre> => genreRequests.delete(`${GENRES_URL_API}/${id}`),
};
