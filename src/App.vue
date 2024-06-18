<script setup lang="ts">
import PlanetListQuery from './components/PlanetListQuery.vue';
import DxButton from 'devextreme-vue/button';
import { Vue3Snackbar } from "vue3-snackbar";
</script>

<template>
  <RouterView />
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
