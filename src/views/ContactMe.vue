<template>
    <v-container fluid>
        <v-layout justify-left align-left column py-16 class="my-16">
            <div
                class="text-h1 font-weight-black black--text text-decoration-underline text-left"
            >
                Contact Me
            </div>
            <div
                class="text-subtitle-1 font-weight-black black--text text-left mt-10"
            >
                A contact page built from scratch using Vue/Vuex/Routers
            </div>
        </v-layout>
        <hr />
        <big-contact-form></big-contact-form>
        <read-testimonials></read-testimonials>
    </v-container>
</template>

<script>
import ReadTestimonials from '../components/ReadTestimonials.vue';
import BigContactForm from '../components/BigContactForm.vue';
export default {
    components: { ReadTestimonials, BigContactForm },
    name: 'ContactMe'
};
</script>

<style scoped></style>
