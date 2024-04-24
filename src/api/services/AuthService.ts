import { ApiClient } from "../client/client";
import LoginRequest from "../requests/LoginRequest";
import RegisterRequest from "../requests/RegisterRequest";

export class AuthService {
    private client;

    constructor(client: ApiClient) {
        this.client = client
    }

    public async login(data: LoginRequest) {
        return await this.client.post<null>("auth/sign-in", data)
    }

    public async register(data: RegisterRequest) {
        return await this.client.post<null>("auth/sign-up", data)
    }
}