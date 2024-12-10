<script setup>
const props = defineProps({
    vote_average: {
        type: Number,
        required: true
    }
});
</script>

<template>
    <div class="container-stars-poster">
        <span class="star" v-for="(star, index) in Math.round((props.vote_average * 5) / 10)" :key="index">
            <img src="@/assets/icons/star.png" alt="">
        </span>
    </div>
</template>

<style scoped>
.star > img {
    width: 25px;
    height: 25px;
}
</style>