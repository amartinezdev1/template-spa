<template>
    <footer class="footer">
        <section class="footer-container d-flex flex-wrap justify-space-between">
            <v-col class="pa-4 d-flex flex-column ga-4" cols="12" md="3" sm="6">
                <p class="mb-4 text-h5 font-weight-medium">About</p>
                <li class="footer-link text-body-1">Success Story</li>
                <li class="footer-link text-body-1">Latest Services</li>
                <li class="footer-link text-body-1">Team Members</li>
                <li class="footer-link text-body-1">Popular News</li>
                <li class="footer-link text-body-1">Awards Winning</li>
                <li class="footer-link text-body-1">About Company</li>
            </v-col>
            <v-col class="pa-4 d-flex flex-column ga-4" cols="12" md="3" sm="6">
                <p class="mb-4 text-h5 font-weight-medium">Services</p>
                <li class="footer-link text-body-1">Beauty Salon</li>
                <li class="footer-link text-body-1">Hair Treatments</li>
                <li class="footer-link text-body-1">Autumn vibes</li>
                <li class="footer-link text-body-1">Makeup</li>
                <li class="footer-link text-body-1">Body Treatments</li>
                <li class="footer-link text-body-1">Spa & Foot Massage</li>
            </v-col>
            <v-col class="pa-4" cols="12" md="3" sm="6">
                <p class="mb-4 text-h5 font-weight-medium">Contact</p>
                <v-alert icon="mdi-map-marker" title="Location" text="523 Main Street, New York" variant="text"></v-alert>
                <v-alert icon="mdi-phone" title="Hotline" text="Call : +012 (345) 6789" variant="text"></v-alert>
                <v-alert icon="mdi-chat-outline" title="Email" text="info@example.com" variant="text"></v-alert>
            </v-col>
            <v-col class="pa-4" cols="12" md="3" sm="6">
                <p class="mb-8 text-h5 font-weight-medium">Newsletter</p>
                <v-text-field
                    :loading="loading"
                    append-inner-icon="mdi-send-variant"
                    label="Enter email"
                    variant="outlined"
                    hide-details
                    single-line
                    @click:append-inner="alert('Subscribed!')"
                ></v-text-field>
                <div class="pt-8 d-flex flex-wrap ga-4">
                    <v-btn icon="mdi-facebook" variant="outlined"></v-btn>
                    <v-btn icon="mdi-twitter" variant="outlined"></v-btn>
                    <v-btn icon="mdi-instagram" variant="outlined"></v-btn>
                    <v-btn icon="mdi-linkedin" variant="outlined"></v-btn>
                </div>
            </v-col>
        </section>
    </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    margin: 0 auto;
    padding: 120px 16px;
    color: white;
    background-color: rgba(0, 0, 0, 0.85);

    .footer-container {
        max-width: 1400px;
        margin: 0 auto;

        .footer-link {
            list-style: outside;
            list-style-position: inside;
            color: #696969;
            color: #696969;
            cursor: pointer;

            &:hover {
                color: white;
                text-decoration: underline;
            }
        }
    }
}
</style>
