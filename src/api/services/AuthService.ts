import { ApiClient } from "../client/client";
import LoginRequest from "../requests/LoginRequest";
import RegisterRequest from "../requests/RegisterRequest";
import LoginResponse from "../responses/LoginResponse";

export class AuthService {
  private client;

  constructor(client: ApiClient) {
    this.client = client;
  }

  public async login(data: LoginRequest): Promise<LoginResponse> {
    return await this.client.post<LoginResponse>("auth/sign-in", data);
  }

  public async register(data: RegisterRequest) {
    return await this.client.post<null>("auth/sign-up", data);
  }
}
