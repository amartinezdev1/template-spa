<template>
    <section class="treatments">
        <div class="d-flex flex-wrap">
            <v-col v-for="card in treatmentsCards" :key="card.id" :cols="card.cols" :md="card.md" :sm="card.sm">
                <v-img
                    :src="card.img"
                    class="align-center"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.75)"
                    :width="card.width"
                    :height="card.height"
                    cover
                >
                    <v-col class="card-treatments text-white" :class="card.id < 3 ? 'card-treatments-small' : 'card-treatments-medium'" cols="12">
                        <p class="font-title">{{ card.title }}</p>
                        <p class="font-body">{{ card.description }}</p>
                        <v-btn class="btn-book" append-icon="mdi-arrow-right-thin" variant="outlined" size="large">Read More</v-btn>
                    </v-col>
                </v-img>
            </v-col>
        </div>
        <div>
            <v-col cols="12">
                <v-img
                    src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169"
                    class="align-center"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.75)"
                    width="100%"
                    height="55vh"
                    cover
                >
                    <v-col class="position-relative text-center" cols="12">
                        <p class="bg-text-white bg-text-center" :class="classText">Watch Videos</p>
                    </v-col>
                </v-img>
            </v-col>
        </div>
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
    return 'bg-text-laptop'
})

const treatmentsCards = [
    {
        id: 1,
        cols: 12,
        md: 3,
        sm: 6,
        width: 400,
        height: 500,
        img: 'https://html.webtend.net/lezar/assets/images/projects/project-two1.jpg',
        'bg-text': 'Hair',
        title: 'Hair Style Mix',
        description: 'Beauty Salon'
    },
    {
        id: 2,
        cols: 12,
        md: 3,
        sm: 6,
        width: 400,
        height: 500,
        img: 'https://html.webtend.net/lezar/assets/images/projects/project-two2.jpg',
        'bg-text': 'Color',
        title: 'Hair Style Mix',
        description: 'Beauty Salon'
    },
    {
        id: 3,
        cols: 12,
        md: 6,
        sm: 12,
        width: '100%',
        height: 500,
        img: 'https://html.webtend.net/lezar/assets/images/projects/project-two3.jpg',
        'bg-text': 'Wash',
        title: 'Hair Style Mix',
        description: 'Beauty Salon'
    },
]
</script>

<style lang="scss" scoped>
.treatments {
    max-width: 90%;
    padding: 0 0 120px 0;
    margin: 0 auto;

    .card-treatments {
        border: 1px solid rgba(255, 255, 255, 0.3);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .card-treatments-small {
        width: 90%;
        height: 450px;
        margin: auto;
        text-align: center;
        align-items: center;

        .font-title {
            font-family: "Dancing Script", cursive;
            font-size: 3rem;
        }

        .font-body {
            font-family: "Open Sans", sans-serif;
            font-size: 1.5rem;
            font-weight: 500;
            margin-bottom: 1rem;
        }
    }

    .card-treatments-medium {
        max-width: 90%;
        height: 450px;
        margin: auto;
        align-items: start;

        .font-title {
            font-family: "Dancing Script", cursive;
            font-size: 3rem;
        }

        .font-body {
            font-family: "Open Sans", sans-serif;
            font-size: 1.5rem;
            font-weight: 500;
            margin-bottom: 1rem;
        }
    }

    .btn-book {
        font-family: "Open Sans", sans-serif;
        font-size: 16px;
        font-weight: 600;
        border-radius: 0;
    }
}
</style>
