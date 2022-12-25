import { AxiosResponse } from "axios";

import { axiosInstance } from "@/services";

import { Country } from "./model";

const COUNTRIES_URL_API = "dicts/countries";

const responseBody = (response: AxiosResponse) => response.data;

const CountryRequests = {
  get: (url: string) => axiosInstance.get<Country[]>(url).then(responseBody),
  post: (url: string, body: Country) =>
    axiosInstance.post<Country>(url, body).then(responseBody),
  patch: (url: string, body: Country) =>
    axiosInstance.patch<Country>(url, body).then(responseBody),
  delete: (url: string) =>
    axiosInstance.delete<Country>(url).then(responseBody),
};

export const CountriesClient = {
  createCountry: (body: Country) =>
    CountryRequests.post(COUNTRIES_URL_API, body),
  findAllCountries: (): Promise<Country[]> =>
    CountryRequests.get(COUNTRIES_URL_API),
  findCountryById: (id: number): Promise<Country> =>
    CountryRequests.get(`${COUNTRIES_URL_API}/${id}`),
  updateCountry: (id: number, body: Country): Promise<Country> =>
    CountryRequests.patch(`${COUNTRIES_URL_API}/${id}`, body),
  removeCountry: (id: number): Promise<Country> =>
    CountryRequests.delete(`${COUNTRIES_URL_API}/${id}`),
};
