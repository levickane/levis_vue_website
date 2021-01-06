<template>
    <v-container fluid>
        <v-layout justify-left align-left column py-16 class="my-16">
            <div class="text-h1 font-weight-black black--text text-left my-16">
                Your Profile
            </div>
        </v-layout>
        <v-layout row wrap>
            <v-col cols="12" sm="3" class="mb-10 ml-5"
                ><v-divider></v-divider
                ><a
                    href="../../public/files/LEVI_KANE_DEV_COVER_LETTER .pdf"
                    download
                    ><v-img
                        height="100"
                        width="200"
                        :src="`${pictures.picture2}`"
                    ></v-img
                    ><br /><span
                        class="font-weight-bold"
                        style="font-size: 1.5em"
                        >Pitch Deck</span
                    ><v-icon large>mdi-arrow-collapse-down</v-icon></a
                ></v-col
            >
            <v-col cols="12" sm="3" class="mb-10 ml-5"
                ><v-divider></v-divider
                ><v-img
                    height="100"
                    width="200"
                    :src="`${pictures.picture1}`"
                ></v-img
                ><br /><span class="font-weight-bold" style="font-size: 1.5em"
                    >Capital Raise Plan</span
                ><v-icon large>mdi-arrow-collapse-down</v-icon></v-col
            >
        </v-layout>
        <have-questions></have-questions>
    </v-container>
</template>

<script>
import HaveQuestions from '../components/HaveQuestions.vue';
export default {
    components: { HaveQuestions },
    name: 'ClientHome',
    data() {
        return {
            pictures: {
                picture1:
                    'https://toppng.com/uploads/preview/rolls-and-stacks-of-money-stacks-of-money-11562998046h21kuiihqr.png',
                picture2:
                    'https://toppng.com/uploads/preview/computer-icon-vector-png-desktop-computer-11563207085f1wwos2r52.png',
            },
        };
    },
};
</script>

<style scoped>
</style>