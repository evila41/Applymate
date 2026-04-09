import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import AddApplicationView from '../views/AddApplicationView.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView,
  },
  {
    path: '/add',
    name: 'add-application',
    component: AddApplicationView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router