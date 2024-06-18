import crudcrud from '@/instances/crudcrud';
import DemoCounter from '@/pages/DemoCounter.vue';
import ListMovie from '@/pages/ListMovie.vue';
import PlanetListQuery from '@/pages/PlanetListQuery.vue';
import UpdateMovie from '@/pages/UpdateMovie.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: PlanetListQuery,
    name: 'PlanetListQuery',
    meta: {
      layout: 'MainLayout'
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
    beforeEnter: (to, from, next) => {
      const id = to.params.id;
      crudcrud
        .get('/movies/' + id)
        .then((response) => {
          console.log(response);
          to.meta.movie = response.data;
          next();
        })
        .catch((error) => {
          next();
        });
    }
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
