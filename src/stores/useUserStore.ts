import { defineStore } from "pinia";
import api from "../api";
import IBaseError from "../api/types/IBaseError";

export interface IUser {
  id: number;
  username: string;
  display_name: string;
}

export const useUserStore = defineStore("user", () => {
  const user = ref<IUser>();



  return {
    user,
  };
});
