<template>
    <section class="contact-container">
        <section class="contact d-flex flex-wrap align-center">
            <v-col class="position-relative d-flex flex-column align-start ga-2" cols="12" md="6">
                <p class="text-h5 font-weight-medium">Make appointment</p>
                <span class="bg-text bg-text-left" :class="classText">Book</span>
                <p class="text-h3 font-weight-medium">Get hair Treatment booking seat</p>
                <button class="mt-4 about-btn">READ MORE</button>
            </v-col>
            <v-col class="pa-0 d-flex flex-column flex-wrap" cols="12" md="6">
                <div class="pa-0 d-flex flex-wrap">
                    <v-col cols="12" md="6" sm="6">
                        <v-text-field clearable label="Nombre completo" variant="solo"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" sm="6">
                        <v-text-field clearable type="email" label="Correo electrónico" variant="solo"></v-text-field>
                    </v-col>
                </div>
                <div class="pa-0 d-flex flex-wrap">
                    <v-col cols="12" md="6" sm="6">
                        <v-text-field clearable label="Teléfono" variant="solo"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" sm="6">
                        <v-select
                            label="Servicio"
                            :items="['Corte', 'Lavado', 'Tinte', 'Estilizado']"
                            multiple
                            variant="solo"
                        ></v-select>
                    </v-col>
                </div>
                <div class="px-3">
                    <v-btn class="btn-book" append-icon="mdi-arrow-right-thin" size="x-large">Booking now</v-btn>
                </div>
            </v-col>
        </section>
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
.contact-container {
    width: 100%;
    padding: 120px 16px;
    background-color: #F7F7F7;

    .contact {
        max-width: 1200px;
        margin: auto;

        p{
            font-family: "Montserrat", sans-serif;
        }

        .about-btn {
            font-family: "Open Sans", sans-serif;
            font-size: 18px;
            font-weight: 600;
            text-decoration: underline;
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
