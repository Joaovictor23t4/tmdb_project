<script setup>
</script>

<template>
    <header>
        <nav>
            <div class="container-title">
                <h1>STREAMIT</h1>
            </div>

            <div class="central-links">
                <ul>
                    <li>HOME</li>
                    <li>MOVIES</li>
                    <li>TV SHOWS</li>
                </ul>
            </div>
            <div class="container-search-profile">
                <img src="@/assets/icons/loupe.png" alt="">
                <button class="button-profile">
                    <img src="@/assets/icons/user.png" alt="">
                </button>
            </div>
        </nav>
    </header>
</template>

<style scoped>
header {
    background-color: #000;
    opacity: .2;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.container-title > h1 {
    color: #000;
}

ul {
    display: flex;
    column-gap: 15px;
}

.button-profile {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    padding: 10px;
}
</style>