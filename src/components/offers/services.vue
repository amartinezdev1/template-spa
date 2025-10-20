<template>
    <section class="services">
        <v-col class="position-relative text-center" cols="12">
            <p class="text-h5 font-weight-medium">Who we offer</p>
            <span class="bg-text bg-text-center" :class="classText">Services</span>
            <p class="text-h3 font-weight-medium">Quality Hair Treatments</p>
        </v-col>
        <v-col class="mt-2" cols="12 d-flex flex-wrap">
            <v-col cols="12" md="3" sm="6" v-for="card in cardService" :key="card.id">
                <div class="border px-8 py-10 d-flex flex-column align-center ga-6">
                    <div>
                        <v-img
                            width="125px"
                            height="125px"
                            rounded="circle"
                            :src="card.img"
                            cover
                        ></v-img>
                    </div>
                    <div class="position-relative">
                        <span class="bg-text bg-text-center bg-text-tablet">{{ card['bg-text'] }}</span>
                    </div>
                    <div class="text-center">
                        <p class="text-h5 font-weight-bold">{{ card.title }}</p>
                        <p class="font-main">{{ card.description }}</p>
                    </div>
                </div>
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
</script>

<style lang="scss" scoped>
.services{
    max-width: 1400px;
    margin: 0 auto;
    padding: 120px 16px 100px 16px;

    p {
        font-family: "Montserrat", sans-serif;
    }

    .font-main {
        font-family: "Open Sans", sans-serif;
        font-size: 18px;
        line-height: 2rem;
    }
}
</style>
