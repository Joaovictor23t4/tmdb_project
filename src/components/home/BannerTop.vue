<script setup>
import { useMoviesStore } from '@/stores';
import { formatDurationMovie } from '@/utils';

const props = defineProps({
  dataMovies: {
    type: Object,
    required: true
  },
  dataMovieBanner: {
    type: Object,
    required: true
  }
})
const moviesStore = useMoviesStore();
const bannerImage = 'https://image.tmdb.org/t/p/w1280';
console.log(props.dataMovies[0]);
console.log(props.dataMovieBanner);

</script>

<template>
  <div :style="`background-image: url(${bannerImage+props.dataMovieBanner.backdrop_path})`" class="container-banner">
    <h1 class="title-banner">{{ props.dataMovieBanner.title.toUpperCase() }}</h1>
    <div class="container-stars">
      <span v-for="(star, index) in Math.round((props.dataMovieBanner.vote_average * 5) / 10)" :key="index">
        <img src="@/assets/icons/star.png" class="star" alt="">
      </span>
      <span class="rating">{{ Math.round(props.dataMovieBanner.vote_average * 5) / 10 }} (TMDb)</span>
      <span class="duration-movie">{{ formatDurationMovie(props.dataMovieBanner.runtime) }}</span>
    </div>
    <div class="container-description">
      <p>{{ props.dataMovieBanner.overview }}</p>
    </div>
  </div>
</template>

<style scoped>
.container-banner {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    height: 70vh;
    padding-left: 60px;
    padding-top: 5rem;
    background-color: blue;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0px;
}

.title-banner {
  font-size: 5rem;
  font-family: 'Rubik Dirt';
  color: #FDFDFD;
}

.container-stars {
  display: flex;
  align-items: center;
  column-gap: 5px;
  color: #FDFDFD;
}

.star {
  width: 28px;
  height: 28px;
}

.rating {
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  font-size: 1.1rem;
  margin-left: 10px;
}

.duration-movie {
  font-family: 'Arial', sans-serif;
  font-weight: bold;
}

.container-description {
  max-width: 450px;
  color: #FDFDFD;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  text-shadow: 1px 1px 1px #000;
}
</style>