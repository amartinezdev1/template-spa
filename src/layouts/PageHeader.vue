<template>
    <header :class="{ scrolled: isScrolled }">
        <nav class="d-flex py-6 px-4 justify-space-between align-center">
            <div>
              <v-img
                class="logo"
                :width="125"
                cover
                src="https://html.webtend.net/lezar/assets/images/logos/color-logo.png"
              ></v-img>
            </div>

            <ul class="d-flex ga-10" v-if="display.width.value >= 1024">
              <li><a href="/">Home</a></li>
              <li><a href="about">About</a></li>
              <li><a href="booking">Portfolio</a></li>
              <li><a href="services">Services</a></li>
              <li><a href="#">Blog</a></li>
            </ul>

            <div class="d-flex ga-6" v-if="display.width.value > 768">
              <v-icon class="icon-action" color="black" icon="mdi-translate" size="large"></v-icon>
              <v-icon class="icon-action" color="black" icon="mdi-calendar-month-outline" size="large"></v-icon>
              <v-icon class="icon-action" color="black" icon="mdi-magnify" size="large"></v-icon>
            </div>

            <div v-else>
              <v-icon class="icon-action" color="white" icon="mdi-menu" size="large"></v-icon>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useDisplay } from 'vuetify'

const display = useDisplay()
const isScrolled = ref(false)

const handleScroll = () => {
    isScrolled.value = window.scrollY > window.innerHeight
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style lang="scss" scoped>
header {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    background-color: white;
    transition: background-color 0.3s ease;

    nav {
        max-width: 1400px;
        margin: 0 auto;

        li {
            list-style: none;

            a{
                text-decoration: none;
                list-style: none;
                color: black;
                font-size: 18px;
                text-transform: uppercase;
                font-family: "Montserrat", sans-serif;
                font-weight: 500;
            }
        }

        .logo, .icon-action {
            cursor: pointer;
        }
    }
}

header.scrolled {
  background-color: white;
  backdrop-filter: blur(6px);
}
</style>
