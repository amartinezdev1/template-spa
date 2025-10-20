<template>
    <main>
        <v-img
            height="100vh"
            src="https://images.unsplash.com/photo-1546877625-cb8c71916608?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            cover
        ></v-img>
    </main>
    <about />
    <schedule />
    <services />
    <treatments />
    <contact />
    <products />
    <testimonials />
    <blog />
</template>

<script setup>
import about from '@/components/about/about.vue';
import schedule from '@/components/schedule/schedule.vue';
import services from '@/components/offers/services.vue';
import treatments from '@/components/treatments/treatments.vue';
import contact from '@/components/contact/contact.vue';
import products from '@/components/products/products.vue';
import testimonials from '@/components/testimonials/testimonials.vue';
import blog from '@/components/blog/blog.vue';
</script>

<style lang="scss" scoped>
main {
    position: relative;
    z-index: 1;
}
</style>
