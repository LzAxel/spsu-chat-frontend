import { ApiClient } from "./client/client";
import { AuthService } from "./services/AuthService";
import APIService from "./services/Service";

const client = new ApiClient(import.meta.env.VITE_BASE_API_URL)

export default new APIService(
    new AuthService(client)
)