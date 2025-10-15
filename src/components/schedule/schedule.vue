<template>
    <section class="schedule d-flex">
        <v-col cols="6" style="padding: 0 !important;">
            <v-img
                height="90vh"
                src="https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2370"
                cover
            ></v-img>
        </v-col>
        <v-col class="schedule-text" cols="6">
            <p>Hair Salon</p>
            <p>Working Hours</p>
            <p>Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium totam aperiame eaque quae abillo inventore veritatis</p>
            <div class="d-flex justify-space-between">
                <p>Monday to Friday</p>
                <p>:</p>
                <p>7:30 am - 1:00 am</p>
            </div>
            <v-btn append-icon="$vuetify" variant="text">Button</v-btn>
        </v-col>
    </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.schedule {
    background-color: rgb(247, 247, 247);
}
</style>
