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
            <v-toolbar-title>{{ websiteTitle }}</v-toolbar-title>
            <v-btn class="hidden-sm-and-down">About</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn class="hidden-sm-and-down">Contact Me</v-btn>
            <v-btn color="green darken-1" class="hidden-sm-and-down"
                >Testimonials</v-btn
            >
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
        };
    },
};
</script>

<style scoped>
</style>