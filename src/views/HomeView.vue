<script setup>
import { onMounted } from "vue";
import { useMoviesStore } from "@/stores";
import { BannerTop } from "@/components";

const moviesStore = useMoviesStore();

onMounted(async() => {
  await moviesStore.initializeApp();
  console.log(moviesStore.movie);
});
</script>

<template>
  <BannerTop v-if="Object.keys(moviesStore.movie).length > 0" :data-movies="moviesStore.movies.results" :data-movie-banner="moviesStore.movie" />
</template>
