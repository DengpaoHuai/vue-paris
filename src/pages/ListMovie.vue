<script setup lang="ts">
import useMovieStore from '@/store/useMovieStore';
import { useRouter } from 'vue-router';
const router = useRouter()
const movieStore = useMovieStore()
</script>

<template>
    <div style="min-height : 150vh">
        <RouterLink to="/create_movie">Create Movie</RouterLink>
        <ul>
            <li v-for="movie in movieStore.movies" :key="movie._id">
                {{ movie.title }}

                <button @click="router.push({ name: 'UpdateMovie', params: { id: movie._id } })">refresh</button>
                <RouterLink :to="{ name: 'UpdateMovie', params: { id: movie._id } }">update</RouterLink>
            </li>
        </ul>
    </div>
</template>