<script setup>
import { onMounted } from 'vue';
import { ListEntertainement } from '@/components';
import { useMoviesStore, useProgramTvStore } from '@/stores';

const programsTvStore = useProgramTvStore();

onMounted(async() => {
  await programsTvStore.initializeApp();
})
</script>

<template>
  <ListEntertainement type-enterteinement="tv" :list-content="programsTvStore.programsTv.results" />
</template>

<style scoped>
</style>