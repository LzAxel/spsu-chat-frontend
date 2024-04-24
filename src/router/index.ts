import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "LoginPage",
    component: () => import("@/views/Auth/LoginView.vue"),
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: () => import("@/views/Auth/RegisterView.vue"),
  },
];

export default createRouter({
  routes,
  history: createWebHistory(),
});
