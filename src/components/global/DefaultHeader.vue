<script setup>
import router from '@/router';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
    <header>
        <nav>
            <div class="container-title">
                <h1>STREAMIT</h1>
            </div>

            <div class="central-links">
                <ul>
                    <li>
                        <RouterLink to="/" :class="{ on: route.path == '/' }">HOME</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/movies" :class="{ on: route.path == '/movies' }">MOVIES</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/programs" :class="{ on: route.path == '/programs' }">TV PROGRAMS</RouterLink>
                    </li>
                </ul>
            </div>
            <div class="container-search-profile">
                <img src="@/assets/icons/loupe.png" alt="">
                <button class="button-profile">
                    <img class="profile-icon" src="@/assets/icons/user.png" alt="">
                </button>
            </div>
        </nav>
    </header>
</template>

<style scoped>
header {
    background-color: #000;
    padding: 20px;
}

nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.container-title > h1 {
    font-family: 'Oswald';
    color: white;
}

ul {
    display: flex;
    column-gap: 25px;
    list-style: none;
}

li {
    font-size: 1.2rem;
    font-family: 'Oswald';
    transition: .2s;
    cursor: pointer;
}

li > a {
    color: #FDFDFD;
    text-decoration: none;
    transition: .2s;
}

li > a:hover {
    color: red;
}

.on {
    color: red;
}

.container-search-profile {
    display: flex;
    align-items: center;
    column-gap: 30px;
}

.container-search-profile > img {
    width: 25px;
    height: 25px;
    object-fit: contain;
}

.button-profile {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 35px;
    padding: 20px;
    top: 3px;
    background-color: red;
    border: none;
    border-radius: 50%; 
};
</style>