<template>
    <v-container>
        <hr />
        <v-layout row wrap>
            <v-col cols="12" md="6" lg="6" xl="6">
                <v-col cols="12" class="font-weight-black text-h4"
                    >Levi's Website</v-col
                >
                <v-col cols="12"
                    >Crafting the next generation <br />
                    of awesome people</v-col
                >
                <v-col cols="12">
                    <v-icon color="black">mdi-copyright</v-icon>
                    {{ new Date().getFullYear() }} — Levi's Website no rights
                    reserved
                </v-col>
                <v-col cols="12">
                    <router-link
                        class="mr-15"
                        to="/privacy"
                        style="text-decoration: none; color: black"
                        >Privacy</router-link
                    >
                    <router-link
                        to="/termsofuse"
                        style="text-decoration: none; color: black"
                        >Terms of use</router-link
                    >
                </v-col>
            </v-col>
            <v-col cols="6" md="2" lg="2" xl="2">
                <v-col class="font-weight-bold">Services</v-col>
                <v-col v-for="link in services" :key="link" class="button">
                    <router-link
                        class="button"
                        :to="`${link.pathway}`"
                        style="text-decoration: none; color: black"
                    >
                        {{ link.page }}
                    </router-link>
                </v-col>
                <v-col>
                    <v-btn
                        class="font-weight-black"
                        outlined="False"
                        to="/testimonials"
                    >
                        Testimonials</v-btn
                    >
                </v-col>
            </v-col>
            <v-col cols="6" md="2" lg="2" xl="2">
                <v-col class="font-weight-bold">The Dude</v-col>
                <v-col v-for="item in theDude" :key="item" class="button">
                    <router-link
                        style="text-decoration: none; color: black"
                        :to="`${item.pathway}`"
                    >
                        {{ item.page }}
                    </router-link>
                </v-col>
            </v-col>
            <v-col cols="6" md="2" lg="2" xl="2">
                <v-col class="font-weight-bold">Social</v-col>
                <v-col class="px-2">
                    <a
                        href="https://www.youtube.com/channel/UCooQlfuioMBcOCeHB5N8q_w"
                        style="text-decoration: none"
                        ><v-icon large>mdi-youtube-tv</v-icon></a
                    >
                    <a
                        href="https://www.linkedin.com/in/levi-kane-8a94a155/"
                        style="text-decoration: none"
                        ><v-icon large>mdi-linkedin</v-icon></a
                    >
                    <a
                        href="https://www.instagram.com/oneleggedlevi/"
                        style="text-decoration: none"
                        ><v-icon large>mdi-instagram</v-icon></a
                    >
                </v-col>
            </v-col>
        </v-layout>
    </v-container>
</template>


<script>
export default {
    name: 'MyFooter',
    data() {
        return {
            theDude: [
                { page: 'About', pathway: '/about' },
                { page: 'Contact Me', pathway: '/contact' },
                { page: 'Testimonials', pathway: '/testimonials' },
                { page: 'News', pathway: '/news' },
            ],
            services: [
                { page: 'Fitness', pathway: '/fitness' },
                { page: 'Real Estate', pathway: '/realestate' },
                { page: 'Coding', pathway: '/coding' },
                { page: 'Support', pathway: '/support' },
            ],
        };
    },
};
</script>

<style scoped>
.button:hover {
    background-color: rgb(250, 250, 250);
}
</style>