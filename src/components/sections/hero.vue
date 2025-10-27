<template>
    <main>
        <v-img
                :src="props.content.imageBg"
                class="align-center"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.75)"
                height="50vh"
                cover
            >
                <div class="about-content">
                    <v-col class="position-relative text-white" cols="12">
                        <p class="text-h2 font-weight-medium">{{ props.content.title }}</p>
                        <span class="bg-text-white bg-text-left" :class="classText">{{ props.content.titleBg }}</span>
                    </v-col>
                    <v-col class="position-relative text-white" cols="12">
                        <v-breadcrumbs
                            class="text-h5 pa-0 mt-4"
                            :items="items"
                            divider="•"
                        ></v-breadcrumbs>
                    </v-col>
                </div>
            </v-img>
    </main>
</template>

<script setup>
import { computed } from 'vue';
import { useDisplay } from 'vuetify';

const display = useDisplay();
const classText = computed(() => {
    const width = display.width.value
    if (width <= 375) return 'bg-text-tablet'
    if (width <= 1024) return 'bg-text-tablet'
    if (width <= 1440) return 'bg-text-laptop'
    return 'bg-text-desktop'
})

const props = defineProps({
    content: {
        type: Object,
        required: true
    }
})

const items = props.content.breadcrumbs
</script>

<style lang="scss" scoped>
.about-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
}

p{
    font-family: "Montserrat", sans-serif;
}
</style>
