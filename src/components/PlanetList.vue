<script setup lang="ts">
import type { Planet, PlanetResponse } from '@/types/planets.type';
import { onMounted, ref } from 'vue';

const planets = ref<PlanetResponse>({
    count: 0,
    next: '',
    previous: '',
    results: []
})
const loading = ref(true)
const error = ref<string | null>(null)








const getPlanets = (url: string) => {
    loading.value = true
    fetch(url)
        .then((response) => response.json())
        .then((data) => planets.value = data)
        .catch((err) => error.value = err)
        .finally(() => loading.value = false)
}



onMounted(() => {
    getPlanets('https://swapi.dev/api/planets/')

})



</script>

<template>
    <div>
        <div>
            <p v-if="loading">Loading...</p>
            <p v-if="error">{{ error }}</p>
        </div>
        <ul>
            <li v-for="(planet) in planets.results" :key="planet.url">
                {{ planet.name }}
            </li>
        </ul>
        <button :disabled="!planets.previous"
            @click="planets.previous && getPlanets(planets.previous)">précédent</button>
        <button :disabled="!planets.next" @click="getPlanets(planets.next)">suivant</button>
    </div>
</template>