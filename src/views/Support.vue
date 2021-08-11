<template>
    <v-container fluid>
        <v-layout justify-left align-left column py-16 class="my-16">
            <div
                class="text-h1 font-weight-black black--text text-decoration-underline text-left"
            >
                Support!
            </div>
            <div
                class="text-subtitle-1 font-weight-black black--text text-left mt-10"
            >
                A contact page built from scratch using Vue/Vuex/Routers
            </div>
        </v-layout>
        <hr />
        <v-layout justify-center align-center column>
            <div>
                <h1
                    class="font-weight-black black--text mt-10"
                    style="font-size: 3em"
                >
                    Winning 101
                </h1>
            </div>
            <div>
                <p class="subtitle-2">Learn the basics of how to not lose</p>
            </div>
            <my-video style="width:90vw"></my-video>
        </v-layout>
        <hr />

        <v-layout>
            <setup></setup>
        </v-layout>
        <hr />
        <v-layout>
            <expand-menu></expand-menu>
        </v-layout>
        <hr />
        <v-layout>
            <requirements></requirements>
        </v-layout>
    </v-container>
</template>

<script>
import MyVideo from '../components/MyVideo.vue';
import Setup from '../components/Setup.vue';
import ExpandMenu from '../components/ExpandMenu.vue';
import Requirements from '../components/Requirements.vue';
export default {
    components: { MyVideo, Setup, ExpandMenu, Requirements },
    name: 'Support'
};
</script>
<style scoped></style>
