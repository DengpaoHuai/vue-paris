<script setup lang="ts">
import { deleteMovieById, getMovieById, getMovies } from '@/services/movies.service';
import useMovieStore from '@/store/useMovieStore';
import type { Movie } from '@/types/movies.type';
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query';
import { inject, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()


const { data: movies } = useQuery<Movie[]>({
    queryKey: ['movies'],
    queryFn: getMovies,
})

const queryClient = useQueryClient()

const prefetchMovie = (id: string) => {
    queryClient.prefetchQuery({
        queryKey: ['movie', id],
        queryFn: () => getMovieById(id),
        staleTime: 10000

    })
}

const { mutate } = useMutation({
    mutationFn: (id: string) => deleteMovieById(id),
    onMutate: async (idToDelete) => {
        // Cancel any outgoing refetches
        // (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries({ queryKey: ['movies'] })

        // Snapshot the previous value
        const previousTodos = queryClient.getQueryData(['movies'])

        // Optimistically update to the new value
        queryClient.setQueryData(['movies'], (old) => old.filter((movie: Movie) => movie._id !== idToDelete))

        // Return a context object with the snapshotted value
        return { previousTodos }
    },
    // If the mutation fails,
    // use the context returned from onMutate to roll back
    onError: (err, newTodo, context) => {
        queryClient.setQueryData(['movies'], context.previousTodos)
    },
    onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ['movies'] })
    },
})

const search = ref('')

const searchMovies = () => {

}

const name = inject('myInjectedFunction')
name('je veux afficher ça')

</script>

<template>
    <div style="min-height : 150vh">
        <input type="text" v-selection v-model="search" @input="searchMovies" />
        <RouterLink to="/create_movie">Create Movie</RouterLink>
        <ul>
            <li v-for="movie in movies" :key="movie._id">
                {{ movie.title }}
                <button @click="mutate(movie._id)">delete</button>
                <button @click="router.push({ name: 'UpdateMovie', params: { id: movie._id } })">refresh</button>
                <RouterLink @mouseover="prefetchMovie(movie._id)"
                    :to="{ name: 'UpdateMovie', params: { id: movie._id } }">update</RouterLink>
            </li>
        </ul>
    </div>
</template>