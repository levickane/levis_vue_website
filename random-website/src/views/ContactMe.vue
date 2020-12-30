<template>
    <v-container fluid>
        <v-layout justify-left align-left column py-16 class="my-16">
            <div
                class="text-h1 font-weight-black black--text text-decoration-underline text-left"
            >
                Contact Me
            </div>
            <div
                class="text-subtitle-1 font-weight-black black--text text-left"
            >
                A contact page built from scratch using Vue/Vuex/Routers
            </div>
        </v-layout>
        <hr />
        <v-layout row wrap>
            <v-col class="text-h3 font-weight-bold">Contact Me!</v-col>
            <v-col></v-col>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'ContactMe',
};
</script>

<style scoped>
</style>