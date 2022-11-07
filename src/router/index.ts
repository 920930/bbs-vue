import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/stores/user";
import { useLocalStorage } from "@/hooks/localStorage";
const userStore = useUserStore();
const { getToken, getUser } = useLocalStorage()

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../pages/Index.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/User/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../pages/User/Register.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if(!userStore.token) {
    const token = getToken()
    if (token) {
      userStore.token = token;
      const user = getUser();
      userStore.user.name = user.name;
      userStore.user.avatar = user.avatar;
    }
  }
  if (to.name === "login") {
    console.log(from);
  }
  next();
});

export default router;
