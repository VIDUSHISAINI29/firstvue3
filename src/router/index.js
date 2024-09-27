import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/',
      name: 'default',
      component: () => import('@/layout/AppLayout.vue'),
      children: [
        {
          path: '/page1',
          name: 'page1',
          component: () => import('@/views/Page1.vue')
        },
        {
          path: '/page2',
          name: 'page2',
          component: () => import('@/views/Page2.vue')
        },
        {
          path: '/page3',
          name: 'page3',
          component: () => import('@/views/Page3.vue')
        },
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/Home.vue')
        }
      ]
    }
  ]
})

export default router
