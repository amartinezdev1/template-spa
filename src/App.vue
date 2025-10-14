<template>
  <v-app>
    <DefaultLayout>
        <router-view />
    </DefaultLayout>
  </v-app>
</template>

<script setup>
import DefaultLayout from './layouts/DefaultLayout.vue';
</script>
