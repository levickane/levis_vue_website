<template>
    <v-app>
        <page-navigation></page-navigation>
        <v-main>
            <router-view></router-view>
        </v-main>
        <my-footer></my-footer>
    </v-app>
</template>

<script>
import MyFooter from './components/MyFooter.vue';
import PageNavigation from './components/PageNavigation.vue';

export default {
    name: 'App',
    components: {
        PageNavigation,
        MyFooter
    },
    data: () => ({
        //
    })
};
</script>
