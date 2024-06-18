<script setup lang="ts">
import useFetch from '@/composables/useFetch';
import crudcrud from '@/instances/crudcrud';
import { onMounted, ref } from 'vue';
import { useSnackbar } from "vue3-snackbar";
const snackbar = useSnackbar();
type Movie = {
    title: string;
    _id: string;
    description: string;
    director: string;
};

const { data, refetch, deleteItemById } = useFetch<Movie[]>('/movies')



</script>

<template>
    <div>
        <ul>
            <li v-for="movie in data" :key="movie._id">
                {{ movie.title }}
                <button @click="deleteItemById(movie._id)">delete</button>
            </li>
        </ul>
    </div>
</template>