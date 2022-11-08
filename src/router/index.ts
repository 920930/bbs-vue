import { createRouter, createWebHistory } from "vue-router";
import { useLocalHooks } from "@/hooks/localHook";

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../pages/Cate/Index.vue"),
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
  {
    path: "/ask",
    name: "ask",
    component: () => import("../pages/Cate/Ask.vue"),
  },
  {
    path: "/share",
    name: "share",
    component: () => import("../pages/Cate/Share.vue"),
  },
  {
    path: "/discuss",
    name: "discuss",
    component: () => import("../pages/Cate/Discuss.vue"),
  },
  {
    path: "/advise",
    name: "advise",
    component: () => import("../pages/Cate/Advise.vue"),
  },
  {
    path: "/notice",
    name: "notice",
    component: () => import("../pages/Cate/Notice.vue"),
  },
  {
    path: "/logs",
    name: "logs",
    component: () => import("../pages/Cate/Logs.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-green-600',
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
