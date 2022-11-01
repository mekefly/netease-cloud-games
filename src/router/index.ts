import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/mobile",
      component: () => import("../views/SubNavView.vue"),
      children: [
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
          path: "/search",
          component: () => import("../views/SearchView.vue"),
        },
      ],
    },

    {
      path: "/download",
      component: () => import("../views/DownloadView.vue"),
    },
  ],
});

export default router;
