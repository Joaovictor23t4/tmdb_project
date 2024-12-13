<script setup>
import { ref, computed } from 'vue';
import { RatingStars, NameGenres } from '@/components';
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

const posterImage = 'https://image.tmdb.org/t/p/w342';

const showBlackFilter = ref(false);

const whichImgFilter = computed(() => {
    return showBlackFilter ? createUrlImage('@/assets/icons/filter-black.png') : createUrlImage('@/assets/icons/filter-white.png');
});

function createUrlImage(path) {
    const url = URL.createObjectURL(path, import.meta.url).href;
    console.log(url);
    return url;
};
</script>

<template>
  <div class="container-list">
    <div class="container-center">
        <div class="container-title-filter">
            <h2 class="title">Latest {{ props.typeEnterteinement == 'movies' ? 'Movies' : 'TV Programs' }}</h2>
            <button class="button-filter"><img :src="whichImgFilter" @mouseenter="showBlackFilter = true" @mouseleave="showBlackFilter = false" class="filter-icon" alt="">Filter</button>
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

.container-title-filter > button {
    width: 100px;
    height: 40px;
    position: relative;
    right: 55px;
    background: transparent;
    border: 2px solid #FDFDFD;
    border-radius: 25px;
    color: #FDFDFD;
    font-size: 1rem;
    font-weight: bolder;
    margin-bottom: 1rem;
    transition: .5s;
    cursor: pointer
}

.container-title-filter > button:hover {
    background-color: #FDFDFD;
    color: #000;
}

.button-filter {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 4px;
}

.filter-icon {
    width: 16px;
    position: relative;
    bottom: 1px;
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
    transition: transform 1s;
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
</style>