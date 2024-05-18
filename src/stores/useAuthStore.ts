import { defineStore } from "pinia";
import api from "../api";
import IBaseError from "../api/types/IBaseError";

export interface IAuth {
  access_token: string;
  refresh_token: string;
}

export const useAuthStore = defineStore("auth", () => {
  const auth = ref<IAuth>();

  const login = async (username: string, password: string) => {
    try {
      const response = await api.auth.login({ username, password });
      auth.value = {
        access_token: response.access_token,
        refresh_token: response.refresh_token,
      };
    } catch (error: any) {}
  };

  const register = async (
    username: string,
    password: string,
    displayName: string
  ) => {
    try {
      await api.auth.register({
        username,
        password,
        display_name: displayName,
      });
    } catch {}
  };

  return {
    auth,
    login,
    register,
  };
});
