import axios, { AxiosInstance } from "axios";
import IBaseError from "../types/IBaseError";

export class ApiClient {
  private client: AxiosInstance;

  constructor(baseUrl: string) {
    this.client = axios.create({
      baseURL: baseUrl,
    });
  }

  public async get<T>(
    endpoint: string = "",
    params?: any,
    signal?: AbortSignal
  ): Promise<T> {
    try {
      const response = await this.client.get(endpoint, { signal, params });
      return response.data;
    } catch (error: any) {
      this.handleError(error);
    }
  }

  public async post<T>(
    endpoint: string = "",
    data?: any,
    params?: any,
    signal?: AbortSignal
  ): Promise<T> {
    try {
      const response = await this.client.post(endpoint, data, {
        signal,
        params,
      });
      return response.data;
    } catch (error: any) {
      this.handleError(error);
    }
  }

  private handleError(error: any): never {
    throw error.response.data.error as IBaseError;
  }
}
