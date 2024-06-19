<script setup lang="ts">
import { Vue3Snackbar } from "vue3-snackbar";
import MainLayout from './layouts/MainLayout.vue';
import { useRoute } from "vue-router";
const route = useRoute();


</script>

<template>
  <component :is="route.meta.layout ?? 'DefaultLayout'">
    <RouterView />
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
