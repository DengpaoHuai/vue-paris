import DemoCounter from '@/pages/DemoCounter.vue';
import ListMovie from '@/pages/ListMovie.vue';
import PlanetListQuery from '@/pages/PlanetListQuery.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: PlanetListQuery,
    name: 'PlanetListQuery'
  },
  {
    path: '/counter/:id/:test',
    component: DemoCounter
  },
  {
    path: '/create_movie',
    component: () => import('@/pages/CreateMovie.vue')
  },
  {
    path: '/list_movies',
    component: ListMovie
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
