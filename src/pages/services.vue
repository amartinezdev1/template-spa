<template>
    <hero :content="servicesContent"/>
</template>

<script setup>
import hero from '@/components/sections/hero.vue';

const servicesContent = {
    title: 'Our Services',
    titleBg: 'Services',
    imageBg: 'https://html.webtend.net/lezar/assets/images/banners/page-banner-five.jpg',
    breadcrumbs: [
        {
            title: 'Home',
            disabled: false,
            href: '/',
        },
        {
            title: 'Services',
            disabled: false,
            href: '#',
        },
    ]
}
</script>

<style lang="scss" scoped>
</style>
