<script setup>
import { ref, computed } from 'vue';
import { GenresList } from '@/components';

const showBlackIconFilter = ref(false);
const showFilter = ref(false);

const whichImgFilter = computed(() => {
    return showBlackIconFilter.value ? createUrlImage('@/assets/icons/filter-black.png') : createUrlImage('@/assets/icons/filter-white.png');
});

function createUrlImage(path) {
    const url = new URL(path.replace('@', '/src'), import.meta.url).href;
    console.log(url);
    return url;
};
</script>

<template>
  <div class="container-button-filter">
      <button @mouseenter="showBlackIconFilter = true" @mouseleave="showBlackIconFilter = false" @click="showFilter = !showFilter" class="button-filter"><img :src="whichImgFilter" class="filter-icon" alt="">Filter</button>

      <div class="container-filter" v-if="showFilter">
          <div class="container-close-icon">
              <h1 class="name-filter">Genres</h1>
              <img src="@/assets/icons/close.png" @click="showFilter = false" alt="">
          </div>
          <GenresList />
      </div>
  </div>
</template>

<style scoped>
.container-button-filter {
    display: flex;
    flex-direction: column;
}

.container-button-filter > button {
    width: 100px;
    height: 40px;
    position: relative;
    right: 25px;
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

.container-button-filter > button:hover {
    background-color: #FDFDFD;
    color: #000;
}

.button-filter {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 4px;
}

.container-filter {
    position: fixed;
    width: 300px;
    height: 400px;
    margin-top: 4rem;
    right: 6rem;
    padding: 1rem;
    border-radius: 10px;
    background-color: #F9F9F9;
    z-index: 2;
}   

.filter-icon {
    width: 16px;
    position: relative;
    bottom: 1px;
}

.container-filter {
    display: flex;
    flex-direction: column;
}

.name-filter {
  font-size: .9rem;
  font-family: 'Arial', sans-serif;
  color: rgb(78, 78, 78);
}

.container-close-icon {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.container-close-icon > img {
    cursor: pointer;
}

@media (max-width: 1440px) {
    .container-button-filter {
        position: relative;
        right: 30px;
    }

    .container-button-filter > button {
        right: 0;
    }
}
</style>