import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import PageNotFound from "../component/NotFounPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/report",
    name: "report",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddReportView.vue"),
  },
  {
    path: "/signin",
    name: "signin",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Sign-inView.vue"),
  },
  {
    path: "/account",
    name: "account",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AccountView.vue"),
  },
  {
    path: "/workforce",
    name: "workforce",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/WorkforceView.vue"),
  },
  {
    path: "/register",
    name: "register",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RegisterView.vue"),
  },
  {
    path: "/addreport",
    name: "addreport",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddReportView.vue"),
  },
  {
    path: "/report",
    name: "report",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ReportView.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",

    component: () =>
      import(/* webpackChunkName: "about" */ "../components/NotFounPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
