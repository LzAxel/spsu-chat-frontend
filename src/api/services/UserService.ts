import { ApiClient } from "../client/client";
import LoginRequest from "../requests/LoginRequest";
import RegisterRequest from "../requests/RegisterRequest";
import GetSelfUserResponse from "../responses/GetSelfUserResponse";
import LoginResponse from "../responses/LoginResponse";

export class UserService {
  private client;

  constructor(client: ApiClient) {
    this.client = client;
  }

  public async get_self(data: LoginRequest): Promise<GetSelfUserResponse> {
    return await this.client.get<GetSelfUserResponse>("users/self", data);
  }
}
