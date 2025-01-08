import { createRouter, createWebHashHistory } from "vue-router";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";

const routes = [
  {
    path: "/",
    name: "signup",
    component: Signup,
  },
  { path: "/login", name: "login", component: Login },
];

export const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
