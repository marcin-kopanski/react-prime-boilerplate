import { AxiosResponse } from "axios";

import { axiosInstance } from "@/services";

import { User } from "./model";

const USERS_URL_API = "Users";

const responseBody = (response: AxiosResponse) => response.data;

const UserRequests = {
  get: (url: string) => axiosInstance.get<User[]>(url).then(responseBody),
  post: (url: string, body: User) =>
    axiosInstance.post<User>(url, body).then(responseBody),
  postPartial: (url: string, body: { email: string; password: string }) =>
    axiosInstance.post<User>(url, body).then(responseBody),
  patch: (url: string, body: User) =>
    axiosInstance.patch<User>(url, body).then(responseBody),
  delete: (url: string) => axiosInstance.delete<User>(url).then(responseBody),
};

export const UsersClient = {
  createUser: (body: User) => UserRequests.post(USERS_URL_API, body),
  findAllUsers: (): Promise<User[]> => UserRequests.get(USERS_URL_API),
  findUserById: (id: number): Promise<User> =>
    UserRequests.get(`${USERS_URL_API}/${id}`),
  authenticate: (email: string, password: string): Promise<User> =>
    UserRequests.postPartial(`${USERS_URL_API}/auth`, { email, password }),
  updateUser: (id: number, body: User): Promise<User> =>
    UserRequests.patch(`${USERS_URL_API}/${id}`, body),
  removeUser: (id: number): Promise<User> =>
    UserRequests.delete(`${USERS_URL_API}/${id}`),
};
