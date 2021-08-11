<template>
    <v-container fluid>
        <v-layout justify-left align-left column py-16 class="my-16">
            <div class="text-h1 font-weight-black black--text my-16 text-left">
                Careers
            </div>
            <div
                class="text-subtitle-1 font-weight-black black--text text-left mt-10"
            >
                Just playing around with more stuff here.
            </div>
        </v-layout>
        <hr />
        <v-layout row wrap class="my-5">
            <v-col cols="12" lg="3" xl="3" class="font-weight-black text-h4"
                >My Mission</v-col
            >
            <v-col style="font-size: 1.5em">
                {{ mission }}
            </v-col>
            <v-col cols="12" lg="3" xl="3" class="font-weight-black text-h4"
                >But Seriously</v-col
            >
            <v-col style="font-size: 1.5em">
                If I were to own my own company, this is where I would post and
                (probably) how I would structure any job openings
            </v-col>
        </v-layout>
        <hr />
        <open-positions></open-positions>
    </v-container>
</template>

<script>
import OpenPositions from '../components/OpenPositions.vue';
export default {
    components: { OpenPositions },
    name: 'CareerPage',
    data() {
        return {
            mission:
                'To deliver high quality, dynamic, scalable, testable code, reflecting clients needs, requests and requirements, in a timely fashion, to drive revenue and increase profits.'
        };
    }
};
</script>

<style scoped></style>
