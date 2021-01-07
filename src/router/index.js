import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',

            component: () =>
                import('../views/About.vue')
        },
        {
            path: '/coding',
            name: 'Coding',

            component: () =>
                import('../views/Coding.vue')
        },
        {
            path: '/contact',
            name: 'ContanctMe',

            component: () =>
                import('../views/ContactMe.vue')
        },
        {
            path: '/fitness',
            name: 'Fitness',

            component: () =>
                import('../views/Fitness.vue')
        },
        {
            path: '/realestate',
            name: 'RealEstate',

            component: () =>
                import('../views/RealEstate.vue')
        },
        {
            path: '/testimonials',
            name: 'Testimonials',

            component: () =>
                import('../views/Testimonials.vue')
        },
        {
            path: '/privacy',
            name: 'Privacy',

            component: () =>
                import('../views/Privacy.vue')
        },
        {
            path: '/termsofuse',
            name: 'TermsOfUse',

            component: () =>
                import('../views/TermsOfUse.vue')
        },
        {
            path: '/clientjoin',
            name: 'ClientJoin',

            component: () =>
                import('../views/ClientJoin.vue')
        },
        {
            path: '/clientlogin',
            name: 'ClientLogin',

            component: () =>
                import('../views/ClientLogin.vue')
        },
        {
            path: '/clienthome',
            name: 'ClientLHome',

            component: () =>
                import('../views/ClientHome.vue')
        },
        {
            path: '/support',
            name: 'Support',

            component: () =>
                import('../views/Support.vue')
        },
        {
            path: '/news',
            name: 'News',

            component: () =>
                import('../views/News.vue')
        },
        {
            path: '/careers',
            name: 'CareerPage',

            component: () =>
                import('../views/CareerPage.vue')
        },
    ]
});

export default router;