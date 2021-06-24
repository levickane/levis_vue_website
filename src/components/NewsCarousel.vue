<template>
    <v-container grid-list-lg>
        <v-layout row wrap>
            <v-col class="font-weight-black text-h4">News!!</v-col>
        </v-layout>
        <v-layout row wrap>
            <v-col
                cols="12"
                lg="4"
                md="4"
                v-for="(news, index) in newsLinks.slice(0, 3)"
                :key="index"
            >
                <v-card>
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
                            target="_blank"
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
            newsLinks: {}
        };
    },

    async created() {
        const newsData = await this.$store.dispatch('getNews');
        this.newsLinks = newsData.news.newsLinks;
    }
};
</script>

<style scoped></style>
