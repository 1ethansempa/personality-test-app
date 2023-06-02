import axios, { AxiosInstance } from "axios";

export const baseURL = "http://localhost:4000";

export const api: AxiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
