import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/marketplace",
      name: "marketplace",
      // route level code-splitting
      component: () => import("../views/Marketplace.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
      meta: { hideNavbar: true, hideFooter: true },
    },
    {
      path: "/myevents",
      name: "myevent",
      component: () => import("../views/MyEvent.vue"),
    },
    {
      path: "/payment",
      name: "payment",
      component: () => import("../views/Payment.vue"),
    },
    {
      path: "/success",
      name: "success",
      component: () => import("../components/payment/Success.vue"),
    },
    {
      path: "/error",
      name: "error",
      component: () => import("../components/payment/Error.vue"),
    },
    {
      path:"/register",
      name: 'register',
      component: () => import("../views/Register.vue"),
      meta: { hideNavbar: true, hideFooter: true },
    }
  ],
});

export default router;
