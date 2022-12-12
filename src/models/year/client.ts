import { axiosInstance } from "@/services";
import { AxiosResponse } from "axios";
import { Year } from "./model";

const YEARS_URL_API = "dicts/years/";

const responseBody = (response: AxiosResponse) => response.data;

const yearRequests = {
  get: (url: string) => axiosInstance.get<Year[]>(url).then(responseBody),
  post: (url: string, body: Year) => axiosInstance.post<Year>(url, body).then(responseBody),
  patch: (url: string, body: Year) => axiosInstance.patch<Year>(url, body).then(responseBody),
  delete: (url: string) => axiosInstance.delete<Year>(url).then(responseBody),
};

export const YearsClient = {
  createYear: (body: Year) => yearRequests.post(YEARS_URL_API, body).then(responseBody),
  findAllYears: (): Promise<Year[]> => yearRequests.get(YEARS_URL_API),
  findYearById: (id: number): Promise<Year> => yearRequests.get(`${YEARS_URL_API}/${id}`),
  updateYear: (id: number, body: Year): Promise<Year> =>
    yearRequests.patch(`${YEARS_URL_API}/${id}`, body),
  removeYear: (id: number): Promise<Year> => yearRequests.delete(`${YEARS_URL_API}/${id}`),
};
