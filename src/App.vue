<script setup lang="ts">
import { Vue3Snackbar } from "vue3-snackbar";
import MainLayout from './layouts/MainLayout.vue';
import { useRoute } from "vue-router";
import HeaderDemo from "./components/HeaderDemo.vue";
import { provide } from "vue";
const route = useRoute();

provide('name', (e) => {
  console.log(e)
})
</script>

<template>
  <component :is="route.meta.layout ?? 'DefaultLayout'">
    <template #default>
      <RouterView />
    </template>
    <template #header>
      <h1>header</h1>
      <component :is="route.meta.header ? HeaderDemo : HeaderDemo"></component>
    </template>
    <template #footer>
      <h1>footer</h1>
    </template>
  </component>

  <Vue3Snackbar top right :duration="4000"></Vue3Snackbar>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
