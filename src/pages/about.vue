<template>
    <hero :content="aboutContent"/>
</template>

<script setup>
import hero from '@/components/sections/hero.vue';

const aboutContent = {
    title: 'About Us',
    titleBg: 'About Us',
    imageBg: 'https://html.webtend.net/lezar/assets/images/banners/page-banner.jpg',
    breadcrumbs: [
        {
            title: 'Home',
            disabled: false,
            href: '/',
        },
        {
            title: 'About Us',
            disabled: false,
            href: '#',
        },
    ]
}
</script>

<style lang="scss" scoped>
</style>
