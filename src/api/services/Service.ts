import { AuthService } from "./AuthService";
import { UserService } from "./UserService";

export default class APIService {
  public auth: AuthService;
  public user: UserService;

  constructor(authService: AuthService, userService: UserService) {
    this.auth = authService;
    this.user = userService;
  }
}
