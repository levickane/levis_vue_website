<template>
    <v-container fluid>
        <v-layout justify-left align-left column py-16 class="my-16 px-3">
            <div class="text-h1 font-weight-black black--text text-left">
                Contact Me
            </div>
            <div
                class="text-subtitle-1 font-weight-black black--text text-left mt-10"
            >
                <router-link
                    to="/clientjoin"
                    style="text-decoration: none; color: white; background-color: black"
                    class="pa-2"
                    >Join</router-link
                >
                or
                <router-link
                    to="clientlogin"
                    style="text-decoration: none; color: white; background-color: black"
                    class="pa-2"
                    >Login</router-link
                >
                for a downloadable PDF version of my Resumé and my
                <em>direct</em>
                contact information
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
