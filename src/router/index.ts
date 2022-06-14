import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
     alias: '/home',
    name: "Home",
    component: () => import('../pages/HomePage.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../pages/TestPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;