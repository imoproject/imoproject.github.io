import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Activity from "../views/Activity.vue";
import Faq from "../views/Faq.vue";
import LineStamp from "../views/LineStamp.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/activity", name: "Activity", component: Activity },
  { path: "/faq", name: "Faq", component: Faq },
  { path: "/line-stamp", name: "LineStamp", component: LineStamp },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
