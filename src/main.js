import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import '@/firebase/';
import { firebase } from '@firebase/app';
require('firebase/firestore');
require('firebase/app');

Vue.prototype.$firebaseDatabase = firebase.default.firestore();

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');
