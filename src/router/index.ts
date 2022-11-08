import { createRouter, createWebHistory } from "vue-router";
import { useLocalHooks } from "@/hooks/localHook";

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
  const { getLocalToken, getLocalUser, userStore } = useLocalHooks()
  if(!userStore.token) {
    getLocalToken()
    getLocalUser()
  }
  if (to.name === "login" || to.name === 'register') {
    if(userStore.token) {
      return next({path: from.path})
    }
  }
  next();
});

export default router;
