<script setup lang="ts">
import { getPlanets } from '@/services/planets.service';
import { useQuery } from '@tanstack/vue-query';
import { ref } from 'vue';

const page = ref(1)
const { data, isLoading, error } = useQuery({
    queryKey: ["planets", page],
    queryFn: () => getPlanets(page.value),
    staleTime: 5000
})

</script>

<template>
    <div>
        <div>
            <p v-if="isLoading">Loading...</p>
        </div>
        <ul>
            <li v-for="(planet) in data?.results" :key="planet.url">
                {{ planet.name }}
            </li>
        </ul>
        <button :disabled="!data?.previous" @click="data?.previous && page--">précédent</button>
        <button :disabled="!data?.next" @click="data?.next && page++">suivant</button>
    </div>
</template>