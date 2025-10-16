<template>
    <section class="about d-flex flex-wrap align-center">
        <v-col class="px-4 position-relative" cols="12" md="6">
            <p class="text-h5 font-weight-medium">Who we are</p>
            <span class="bg-text bg-text-left" :class="classText">About</span>
            <p class="text-h3 font-weight-medium">We’re Best Quality Hair Treatment Center</p>
        </v-col>
        <v-col class="px-4" cols="12" md="6">
            <p class="font-main mb-4">Sed ut perspiciatis unde omnis iste natus err voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</p>
            <button class="about-btn">READ MORE</button>
        </v-col>
    </section>
    <aboutCard class="mt-10" style="max-width: 1400px; margin: 0 auto; padding-bottom: 120px;"/>
</template>

<script setup>
import { computed } from 'vue';
import { useDisplay } from 'vuetify';
import aboutCard from './aboutCard.vue';

const display = useDisplay();
const classText = computed(() => {
    const width = display.width.value
    if (width <= 375) return 'bg-text-mobile'
    if (width <= 1024) return 'bg-text-tablet'
    if (width <= 1440) return 'bg-text-laptop'
    return 'bg-text-desktop'
})
</script>

<style lang="scss" scoped>
.about {
    max-width: 1400px;
    margin: 0 auto;
    padding: 120px 16px 0 16px;

    p{
        font-family: "Montserrat", sans-serif;
    }

    .font-main {
        font-family: "Open Sans", sans-serif;
        font-size: 18px;
        line-height: 2rem;
    }

    .about-btn {
        font-family: "Open Sans", sans-serif;
        font-size: 18px;
        font-weight: 600;
        text-decoration: underline;
    }
}
</style>
