<template>
    <section class="blog">
        <v-col class="position-relative text-center" cols="12">
            <p class="text-h5 font-weight-medium">News & Blog</p>
            <span class="bg-text bg-text-center" :class="classText">Blog</span>
            <p class="text-h3 font-weight-medium">Latest news & blog</p>
        </v-col>
        <v-col class="mt-2" cols="12 d-flex flex-wrap">
            <v-col cols="12" md="4" sm="6" v-for="card in cardService" :key="card.id">
                <v-card
                    class="mx-auto border-0 elevation-2 pa-8 d-flex flex-column align-start ga-6"
                    max-width="370"
                >
                    <p class="text-h6 font-weight-bold">{{ card.title }}</p>
                    <v-img
                        class="mx-auto rounded-lg"
                        width="100%"
                        height="210px"
                        :src="card.img"
                        cover
                    ></v-img>

                    <p class="text-description">{{ card.description }}</p>
                    <button class="btn-blog">LEARN MORE</button>
                </v-card>
            </v-col>
        </v-col>
    </section>
</template>

<script setup>
import { computed } from 'vue';
import { useDisplay } from 'vuetify';

const display = useDisplay();
const classText = computed(() => {
    const width = display.width.value
    if (width <= 375) return 'bg-text-mobile'
    if (width <= 1024) return 'bg-text-tablet'
    if (width <= 1440) return 'bg-text-laptop'
    return 'bg-text-desktop'
})

const cardService = [
    {
        id: 1,
        'bg-text': 'Color',
        title: 'Smase Podcast Episode Ferdinande',
        description: 'Quis autem vel eurep ehenderit quin voluptate velit esse',
        img: 'https://images.unsplash.com/photo-1717160675332-1a8d1080ae3d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2370'
    },
    {
        id: 2,
        'bg-text': 'Wash',
        title: 'Meet Touch Design For Mobile Interfaces',
        description: 'Quis autem vel eurep ehenderit quin voluptate velit esse',
        img: 'https://images.unsplash.com/photo-1648313143853-aa913f6ad44a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2723'
    },
    {
        id: 3,
        'bg-text': 'Cut',
        title: 'Guide To Modern CSS Colors With RGB',
        description: 'Quis autem vel eurep ehenderit quin voluptate velit esse',
        img: 'https://images.unsplash.com/photo-1614838280822-4fdea45dc3c3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2370'
    }
]
</script>

<style lang="scss" scoped>
.blog {
    max-width: 1400px;
    padding: 120px 16px;
    margin: 0 auto;

    p{
        font-family: "Montserrat", sans-serif;
    }

    .text-description {
        font-family: "Open Sans", sans-serif;
        font-size: 18px;
        line-height: 2rem;
        color: #6b6b6b;
    }

    .btn-blog {
        text-decoration: underline;
    }
}
</style>
