<template>
    <section class="schedule d-flex flex-wrap">
        <v-col cols="12" md="6" sm="12" style="padding: 0 !important;">
            <v-img
                height="90vh"
                src="https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2370"
                cover
            ></v-img>
        </v-col>
        <v-col class="schedule-text" cols="12" md="5" sm="12">
            <v-col class="position-relative">
                <p class="text-h5 font-weight-medium">Hair Salon</p>
                <span class="bg-text bg-text-left" :class="classText">Menus</span>
                <p class="text-h3 font-weight-medium">Working Hours</p>
                <p class="font-main mt-6">Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium totam aperiame eaque quae abillo inventore veritatis</p>

                <v-col cols="12" class="pa-0 mt-10 d-flex flex-wrap ga-8">
                    <v-col cols="12" class="pa-0 d-flex flex-wrap justify-space-between ga-2">
                        <p class="font-main font-weight-medium">Mon to Friday</p>
                        <p class="font-main font-weight-medium">:</p>
                        <p class="font-main font-weight-medium">9:00 am - 8:00 pm</p>
                        <v-divider :thickness="1"></v-divider>
                    </v-col>
                    <v-col cols="12" class="pa-0 d-flex flex-wrap justify-space-between">
                        <p class="font-main font-weight-medium">Saturday</p>
                        <p class="font-main font-weight-medium">:</p>
                        <p class="font-main font-weight-medium">9:00 am - 8:00 pm</p>
                        <v-divider :thickness="1"></v-divider>
                    </v-col>
                    <v-col cols="12" class="pa-0 d-flex flex-wrap justify-space-between">
                        <p class="font-main font-weight-medium">Sunday</p>
                        <p class="font-main font-weight-medium">:</p>
                        <p class="font-main font-weight-medium">9:00 am - 8:00 pm</p>
                        <v-divider :thickness="1"></v-divider>
                    </v-col>
                </v-col>

                <v-btn class="mt-12 btn-book" append-icon="mdi-arrow-right-thin" size="x-large">Booking now</v-btn>
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
</script>

<style lang="scss" scoped>
.schedule {
    background-color: rgb(247, 247, 247);

    .schedule-text {
        height: 100%;
        margin: auto;
        padding: 100px 16px;

        p {
            font-family: "Montserrat", sans-serif;
        }

        .font-main {
            font-family: "Open Sans", sans-serif;
            font-size: 18px;
            line-height: 2rem;
        }

        .btn-book {
            font-family: "Open Sans", sans-serif;
            font-size: 18px;
            font-weight: 600;
            border-radius: 0;
        }
    }
}
</style>
