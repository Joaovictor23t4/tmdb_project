<script setup>
import { onMounted } from "vue";
import { useMoviesStore } from "@/stores";
import { BannerTop } from "@/components";

const moviesStore = useMoviesStore();

onMounted(async() => {
  await moviesStore.initializeApp();
})
</script>

<template>
  <BannerTop />
</template>
