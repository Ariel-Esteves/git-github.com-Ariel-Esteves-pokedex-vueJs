import PokemonCatalog from '@/views/PokemonCatalog.vue'
import PokemonInfo from '../views/PokemonInfo.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: PokemonCatalog
    },
    {
      path: '/:pokemon',
      name: 'info',
      component: PokemonInfo
    } /*,
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }*/
  ]
})

export default router
