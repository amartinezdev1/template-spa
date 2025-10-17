<template>
    <section class="products">
        <v-col class="position-relative text-center" cols="12">
            <p class="text-h5 font-weight-medium">Popular Products</p>
            <span class="bg-text bg-text-center" :class="classText">Products</span>
            <p class="text-h3 font-weight-medium">Visit Our Shop to collect beauty<br>products</p>
        </v-col>
        <v-col class="mt-8" cols="12 d-flex flex-wrap">
            <v-col cols="12" md="3" sm="6" v-for="product in products" :key="product.id">
                <v-img
                    :src="product.image"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.75)"
                    width="100%"
                    height="400px"
                    cover
                ></v-img>
                <v-col class="text-center" cols="12">
                    <p class="text-h5 font-weight-medium">{{ product.title }}</p>
                    <p class="text-h6 font-weight-medium">Price {{ product.price }}</p>
                </v-col>
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

const products = [
    {
        id: 1,
        image: 'https://html.webtend.net/lezar/assets/images/products/product-1.jpg',
        title: 'Face Cream Winter',
        'bg-text': 'Cream',
        price: '$ 253.90'
    },
    {
        id: 2,
        image: 'https://html.webtend.net/lezar/assets/images/products/product-2.jpg',
        title: 'Face Cream Winter',
        'bg-text': 'Cream',
        price: '$ 253.90'
    },
    {
        id: 3,
        image: 'https://html.webtend.net/lezar/assets/images/products/product-3.jpg',
        title: 'Face Cream Winter',
        'bg-text': 'Cream',
        price: '$ 253.90',
    },
    {
        id: 4,
        image: 'https://html.webtend.net/lezar/assets/images/products/product-4.jpg',
        title: 'Face Cream Winter',
        'bg-text': 'Cream',
        price: '$ 253.90',
    }
]
</script>

<style lang="scss" scoped>
.products {
    max-width: 1440px;
    padding: 120px 16px;
    margin: 0 auto;

    p {
        font-family: "Montserrat", sans-serif;
    }
}
</style>
