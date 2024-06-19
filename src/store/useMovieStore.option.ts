import type { Movie } from '@/types/movies.type';
import { defineStore } from 'pinia';

type MovieStore = {
  movies: Movie[];
};

const useMovieStore = defineStore('movieStore', {
  state: (): MovieStore => {
    return {
      movies: []
    };
  },
  actions: {
    setAllMovies(movies: Movie[]) {
      this.movies = movies;
    },
    addMovie(movie: Movie) {
      this.movies.push(movie);
    }
  }
});

export default useMovieStore;
