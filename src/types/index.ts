import { AxiosResponse } from 'axios';

export type RequestData = { [key: string]: unknown };
export type RequestParams = { [key: string]: unknown };
export type RequestHeaders = { [key: string]: string };

export type Response = Promise<AxiosResponse<any, any>>;

export type ActivateServiceClientOptions = {
  baseURL: string;
  jwt: string;
};
