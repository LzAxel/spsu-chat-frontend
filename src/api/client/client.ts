import axios, {AxiosInstance} from "axios";
import IBaseError from "../types/IBaseError";

export class ApiClient {
    private client: AxiosInstance

    constructor(
        baseUrl: string,
    ) {
        this.client = axios.create({
            baseURL: baseUrl,     
        });
    }

    public async get<T>(endpoint: string = "", params?: any, signal?: AbortSignal): Promise<T | IBaseError> {
        try {
            const response = await this.client.get(endpoint, { signal, params });
            return response.data;
        } catch (error: any) {
            return error.response.data.error as IBaseError
        }
    }

    public async post<T>(endpoint: string = "", data?: any, params?: any, signal?: AbortSignal): Promise<T | IBaseError> {
        try {
            const response = await this.client.post(endpoint, data, { signal, params });
            return response.data;
        } catch (error: any) {
            return error.response.data.error as IBaseError
        }
    }
}