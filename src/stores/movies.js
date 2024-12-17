import { defineStore } from "pinia";
import { MoviesService } from "@/services";
import { ref, watch } from "vue";

export const useMoviesStore = defineStore('movies', () => {
    const genreMovies = ref([]);
    const movies = ref([]);
    const movie = ref({});
    const usingGenres = ref([]);

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

    async function getMoviesWithGenres() {
        const data = await MoviesService.getMoviesWithGenres(usingGenres.value);
        console.log(data);

        if (!("error" in data)) {
            movies.value = data;
        };
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
            };
        };
    };

    function changeUsingGenres(idGenre) {
        if (usingGenres.value.includes(idGenre)) {
            console.log('Include');
            const index = usingGenres.value.findIndex((genre) => genre.id == idGenre);
            usingGenres.value.splice(index, 1);
        } else {
            usingGenres.value.push(idGenre);
        };
        getMoviesWithGenres();
    };

    return { genreMovies, movies, movie, usingGenres, getGenresMovies, getMoviesWithGenres, initializeApp, searchGenreName, changeUsingGenres }
});