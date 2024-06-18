<script setup lang="ts">
import useFetch from '@/composables/useFetch';
import crudcrud from '@/instances/crudcrud';
import type { Movie } from '@/types/movies.type';
import { onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useSnackbar } from "vue3-snackbar";
const snackbar = useSnackbar();
const router = useRouter()


const { data, refetch, deleteItemById } = useFetch<Movie[]>('/movies')

const onScroll = (e) => {
    console.log(e)
}

onMounted(() => {
    document.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
    document.removeEventListener('scroll', onScroll)
})
</script>

<template>
    <div style="min-height : 150vh">
        <RouterLink to="/create_movie">Create Movie</RouterLink>
        <ul>
            <li v-for="movie in data" :key="movie._id">
                {{ movie.title }}
                <button @click="deleteItemById(movie._id)">delete</button>
                <button @click="router.push({ name: 'UpdateMovie', params: { id: movie._id } })">refresh</button>
                <RouterLink :to="{ name: 'UpdateMovie', params: { id: movie._id } }">update</RouterLink>
            </li>
        </ul>
    </div>
</template>