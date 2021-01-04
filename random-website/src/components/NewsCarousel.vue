<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-col cols="12" class="font-weight-black text-h4">News!!</v-col>
        </v-layout>
        <v-layout row wrap>
            <v-col
                cols="12"
                lg="4"
                md="4"
                v-for="(news, index) in NewsLinks"
                :key="index"
            >
                <v-card v-if="index <= 2">
                    <v-img
                        :src="`${news.picture}`"
                        height="200"
                        contain
                    ></v-img>
                    <v-card-subtitle class="pb-0">News </v-card-subtitle>
                    <v-card-title class="pt-0">{{ news.title }}</v-card-title>
                    <v-card-actions class="ml-2"
                        ><a
                            :href="`${news.link}`"
                            style="text-decoration: none; color: black"
                        >
                            Learn More <v-icon>mdi-arrow-right</v-icon></a
                        >
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'NewsCarousel',
    data() {
        return {
            NewsLinks: [
                {
                    title: 'Scrotie McBoogeryballs',
                    link:
                        'https://www.goodreads.com/en/book/show/7915570-the-tale-of-scrotie-mcboogerballs',
                    picture:
                        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1269573360i/7915570._UX160_.jpg',
                },
                {
                    title: 'P is for Pterodactyl',
                    link:
                        'amazon.com/Pterodactyl-Worst-Alphabet-Book-Ever/dp/1492674311',
                    picture:
                        'https://prodimage.images-bn.com/pimages/9781492674313_p0_v2_s1200x630.jpg',
                },
                {
                    title: 'The Poop That Took A Pee',
                    link:
                        'https://www.amazon.ca/Poop-that-took-Pee/dp/1466420626',
                    picture:
                        'https://images-na.ssl-images-amazon.com/images/I/41Hzk1vP2SL._SX331_BO1,204,203,200_.jpg',
                },
                {
                    title: 'P is for Pterodactyl',
                    link:
                        'amazon.com/Pterodactyl-Worst-Alphabet-Book-Ever/dp/1492674311',
                    picture:
                        'https://prodimage.images-bn.com/pimages/9781492674313_p0_v2_s1200x630.jpg',
                },
            ],
        };
    },
};
</script>

<style scoped>
</style>