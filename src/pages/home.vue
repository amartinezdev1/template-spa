<template>
    <main>
        <v-img
            max-height="100vh"
            src="https://images.unsplash.com/photo-1546877625-cb8c71916608?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            cover
        ></v-img>
    </main>
    <about />
    <schedule />
    <services />
    <treatments />
    <contact />

    <section class="products">
        <v-col cols="12">
            <p>Popular product</p>
            <p>Visit Our Shop to collect beauty products</p>
            <p>Products</p>
        </v-col>
        <v-col cols="12 d-flex">
            <v-col cols="3">
                <div>
                    <div>
                        <v-img
                            max-width="300px"
                            max-height="300px"
                            src="https://images.unsplash.com/photo-1546877625-cb8c71916608?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            cover
                        ></v-img>
                    </div>
                    <div>
                        <p>Color</p>
                    </div>
                    <div>
                        <p>Hair color</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, recusandae.</p>
                    </div>
                </div>
            </v-col>
            <v-col cols="3">
                <div>
                    <div>
                        <v-img
                            max-width="300px"
                            max-height="300px"
                            src="https://images.unsplash.com/photo-1546877625-cb8c71916608?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            cover
                        ></v-img>
                    </div>
                    <div>
                        <p>Color</p>
                    </div>
                    <div>
                        <p>Hair color</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, recusandae.</p>
                    </div>
                </div>
            </v-col>
            <v-col cols="3">
                <div>
                    <div>
                        <v-img
                            max-width="300px"
                            max-height="300px"
                            src="https://images.unsplash.com/photo-1546877625-cb8c71916608?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            cover
                        ></v-img>
                    </div>
                    <div>
                        <p>Color</p>
                    </div>
                    <div>
                        <p>Hair color</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, recusandae.</p>
                    </div>
                </div>
            </v-col>
            <v-col cols="3">
                <div>
                    <div>
                        <v-img
                            max-width="300px"
                            max-height="300px"
                            src="https://images.unsplash.com/photo-1546877625-cb8c71916608?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            cover
                        ></v-img>
                    </div>
                    <div>
                        <p>Color</p>
                    </div>
                    <div>
                        <p>Hair color</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, recusandae.</p>
                    </div>
                </div>
            </v-col>
        </v-col>
    </section>

    <section class="testimonials d-flex">
        <v-col cols="6">
            <v-img
                src="https://images.unsplash.com/photo-1546877625-cb8c71916608?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                cover
            ></v-img>
        </v-col>
        <v-col cols="6">
            <v-container>
                <v-carousel :transition-duration="700" crossfade>
                    <v-carousel-item v-for="(src, i) in items" :key="i" :src="src" cover></v-carousel-item>
                </v-carousel>
            </v-container>
        </v-col>
    </section>

    <section class="blog">
        <v-col cols="12">
            <p>News & Blog</p>
            <p>Latest News $ Blog</p>
            <p>Blog</p>
        </v-col>
        <v-col cols="12" class="d-flex" >
            <v-card class="mx-auto" max-width="344">
                <v-img
                    height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    cover
                ></v-img>

                <v-card-title>Top western road trips</v-card-title>
                <v-card-subtitle>1,000 miles of wonder</v-card-subtitle>

                <v-card-actions>
                    <v-btn color="orange-lighten-2" text="Explore"></v-btn>
                    <v-spacer></v-spacer>
                    <!-- <v-btn
                        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                        @click="show = !show"
                    ></v-btn> -->
                </v-card-actions>
            </v-card>
            <v-card class="mx-auto" max-width="344">
                <v-img
                    height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    cover
                ></v-img>

                <v-card-title>Top western road trips</v-card-title>
                <v-card-subtitle>1,000 miles of wonder</v-card-subtitle>

                <v-card-actions>
                    <v-btn color="orange-lighten-2" text="Explore"></v-btn>
                    <v-spacer></v-spacer>
                    <!-- <v-btn
                        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                        @click="show = !show"
                    ></v-btn> -->
                </v-card-actions>
            </v-card>
            <v-card class="mx-auto" max-width="344">
                <v-img
                    height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    cover
                ></v-img>

                <v-card-title>Top western road trips</v-card-title>
                <v-card-subtitle>1,000 miles of wonder</v-card-subtitle>

                <v-card-actions>
                    <v-btn color="orange-lighten-2" text="Explore"></v-btn>
                    <v-spacer></v-spacer>
                    <!-- <v-btn
                        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                        @click="show = !show"
                    ></v-btn> -->
                </v-card-actions>
            </v-card>
        </v-col>
    </section>
</template>

<script setup>
import about from '@/components/about/about.vue';
import schedule from '@/components/schedule/schedule.vue';
import services from '@/components/offers/services.vue';
import treatments from '@/components/treatments/treatments.vue';
import contact from '@/components/contact/contact.vue';

const items = [
    'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
    'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
]
</script>

<style lang="scss" scoped>
main {
    position: relative;
    z-index: 1;

    .gallery, .products, .blog {
        max-width: 1400px;
        padding: 80px 16px 0 16px;
        margin: 0 auto;
    }
}
</style>
