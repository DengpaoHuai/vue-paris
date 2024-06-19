import crudcrud from '@/instances/crudcrud';
import { queryClient } from '@/main';
import DashboardPage from '@/pages/DashboardPage.vue';
import DemoCounter from '@/pages/DemoCounter.vue';
import ListMovie from '@/pages/ListMovie.vue';
import PlanetListQuery from '@/pages/PlanetListQuery.vue';
import UpdateMovie from '@/pages/UpdateMovie.vue';
import { getMovieById } from '@/services/movies.service';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: PlanetListQuery,
    name: 'PlanetListQuery',
    meta: {
      layout: 'MainLayout',
      header: 'HeaderDemo'
    }
  },
  {
    path: '/counter/:id/:test',
    component: DemoCounter
  },
  {
    path: '/create_movie',
    component: () => import('@/pages/CreateMovie.vue'),
    meta: {
      layout: 'MainLayout'
    }
  },
  {
    path: '/list_movies',
    component: ListMovie,
    meta: {
      layout: 'MainLayout'
    }
  },
  {
    path: '/update_movie/:id',
    component: UpdateMovie,
    name: 'UpdateMovie',
    meta: {
      layout: 'MainLayout',
      movie: {}
    },
    beforeEnter: async (to, from, next) => {
      const id = to.params.id;
      await queryClient.prefetchQuery({
        queryKey: ['movie', id],
        queryFn: () => getMovieById(id),
        staleTime: 10000
      });
      next();
    }
  },
  {
    path: '/dashboard',
    component: DashboardPage
  }
  /*{
    path : '/:pathMatch(.*)*',
    component: () => import('@/pages/NotFound.vue')
  }*/
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.afterEach((to, from, ...rest) => {
  console.log(to);
  console.log(rest);
});

export default router;
