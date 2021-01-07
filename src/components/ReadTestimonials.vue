<template>
    <v-container>
        <v-layout row wrap class="background">
            <v-col>
                <div class="text-h3 white--text font-weight-bold">
                    Read the Testimonials!
                </div>
                <div class="text-subtitle-1 white--text mt-5">
                    Seriously. Read Them
                </div>
                <v-btn
                    class="my-10 button font-weight-black"
                    justify-left
                    dark
                    to="/testimonials"
                    color="green"
                >
                    Testimonials
                </v-btn>
            </v-col>
            <v-col cols="12" md="5" lg="5">
                <v-img
                    src="../assets/AthleteTraining.jpeg"
                    height="300"
                    contain
                ></v-img>
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
    background-color: rgb(0, 0, 0);
    border-radius: 10px;
}
</style>