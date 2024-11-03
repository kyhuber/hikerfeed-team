import { createRouter, createWebHistory } from 'vue-router'
import TeamDirectory from '../components/TeamDirectory.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TeamDirectory
    }
  ]
})

export default router