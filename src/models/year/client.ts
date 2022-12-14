import { AxiosResponse } from "axios";

import { axiosInstance } from "@/services";

import { Year } from "./model";

const YEARS_URL_API = "dicts/years";

const responseBody = (response: AxiosResponse) => response.data;

const YearRequests = {
  get: (url: string) => axiosInstance.get<Year[]>(url).then(responseBody),
  post: (url: string, body: Year) =>
    axiosInstance.post<Year>(url, body).then(responseBody),
  patch: (url: string, body: Year) =>
    axiosInstance.patch<Year>(url, body).then(responseBody),
  delete: (url: string) => axiosInstance.delete<Year>(url).then(responseBody),
};

export const YearsClient = {
  createYear: (body: Year) => YearRequests.post(YEARS_URL_API, body),
  findAllYears: (): Promise<Year[]> => YearRequests.get(YEARS_URL_API),
  findYearById: (id: number): Promise<Year> =>
    YearRequests.get(`${YEARS_URL_API}/${id}`),
  updateYear: (id: number, body: Year): Promise<Year> =>
    YearRequests.patch(`${YEARS_URL_API}/${id}`, body),
  removeYear: (id: number): Promise<Year> =>
    YearRequests.delete(`${YEARS_URL_API}/${id}`),
};
