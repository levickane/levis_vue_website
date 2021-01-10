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
                    style="text-decoration: none; color: black"
                    href="LEVI_KANE_DEV_COVER_LETTER.pdf"
                    target="_blank"
                    download
                    ><v-img
                        height="100"
                        width="200"
                        :src="`${pictures.picture2}`"
                    ></v-img
                    ><br /><span
                        class="font-weight-bold"
                        style="font-size: 1.5em"
                        >Levi's Cover Letter</span
                    ><v-icon large>mdi-arrow-collapse-down</v-icon></a
                ></v-col
            >
            <v-col cols="12" sm="3" class="mb-10 ml-5"
                ><v-divider></v-divider
                ><a
                    style="text-decoration: none; color: black"
                    href="LEVI_KANE_DEV_RESUME.pdf"
                    download
                >
                    <v-img
                        height="100"
                        width="200"
                        :src="`${pictures.picture1}`"
                    ></v-img
                    ><br /><span
                        class="font-weight-bold"
                        style="font-size: 1.5em"
                        >Levi's Resume</span
                    ><v-icon large>mdi-arrow-collapse-down</v-icon></a
                ></v-col
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
                    'https://images.squarespace-cdn.com/content/v1/5e7e1657b7fbbc04365b0e3e/1585750174266-UET5OOQHNEKP3DF0J4KT/ke17ZwdGBToddI8pDm48kHceFWXZ3GxxjMg-cSd1ZwgUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc0V-u8h3USQFsKiw8AT3Zcwk_AqyZn8ddWJf_7EaT4-kMmwMqu46asTcbuI6O7Ivb/cash+pile.png',
                picture2:
                    'https://images.vexels.com/media/users/3/157318/isolated/preview/2782b0b66efa5815b12c9c637322aff3-desktop-computer-icon-computer-by-vexels.png',
            },
        };
    },
};
</script>

<style scoped>
</style>