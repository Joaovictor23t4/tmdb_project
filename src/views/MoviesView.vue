<script setup>
import { onMounted } from 'vue';
import { ListEntertainement } from '@/components';
import { useMoviesStore } from '@/stores';

const moviesStore = useMoviesStore();

onMounted(async() => {
  await moviesStore.initializeApp();
})
</script>

<template>
  <ListEntertainement type-enterteinement="movies" :list-content="moviesStore.movies.results" />
</template>

<style scoped>
</style>