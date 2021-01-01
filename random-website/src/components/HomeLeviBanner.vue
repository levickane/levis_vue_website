<template>
    <v-container fluid class="home-banner">
        <v-layout justify-left align-left column pa-5 my-10>
            <div
                class="text-h1 font-weight-black blue--text text-decoration-underline text-left"
            >
                LEVI'S
            </div>
            <div
                class="text-h1 font-weight-bold blue--text text-decoration-underline text-left"
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
            class="button font-weight-black"
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
.home-banner {
    background: black;
}
.text-shadow {
    text-shadow: 6px, 2px, 2px, black;
}
.button:hover {
    background-color: rgb(138, 187, 136);
}
</style>