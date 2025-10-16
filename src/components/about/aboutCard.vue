<template>
    <section class="d-flex flex-wrap">
        <v-col class="px-4" cols="12" md="4" sm="6" v-for="card in aboutCard" :key="card.id">
            <v-img
                :src="card.img"
                class="align-end pb-4"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.75)"
                width="400px"
                height="500px"
                cover
            >
                <v-col class="position-relative text-center text-white" cols="12">
                    <p class="text-h5 font-weight-medium">{{ card.title }}</p>
                    <span class="bg-text-white bg-text-center bg-text-laptop">{{ card['bg-text'] }}</span>
                    <p class="text-h5 font-weight-medium">{{ card.description }}</p>
                </v-col>
            </v-img>
        </v-col>
    </section>
</template>

<script setup>
const aboutCard = [
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1701885183616-cf00e2db1a3b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287',
        'bg-text': 'Hair',
        title: 'Hair Colors',
        description: 'Quis autem vel eum sure repreh enderit wun'
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=926',
        'bg-text': 'Color',
        title: 'Hair Washing',
        description: 'Quis autem vel eum sure repreh enderit wun'
    },
    {
        id: 3,
        img: 'https://images.unsplash.com/photo-1571454870646-86bf1e5b25ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287',
        'bg-text': 'Wash',
        title: 'Hair Cutting',
        description: 'Quis autem vel eum sure repreh enderit wun'
    },
]
</script>

<style lang="scss" scoped></style>
