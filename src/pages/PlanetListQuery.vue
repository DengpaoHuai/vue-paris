<script setup lang="ts">
import { getPlanets } from '@/services/planets.service';
import { useQuery } from '@tanstack/vue-query';
import { computed, ref } from 'vue';

const page = ref(1)
const { data: planetsResponse, isLoading, error } = useQuery({
    queryKey: ["planets", page],
    queryFn: () => getPlanets(page.value),
    staleTime: 3000
})

const isButtonDisabled = computed(() => !planetsResponse.value?.previous)
const isButtonDisabled2 = computed(() => !planetsResponse.value?.next)

</script>

<template>
    <div>
        <div>
            <p v-if="isLoading">Loading...</p>
        </div>
        <ul>
            <li v-for="(planet) in planetsResponse?.results" :key="planet.url">
                {{ planet.name }}
            </li>
        </ul>
        <button :disabled="isButtonDisabled" @click="planetsResponse?.previous && page--">précédent</button>
        <button :disabled="!planetsResponse?.next" @click="planetsResponse?.next && page++">suivant</button>
    </div>
</template>