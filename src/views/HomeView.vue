<script setup>
import { onMounted } from "vue";
import { useMoviesStore, useProgramTvStore } from "@/stores";
import { BannerTop, ListEntertainement } from "@/components";

const moviesStore = useMoviesStore();
const programsTvStore = useProgramTvStore();

onMounted(async() => {
  await moviesStore.initializeApp();
  await programsTvStore.initializeApp();
});
</script>

<template>
  <BannerTop v-if="Object.keys(moviesStore.movie).length > 0" :data-movies="moviesStore.movies.results" :data-movie-banner="moviesStore.movie" />
  <div class="container-last-content" v-if="Object.keys(moviesStore.movies).length > 0 && Object.keys(programsTvStore.programsTv).length > 0">
    <ListEntertainement :list-content="moviesStore.movies.results.slice(0, 8)" type-enterteinement="movies" />
    <ListEntertainement :list-content="programsTvStore.programsTv.results.slice(0, 8)" type-enterteinement="tv" />
  </div>
</template>

<style scoped>
.container-last-content {
  margin: 5rem 0;
}
</style>