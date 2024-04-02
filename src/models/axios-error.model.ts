import { AxiosError } from "axios";

export type AxiosErrorDataModel = {
  error_id: number;
  error_message: string;
  error_name: string;
};

export type AxiosErrorModel = AxiosError<AxiosErrorDataModel>;
