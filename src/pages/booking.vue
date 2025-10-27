<template>
    <hero :content="bookingContent"/>
</template>

<script setup>
import hero from '@/components/sections/hero.vue';

const bookingContent = {
    title: 'Make Appointment',
    titleBg: 'Booking',
    imageBg: 'https://html.webtend.net/lezar/assets/images/banners/page-banner-three.jpg',
    breadcrumbs: [
        {
            title: 'Home',
            disabled: false,
            href: '/',
        },
        {
            title: 'Booking',
            disabled: false,
            href: '#',
        },
    ]
}
</script>

<style lang="scss" scoped>
</style>
