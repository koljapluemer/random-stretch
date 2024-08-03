import { createWebHistory, createRouter } from "vue-router";
import Landing from "@/views/Landing.vue";
import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;