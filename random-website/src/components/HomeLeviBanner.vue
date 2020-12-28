<template>
    <v-container fluid class="home-banner">
        <v-layout justify-center align-center column pa-5>
            <div
                class="text-h1 font-weight-black blue--text text-decoration-underline text-center"
            >
                LEVI'S
            </div>
            <div
                class="text-h1 font-weight-bold blue--text text-decoration-underline text-center"
            >
                TEST WEBSITE
            </div>
            <div
                class="text-subtitle-1 font-weight-black blue--text text-center"
            >
                A website built from scratch using Vue/Vuex/Routers
            </div>
            <v-btn>
                <v-icon large color="black">mdi-arrow-down</v-icon>
            </v-btn>
        </v-layout>
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
</style>