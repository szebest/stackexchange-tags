import axios from "axios";

import { API_BASE_URL } from "@/config";
import { AxiosErrorModel } from "@/models";

export const api = axios.create({
  baseURL: API_BASE_URL,
});

const errorHandler = (error: AxiosErrorModel) => {
  const statusCode = error.response?.status;
  const statusText = error.response?.statusText;

  if (!statusCode) return;

  console.warn(`Got error response: ${statusCode} - ${statusText}`);

  return Promise.reject(error);
};

api.interceptors.response.use(undefined, errorHandler);
