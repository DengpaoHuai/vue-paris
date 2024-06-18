import './assets/main.css';
import 'devextreme/dist/css/dx.light.css';

import { createApp } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { SnackbarService } from 'vue3-snackbar';
import 'vue3-snackbar/styles';

import App from './App.vue';
import router from './router/router';

const app = createApp(App);
app.use(VueQueryPlugin);
app.use(router);
app.use(SnackbarService);
app.mount('#app');
