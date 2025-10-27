<template>
    <v-app>
        <component :is="route.name !== '/' ? PageHeader : Header" />
        <v-main>
            <slot></slot>
        </v-main>
        <Footer />
    </v-app>
</template>

<script setup>
import { useRoute } from 'vue-router';
import Header from './Header.vue'
import Footer from './Footer.vue';
import PageHeader from './PageHeader.vue';

const route = useRoute();
</script>
