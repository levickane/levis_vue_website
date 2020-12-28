<template>
    <v-footer color="red darken-1" padless>
        <v-row justify="center" no-gutters>
            <v-btn
                v-for="link in links"
                :key="link"
                color="white"
                text
                rounded
                class="button-row my-5"
            >
                {{ link.page }}
            </v-btn>
            <v-col class="red darken-3 py-4 text-center white--text" cols="12">
                {{ new Date().getFullYear() }} — <strong>Levi's Website</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>


<script>
export default {
    name: 'BottomPage',
    data() {
        return {
            links: [
                { page: 'About' },
                { page: 'Contact Me' },
                { page: 'Testimonials' },
            ],
        };
    },
};
</script>

<style scoped>
.button-row:hover {
    background-color: rgb(255, 109, 109);
}
</style>