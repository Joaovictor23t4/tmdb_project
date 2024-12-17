<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { RatingStars, NameGenres, FilterContainer } from '@/components';
const props = defineProps({
    typeEnterteinement: {
        type: String,
        required: true
    },
    listContent: {
        type: Array,
        required: true
    }
});

const route = useRoute();
const posterImage = 'https://image.tmdb.org/t/p/w342';
</script>

<template>
  <div class="container-list">
    <div class="container-center">
        <div class="container-title-filter">
            <h2 class="title">Latest {{ props.typeEnterteinement == 'movies' ? 'Movies' : 'TV Programs' }}</h2>
            <FilterContainer v-if="route.path !== '/'" />
        </div>
        <div class="container-latest-content">
            <div class="container-content" v-for="(content, index) in props.listContent" :style="`background-image: url(${posterImage+content.poster_path})`" :key="index">
                <h3 class="title-content">{{ (props.typeEnterteinement == 'movies') ? content.title : content.name }}</h3>
                <RatingStars :vote_average="content.vote_average" />
                <NameGenres :genre_ids="content.genre_ids" :type-entertainment="props.typeEnterteinement" />
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.container-list {
    width: 100%;
    height: 100%;
    padding: 3rem 0;
}

.container-center {
    display: flex;
    flex-direction: column;
    padding: 0 12rem;
}

.container-title-filter {
    display: flex;
    justify-content: space-between;
}

.title {
    color: #FDFDFD;
    font-family: 'Arial', sans-serif;
    margin-bottom: 1rem;
}

.container-latest-content {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
}

.container-content {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 342px;
    height: 500px;
    padding: 30px 20px;
    border-radius: 5px;
    transition: transform .5s;
    transform: scale(1);
    cursor: pointer;
}

.container-content:hover {
    transform: scale(1.05);
    z-index: 2;
}

.title-content {
    font-family: 'Arial', sans-serif;
    color: #FDFDFD;
    text-shadow: 1px 1px 1px #000;
}

@media (max-width: 1440px) {
    .container-center {
        padding: 0 10rem;
    }
}
</style>