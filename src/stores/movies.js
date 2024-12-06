import { defineStore } from "pinia";
import { MoviesService } from "@/services";
import { ref } from "vue";

export const useMoviesStore = defineStore('movies', () => {
    const genreMovies = ref([]);
    const movies = ref([]);

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

    async function initializeApp() {
        await getGenresMovies();
        await getMovies();
    }

    return { genreMovies, movies, getGenresMovies, initializeApp }
});