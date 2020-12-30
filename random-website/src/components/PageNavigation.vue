<template>
    <div>
        <v-navigation-drawer
            app
            v-model="drawer"
            color="green lighten-3"
            disable-resize-watcher
        >
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list :key="index">
                        {{ item.title }}
                    </v-list>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
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
            <v-btn
                color="green darken-1"
                class="hidden-sm-and-down"
                to="/testimonials"
                >Testimonials</v-btn
            >
            <v-menu open-on-hover top offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="black" dark v-bind="attrs" v-on="on">
                        Services
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                        v-for="(item, index) in dropdown"
                        :key="index"
                        :to="`${item.page}`"
                    >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    name: 'PageNavigation',
    data() {
        return {
            websiteTitle: "Levi's Test Website",
            drawer: false,
            items: [
                { title: 'About' },
                { title: 'Testimonials' },
                { title: 'Contact Me' },
            ],
            dropdown: [
                { title: 'Fitness', page: '/fitness' },
                { title: 'Real Estate', page: '/realestate' },
                { title: 'Coding', page: '/coding' },
            ],
        };
    },
};
</script>

<style scoped>
</style>