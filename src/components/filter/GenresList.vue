<script setup>
import { useRoute } from 'vue-router';
import { useMoviesStore, useProgramTvStore } from '@/stores';

const moviesStore = useMoviesStore();
const programsTvStore = useProgramTvStore();

console.log(moviesStore.genreMovies);
</script>

<template>
  <div class="container-genres">
    <div v-for="(genre, index) in moviesStore.genreMovies.genres" :key="index">
      <button class="genre">{{ genre.name }}</button>
    </div>
  </div>
</template>

<style scoped>
.container-genres {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 1rem;
}

.genre {
  min-width: 60px;
  padding: 5px;
  background: transparent;
  border: 1px solid #000;
  border-radius: 10px;
  transition: .2s;
  cursor: pointer;
}

.genre:hover {
  background-color: rgb(187, 41, 41);
  border: 1px solid rgb(187, 41, 41);
  color: #FDFDFD;
  /* border: 1px solid red; */
}
</style>