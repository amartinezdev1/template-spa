<template>
    <section class="services">
        <v-col class="position-relative text-center" cols="12">
            <p class="text-h5 font-weight-medium">Who we offer</p>
            <span class="bg-text bg-text-center" :class="classText">Services</span>
            <p class="text-h3 font-weight-medium">Quality Hair Treatments</p>
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
    padding: 120px 16px 0 16px;

    p {
        font-family: "Montserrat", sans-serif;
    }
}
</style>
