<template>
    <v-container fluid>
        <v-layout justify-left align-left column py-16 class="my-16">
            <div class="text-h1 font-weight-black black--text my-16 text-left">
                Privacy Policy
            </div>
        </v-layout>
        <read-testimonials></read-testimonials>
    </v-container>
</template>

<script>
import ReadTestimonials from '../components/ReadTestimonials.vue';
export default {
    components: { ReadTestimonials },
    name: 'Privacy'
};
</script>

<style scoped></style>
