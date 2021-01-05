<template>
    <v-container fluid>
        <v-navigation-drawer
            app
            v-model="drawer"
            color="green lighten-3"
            disable-resize-watcher
        >
            <v-list
                ><v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    :to="`${item.page}`"
                >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
                <v-list-item v-if="!isAuthenticated">
                    <v-list-item-title
                        ><router-link
                            to="/clientjoin"
                            style="text-decoration: none; color: black"
                            >Join</router-link
                        ></v-list-item-title
                    ></v-list-item
                >
                <v-list-item v-else>
                    <v-list-item-title>
                        <router-link
                            to="/clienthome"
                            style="text-decoration: none; color: black"
                            >Profile</router-link
                        ></v-list-item-title
                    ></v-list-item
                >
                <v-list-item v-if="!isAuthenticated">
                    <v-list-item-title
                        ><router-link
                            to="/clientlogin"
                            style="text-decoration: none; color: black"
                            >Login</router-link
                        ></v-list-item-title
                    >
                </v-list-item>
                <v-list-item v-else>
                    <v-list-item-title @click="logout"
                        >Logout</v-list-item-title
                    >
                </v-list-item>
                <v-list-item>
                    <v-menu open-on-hover bottom offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-list-item-title
                                color="black"
                                dark
                                v-bind="attrs"
                                v-on="on"
                            >
                                Services
                            </v-list-item-title>
                        </template>

                        <v-list>
                            <v-list-item
                                v-for="(item, index) in dropdown"
                                :key="index"
                                :to="`${item.page}`"
                            >
                                <span
                                    ><v-img
                                        height="50"
                                        width="50"
                                        :src="`${item.picture}`"
                                    ></v-img
                                ></span>
                                <v-col>
                                    <v-list-item-title
                                        style="font-size: 0.95em"
                                        class="font-weight-bold"
                                        >{{ item.title }}</v-list-item-title
                                    >
                                    <v-list-item-title
                                        style="font-size: 0.75em"
                                        class="text-secondary"
                                        >{{
                                            item.description
                                        }}</v-list-item-title
                                    >
                                </v-col>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app color="green darken-4" dark>
            <v-app-bar-nav-icon
                class="hidden-md-and-up"
                @click="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link
                class="font-weight-black"
                style="text-decoration: none; color: white"
                to="/"
            >
                <v-toolbar-title class="mx-5">{{
                    websiteTitle
                }}</v-toolbar-title>
            </router-link>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn color="black" class="hidden-sm-and-down" to="/about"
                >About</v-btn
            >
            <v-btn color="black" class="hidden-sm-and-down" to="/contact"
                >Contact Me</v-btn
            >
            <v-btn color="black" class="hidden-sm-and-down" to="/testimonials"
                >Testimonials</v-btn
            >
            <div v-if="!isAuthenticated" class="hidden-sm-and-down">
                <v-btn color="black" to="/clientlogin">LOGIN</v-btn>
                <v-btn color="green darken-1" to="/clientjoin">JOIN</v-btn>
            </div>
            <div v-else class="hidden-sm-and-down">
                <v-btn color="black" to="/clienthome">Profile</v-btn>
                <v-btn outline color="green darken-1" @click="logout"
                    >Logout</v-btn
                >
            </div>
            <v-menu open-on-hover bottom offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        class="hidden-sm-and-down"
                        color="black"
                        dark
                        v-bind="attrs"
                        v-on="on"
                    >
                        Services
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                        width="300"
                        class="mx-auto"
                        v-for="(item, index) in dropdown"
                        :key="index"
                        :to="`${item.page}`"
                    >
                        <span
                            ><v-img
                                height="50"
                                width="50"
                                :src="`${item.picture}`"
                            ></v-img
                        ></span>
                        <v-col>
                            <v-list-item-title
                                style="font-size: 0.95em"
                                class="font-weight-bold"
                                >{{ item.title }}</v-list-item-title
                            >
                            <v-list-item-title
                                style="font-size: 0.75em"
                                class="text-secondary"
                                >{{ item.description }}</v-list-item-title
                            >
                        </v-col>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
    </v-container>
</template>

<script>
export default {
    name: 'PageNavigation',
    data() {
        return {
            websiteTitle: "Levi's Test Website",
            drawer: false,
            items: [
                { title: 'About', page: '/about' },
                { title: 'Testimonials', page: '/testimonials' },
                { title: 'Contact Me', page: '/contact' },
            ],
            dropdown: [
                {
                    title: 'Fitness',
                    picture:
                        'https://purepng.com/public/uploads/large/purepng.com-musclemusclemuscle-manbody-builderssix-packmuscle-boys-1421526926221lvohc.png',
                    description: 'Learn how to not be fat',
                    page: '/fitness',
                },
                {
                    title: 'Real Estate',
                    picture:
                        'https://toppng.com/uploads/preview/rolls-and-stacks-of-money-stacks-of-money-11562998046h21kuiihqr.png',
                    description: 'Earn Passive Income',
                    page: '/realestate',
                },
                {
                    title: 'Coding',
                    picture:
                        'https://toppng.com/uploads/preview/computer-icon-vector-png-desktop-computer-11563207085f1wwos2r52.png',
                    description: 'Sit down all day long',
                    page: '/coding',
                },
            ],
        };
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        },
    },
    methods: {
        logout() {
            this.$store.dispatch('userSignOut');
        },
    },
};
</script>

<style scoped>
</style>