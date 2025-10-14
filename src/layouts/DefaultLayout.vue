<template>
    <v-app>
        <HeaderLayout />
        <v-main>
            <slot></slot>
        </v-main>
    </v-app>
</template>

<script setup>
import HeaderLayout from './HeaderLayout.vue';
</script>
