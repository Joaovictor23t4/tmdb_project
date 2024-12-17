<script setup>
import { useRoute } from 'vue-router';
import { useMoviesStore, useProgramTvStore } from '@/stores';

const moviesStore = useMoviesStore();
const programsTvStore = useProgramTvStore();
const route = useRoute();

function changeClassInGenre(text) {
  const buttonsGenre = document.querySelectorAll('.genre');

  for (let c = 0; c < buttonsGenre.length; c++) {
    if (buttonsGenre[c].textContent == text) {
      buttonsGenre[c].classList.toggle('activeGenre');
    };
  };
};
</script>

<template>
  <div class="container-genres" v-if="route.path == '/movies'">
    <div v-for="(genre, index) in moviesStore.genreMovies.genres" :key="index">
      <button class="genre" @click="moviesStore.changeUsingGenres(genre.id); changeClassInGenre(genre.name)">{{ genre.name }}</button>
    </div>
  </div>
  <div class="container-genres" v-else>
    <div v-for="(genre, index) in programsTvStore.genresTp.genres" :key="index">
      <button class="genre" @click="programsTvStore.changeUsingGenres(genre.id); changeClassInGenre(genre.name)">{{ genre.name }}</button>
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

.activeGenre {
  background-color: rgb(187, 41, 41);
  border: 1px solid rgb(187, 41, 41);
  color: #FDFDFD;
}
</style>