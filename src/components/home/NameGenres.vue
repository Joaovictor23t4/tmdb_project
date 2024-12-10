<script setup>
import { useMoviesStore, useProgramTvStore } from '@/stores';

const moviesStore = useMoviesStore();
const programsTvStore = useProgramTvStore();
const props = defineProps({
    genre_ids: {
        type: Array,
        required: true
    },
    typeEntertainment: {
        type: String,
        required: true
    }
});
</script>

<template>
    <div class="container-genres-poster">
        <h3>Genres:</h3>
        <div v-if="props.typeEntertainment == 'movies'" class="container-name-genres">
            <span v-for="(genre, index) in props.genre_ids" :key="index">{{ (props.genre_ids.length - 1 > index ) ? `${moviesStore.searchGenreName(genre)}, ` : moviesStore.searchGenreName(genre) }}</span>
        </div>
        <div v-else class="container-name-genres">
            <span v-for="(genre, index) in props.genre_ids" :key="index">{{ (props.genre_ids.length - 1 > index ) ? `${programsTvStore.searchGenreName(genre)}, ` : programsTvStore.searchGenreName(genre) }}</span>
        </div>
    </div>
</template>

<style scoped>
.container-genres-poster {
    display: flex;
}

.container-genres-poster > h3 {
    color: #FDFDFD;
    font-family: 'Arial', sans-serif;
    text-shadow: 1px 1px 1px #000;
}

.container-name-genres {
    position: relative;
    right: 6px;
    margin-top: 4px;
    margin-left: 10px;
}

.container-name-genres > span {
    margin: 0 2px;
    text-shadow: 1px 1px 1px #000;
    color: #FDFDFD;
    font-family: 'Arial', sans-serif;
    font-weight: bolder;
}
</style>