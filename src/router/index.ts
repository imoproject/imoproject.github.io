import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Activity from "../views/Activity.vue"

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/activity', name: 'Activity', component: Activity }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router