<template>
    <v-container fluid>
        <v-layout justify-left align-left column py-16 class="my-16">
            <div
                class="text-h1 font-weight-black black--text text-decoration-underline text-left"
            >
                NEWS!
            </div>
            <div
                class="text-subtitle-1 font-weight-black black--text text-left mt-10"
            >
                A paginated news page built from scratch using Vue/Vuex/Routers
            </div>
        </v-layout>
        <v-layout row wrap>
            <v-col
                cols="12"
                lg="4"
                md="4"
                v-for="(news, index) in displayedLinks"
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
                            style="text-decoration: none; color: black"
                        >
                            Learn More <v-icon>mdi-arrow-right</v-icon></a
                        >
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-layout>
        <v-pagination
            v-model="page"
            :length="totalPages.length"
            circle
            color="black"
            :total-visible="7"
            prev-icon="mdi-arrow-left"
            next-icon="mdi-arrow-right"
        ></v-pagination>
    </v-container>
</template>

<script>
export default {
    name: 'News',
    data() {
        return {
            posts: [],
            page: 1,
            perPage: 9,
            totalPages: []
        };
    },
    methods: {
        paginate(posts) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return posts.slice(from, to);
        }
    },
    computed: {
        displayedLinks() {
            return this.paginate(this.posts);
        }
    },
    async created() {
        const newsData = await this.$store.dispatch('getNews');
        this.posts = newsData.news.newsLinks;
        let numberOfPages = Math.ceil(this.posts.length / this.perPage);
        for (let i = 1; i <= numberOfPages; i++) {
            this.totalPages.push(i);
            console.log(this.posts);
        }
    }
};
</script>
<style scoped></style>
