<template>
    <section class="testimonials d-flex flex-wrap">
        <v-col class="pa-0" cols="12" md="6" sm="12">
            <v-carousel :transition-duration="700" height="90vh" crossfade hide-delimiter-background>
                <v-carousel-item v-for="(item, i) in items" :key="i">
                    <v-sheet
                        color="#F7F7F7"
                        height="100%"
                        tile
                        class="px-6"
                        position="relative"
                    >
                        <div
                            class="d-flex flex-column fill-height justify-center"
                            style="max-width: 90%; margin: 0 auto;"
                        >
                            <span class="bg-text-relative bg-text-center" :class="classText">Feedback</span>
                            <p class="text-testimonials text-center" :class="display.width.value < 768 ? 'text-h6' : 'text-h4'">Aaperiam eaque ipsa quae abillo inventore veritatis et arcitect beatae vitae Sedut persiciatis unde omnis iste natus error sit voluptateme accusantium dolore laudantium totam rem</p>
                        </div>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </v-col>
        <v-col class="pa-0" cols="12" md="6" sm="12">
            <v-img
                height="90vh"
                src="https://images.unsplash.com/photo-1546877625-cb8c71916608?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                cover
            ></v-img>
        </v-col>
    </section>
</template>

<script setup>
import { computed } from 'vue';
import { useDisplay } from 'vuetify';

const display = useDisplay();
const classText = computed(() => {
    const width = display.width.value
    if (width <= 375) return 'bg-text-tablet'
    if (width <= 1024) return 'bg-text-tablet'
    if (width <= 1440) return 'bg-text-laptop'
    return 'bg-text-laptop'
})

const items = [
    'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
    'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
]
</script>

<style lang="scss" scoped>
.testimonials {
    padding: 0;

    .text-testimonials {
        font-family: "Open Sans", sans-serif;
        font-weight: 400;
        line-height: 2.5rem;
    }
}
</style>
