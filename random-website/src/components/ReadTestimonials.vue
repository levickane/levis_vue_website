<template>
    <v-container>
        <v-layout class="background">
            <v-col>
                <div class="text-h3 font-weight-bold">
                    Read the Testimonials!
                </div>
                <div class="text-subtitle-1">Seriously. Read Them</div>
                <v-btn
                    class="my-10 button font-weight-black"
                    justify-left
                    dark
                    to="/testimonials"
                >
                    <v-icon large color="green">Testimonials</v-icon>
                </v-btn>
            </v-col>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'ReadTestimonials',
};
</script>

<style scoped>
.background {
    background-color: coral;
    border-radius: 10px;
}
</style>