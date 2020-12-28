<template>
    <v-app>
        <page-navigation></page-navigation>
        <v-main>
            <router-view></router-view>
        </v-main>
        <bottom-page></bottom-page>
    </v-app>
</template>

<script>
import BottomPage from './components/BottomPage.vue';
import PageNavigation from './components/PageNavigation.vue';

export default {
    name: 'App',
    components: {
        PageNavigation,
        BottomPage,
    },
    data: () => ({
        //
    }),
};
</script>
