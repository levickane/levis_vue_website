<template>
    <v-container fluid style="background-color: black">
        <v-layout justify-left align-left column pa-5 my-10 row wrap>
            <div
                class="text-h1 font-weight-black blue--text text-decoration-underline text-left"
            >
                LEVI'S
            </div>
            <div
                class="text-h2 text-lg-h1 text-xl-h1 font-weight-bold blue--text text-decoration-underline text-left"
            >
                TEST WEBSITE
            </div>
            <div
                class="text-subtitle-1 font-weight-black blue--text text-left mt-10"
            >
                A website built from scratch using Vue/Vuex/Routers
            </div>
        </v-layout>
        <v-btn
            class="font-weight-black"
            justify-left
            dark
            to="/testimonials"
            color="green"
        >
            Testimonials
        </v-btn>
    </v-container>
</template>

<script>
export default {
    name: 'HomeLeviBanner',
};
</script>

<style scoped>
</style>