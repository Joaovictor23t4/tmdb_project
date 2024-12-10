<script setup>
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
const bannerImage = 'https://image.tmdb.org/t/p/w1280';

</script>

<template>
  <div :style="`background-image: url(${bannerImage+props.dataMovieBanner.backdrop_path})`" class="container-banner">
    <h1 class="title-banner">{{ props.dataMovieBanner.title.toUpperCase() }}</h1>
    <div class="container-info-movie">
      <div class="container-stars">
        <span v-for="(star, index) in Math.round((props.dataMovieBanner.vote_average * 5) / 10)" :key="index">
          <img src="@/assets/icons/star.png" class="star" alt="">
        </span>
      </div>
      <span class="rating">{{ Math.round(props.dataMovieBanner.vote_average * 5) / 10 }} (TMDb)</span>
      <span class="duration-movie">{{ formatDurationMovie(props.dataMovieBanner.runtime) }}</span>
    </div>
    <div class="container-description">
      <p>{{ props.dataMovieBanner.overview }}</p>
    </div>
    <div class="container-topics">
      <h3 class="title-genres">Genres:</h3>
      <div class="container-genres">
        <span v-for="(genre, index) in props.dataMovieBanner.genres" :key="index" class="genre">{{ (props.dataMovieBanner.genres.length - 1 > index) ? `${genre.name}, `: genre.name }}</span>
      </div>
    </div>
    <div class="container-see-more">
      <RouterLink :to="`/movie/${props.dataMovieBanner.id}`">
        <button>
          <img src="@/assets/icons/plus.png" alt="">
          SEE MORE
        </button>
      </RouterLink>
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
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0px;
}

.title-banner {
  font-size: 5rem;
  font-family: 'Rubik Dirt';
  color: #FDFDFD;
}

.container-info-movie {
  display: flex;
  align-items: center;
  column-gap: 10px;
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
  line-height: 1.4rem;
  text-shadow: 1px 1px 1px #000;
}

.container-topics {
  display: flex;
  align-items: center;
  column-gap: 10px;
}

.title-genres {
  color: #EC2219;
  font-size: 1.1rem;
  font-family: 'Arial', sans-serif;
}

.genre {
  position: relative;
  top: 1px;
  color: #FDFDFD;
  font-family: 'Arial', sans-serif;
}

.container-see-more > a {
  text-decoration: none;
}

.container-see-more > a > button {
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  font-size: 1rem;
  border-radius: 4px;
  font-weight: bold;
  color: #FDFDFD;
  background-color: #EC2219;
  border: none;
  cursor: pointer;
}
</style>