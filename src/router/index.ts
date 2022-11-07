import { createRouter, createWebHistory } from "vue-router";

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
  if (to.name === "login") {
    console.log(from);
  }
  next();
});

export default router;
