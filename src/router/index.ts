import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import HomePage from "../views/Home.vue";
import PrinciplesPage from "../views/Principles.vue";
import ResourcesPage from "../views/Resources.vue";
import TimerPage from "../views/Timer.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/principles",
    name: "Principles",
    component: PrinciplesPage,
  },
  {
    path: "/resources",
    name: "Resources",
    component: ResourcesPage,
  },
  {
    path: "/timer",
    name: "Timer",
    component: TimerPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
