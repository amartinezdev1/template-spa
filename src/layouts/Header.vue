<template>
    <header>
        <nav class="d-flex py-6 justify-space-between align-center">
            <div>
                <v-img
                    :width="125"
                    cover
                    src="https://preview.robertbiswas.com/jekyll/lezar/assets/images/logos/logo.png"
                ></v-img>
            </div>
            <ul class="d-flex ga-10">
                <li><a href="/home">Home</a></li>
                <li><a href="/home">Pages</a></li>
                <li><a href="/home">Portfolio</a></li>
                <li><a href="/home">Service</a></li>
                <li><a href="/home">Blog</a></li>
            </ul>
            <div class="d-flex ga-6">
                <v-icon icon="$vuetify" size="large"></v-icon>
                <v-icon icon="$vuetify" size="large"></v-icon>
                <v-icon icon="$vuetify" size="large"></v-icon>
            </div>
        </nav>
    </header>
</template>

<script setup>
</script>

<style lang="scss" scoped>
header {
    background-color: transparent;
    position: fixed;
    width: 100%;
    z-index: 10;

    nav {
        max-width: 1400px;
        margin: 0 auto;
    }
}
</style>
