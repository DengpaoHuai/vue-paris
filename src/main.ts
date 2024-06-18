import './assets/main.css';
import 'devextreme/dist/css/dx.light.css';

import { createApp } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { SnackbarService } from 'vue3-snackbar';
import 'vue3-snackbar/styles';

import App from './App.vue';
import router from './router/router';
import MainLayout from './layouts/MainLayout.vue';
import DefaultLayout from './layouts/DefaultLayout.vue';

const app = createApp(App);
app.use(VueQueryPlugin);
app.use(router);
app.use(SnackbarService);

app.component('MainLayout', MainLayout);
app.component('DefaultLayout', DefaultLayout);
app.mount('#app');
