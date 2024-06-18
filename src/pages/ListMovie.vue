<script setup lang="ts">
import crudcrud from '@/instances/crudcrud';
import { onMounted, ref } from 'vue';

type Movie = {
    title: string;
    _id: string;
    description: string;
    director: string;
}


const movies = ref<Movie[]>([])

onMounted(() => {
    crudcrud.get("/movies").then((response) => {
        console.log(response)
        movies.value = response.data
    })
})

</script>

<template>
    <div>
        <ul>
            <li v-for="movie in movies" :key="movie._id">
                {{ movie.title }}
            </li>
        </ul>
    </div>
</template>