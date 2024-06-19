import './assets/main.css';
import 'devextreme/dist/css/dx.light.css';

import { createApp } from 'vue';
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query';
import { SnackbarService } from 'vue3-snackbar';
import 'vue3-snackbar/styles';

import App from './App.vue';
import router from './router/router';
import MainLayout from './layouts/MainLayout.vue';
import DefaultLayout from './layouts/DefaultLayout.vue';
import { createPinia } from 'pinia';
import plugin from './plugin';

const app = createApp(App);
const pinia = createPinia();
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
      refetchOnWindowFocus: true,
      retry: 2
    }
  }
});

app.use(pinia);
app.use(VueQueryPlugin, {
  queryClient: queryClient
});
app.use(VueQueryPlugin);
app.use(router);
app.use(SnackbarService);

app.directive('selection', {
  mounted(el) {
    el.focus();
  }
});
app.use(plugin);
app.component('MainLayout', MainLayout);
app.component('DefaultLayout', DefaultLayout);
app.mount('#app');
