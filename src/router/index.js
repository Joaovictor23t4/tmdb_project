import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/DefaultLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: 'movies',
          name: 'movies',
          component: () => import ('@/views/MoviesView.vue')
        },
        {
          path: 'programs',
          name: 'programs',
          component: () => import ('@/views/ProgramsView.vue')
        }
      ]
    },
  ],
});

export default router;