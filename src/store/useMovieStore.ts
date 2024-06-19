import crudcrud from '@/instances/crudcrud';
import type { Movie } from '@/types/movies.type';
import { defineStore } from 'pinia';
import { onMounted, ref } from 'vue';

type MovieStore = {
  movies: Movie[];
};

const useMovieStore = defineStore('movieStore', () => {
  const movies = ref<Movie[]>([]);

  onMounted(() => {
    crudcrud.get('/movies').then((response) => {
      movies.value = response.data;
    });
  });

  const addMovie = (movie: Movie) => {
    movies.value.push(movie);
  };

  return {
    movies,
    addMovie
  };
});

export default useMovieStore;
