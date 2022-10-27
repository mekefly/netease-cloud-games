import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/mobile",
    },
    {
      path: "/mobile",
      component: () => import("../views/MobileView.vue"),
    },
    {
      path: "/pc",
      component: () => import("../views/PcView.vue"),
    },
    {
      path: "/high",
      component: () => import("../views/HighView.vue"),
    },
    {
      path: "/other",
      component: () => import("../views/OtherView.vue"),
    },
    {
      path: "/download",
      component: () => import("../views/Download.vue"),
    },
  ],
});

export default router;
