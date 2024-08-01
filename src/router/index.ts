import { createRouter, createWebHistory } from 'vue-router'
import AccountsReceivable from '@/components/AccountsReceivable.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accountsReceivable',
      component: AccountsReceivable,
    },
    // You can remove the about route if it's not needed for your project
    // If you want to keep it for future use, you can leave it commented out
    /*
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    */
  ],
})

export default router
