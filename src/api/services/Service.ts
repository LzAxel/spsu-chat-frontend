import { AuthService } from "./AuthService";

export default class APIService {
    public auth: AuthService;

    constructor(authService: AuthService) {
        this.auth = authService
    }
}