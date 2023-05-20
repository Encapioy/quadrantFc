import { createRouter, createWebHistory } from 'vue-router'
import SmpView from '../views/SmpView.vue'
import SmaView from '../views/SmaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'smp',
      component: SmpView
    },
    {
      path: '/sma',
      name: 'sma',
      component: SmaView
    }
  ]
})

export default router
