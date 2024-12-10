import { defineStore } from "pinia";
import { MoviesService } from "@/services";
import { ref } from "vue";

export const useMoviesStore = defineStore('movies', () => {
    const genreMovies = ref([]);
    const movies = ref([]);
    const movie = ref({});

    async function getGenresMovies() {
        const data = await MoviesService.getGenresMovies();

        if (!("error" in data)) {
            genreMovies.value = data;
        };
    };

    async function getMovies() {
        const data = await MoviesService.getMovies();
        console.log(data);

        if (!("error" in data)) {
            movies.value = data;
        };
    };

    async function getMovie(id) {
        movie.value = await MoviesService.getMovie(id);
    };

    async function initializeApp() {
        await getGenresMovies();
        await getMovies();
        await getMovie(movies.value.results[0].id);
    };

    function searchGenreName(id) {
        for (let genre of genreMovies.value.genres) {
            if (genre.id == id) {
                return genre.name
            }
        }
    }

    return { genreMovies, movies, movie, getGenresMovies, initializeApp, searchGenreName }
});