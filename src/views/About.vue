<template>
    <div>
        <v-container fluid>
            <v-layout justify-left align-left column py-16 class="my-16">
                <div
                    class="text-h1 font-weight-black black--text text-decoration-underline text-left"
                >
                    About
                </div>
                <div
                    class="text-subtitle-1 font-weight-black black--text text-left mt-10"
                >
                    An about page built from scratch using Vue/Vuex/Routers
                </div>
            </v-layout>
            <hr />
            <v-layout row wrap class="my-5">
                <v-col cols="12" lg="3" xl="3" class="font-weight-black text-h4"
                    >My Mission</v-col
                >
                <v-col style="font-size: 1.5em">
                    {{ lorem }}
                </v-col>
            </v-layout>
            <hr />
            <v-layout row wrap class="my-5">
                <v-col cols="12" lg="3" xl="3" class="font-weight-black text-h4"
                    >My Clients</v-col
                >
                <v-col style="font-size: 1em">
                    {{ Nullam }}
                </v-col>
            </v-layout>
            <hr />
            <v-layout row wrap class="my-5">
                <v-col cols="12" lg="3" xl="3" class="font-weight-black text-h4"
                    >The Influence</v-col
                >
                <v-col cols="12" lg="4" xl="4" style="font-size: 1em">
                    <strong class="font-weight-black text-h4">"</strong>
                    <br />
                    {{ Aenean }}
                    <br />
                    <v-layout>
                        <v-col cols="4" style="font-size: 1em">
                            <v-img
                                lazy-src="https://picsum.photos/id/11/10/6"
                                height="75"
                                width="75"
                                src="https://picsum.photos/id/11/500/300"
                                class="rounded-circle mt-5 mb-16"
                            ></v-img>
                        </v-col>
                        <v-col cols="6" class="mt-8"
                            ><div>
                                <strong>Levi Curtis Kane</strong> <br />The Man
                            </div></v-col
                        >
                    </v-layout>
                </v-col>
                <v-col cols="12" lg="4" xl="4" style="font-size: 1em">
                    <strong class="font-weight-black text-h4">"</strong>
                    <br />
                    {{ Aenean }}
                    <br />
                    <v-layout>
                        <v-col cols="4" style="font-size: 1em">
                            <v-img
                                lazy-src="https://picsum.photos/id/11/10/6"
                                height="75"
                                width="75"
                                src="https://picsum.photos/id/11/500/300"
                                class="rounded-circle mt-5 mb-16"
                            ></v-img>
                        </v-col>
                        <v-col cols="6" class="mt-8"
                            ><div>
                                <strong>Lindsery Lynn Kane</strong> <br />The
                                WOman
                            </div></v-col
                        >
                    </v-layout>
                </v-col>
            </v-layout>
            <hr />
            <news-carousel></news-carousel>
            <careers></careers>
        </v-container>
    </div>
</template>

<script>
import Careers from '../components/Careers.vue';
import NewsCarousel from '../components/NewsCarousel.vue';
export default {
    components: { Careers, NewsCarousel },
    name: 'About',
    data() {
        return {
            lorem:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar risus quis mauris interdum, in euismod nibh pretium. Etiam pulvinar tincidunt dapibus. Quisque sollicitudin, mauris a consequat consectetur, turpis nisl sollicitudin enim, id consectetur neque neque nec metus. Pellentesque dolor nisi, vulputate quis lobortis ac, tincidunt et quam. Mauris pulvinar blandit nisi nec mattis. Aliquam accumsan ut sem eget efficitur. Vivamus in tortor gravida eros laoreet condimentum nec vel dui. Nullam quam massa, ultrices eget tincidunt a, pulvinar ac libero.',
            Nullam:
                'Nullam nec massa eu est fringilla lobortis. Praesent in enim in justo blandit varius. Cras placerat arcu in sapien rhoncus aliquet. Sed interdum tortor et tincidunt condimentum. Etiam consequat mi leo, in suscipit odio scelerisque molestie. Nam et purus consequat, iaculis augue vel, sagittis ligula. Vestibulum aliquet vulputate erat. Phasellus id mauris mauris. Nunc a maximus dolor. Curabitur ut vestibulum arcu. Curabitur non lacus justo. Cras varius a magna in semper. Nulla eros ante, consectetur faucibus sapien eu, rhoncus imperdiet dui. Sed viverra iaculis nunc, id pulvinar massa egestas vitae.',
            Aenean:
                'Aenean erat metus, imperdiet eget nisl laoreet, venenatis ultricies ante. In interdum ante vel dictum ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer sit amet gravida diam. Aliquam in tempor metus. Fusce pellentesque pharetra sem, et luctus justo tempor dictum. Ut feugiat est sed tristique egestas. Nullam posuere a nunc in blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse laoreet ultrices eros, nec malesuada enim semper sit amet. Maecenas efficitur consectetur accumsan. Etiam in aliquam turpis, ut pharetra nulla. Vestibulum malesuada, nulla id elementum cursus, nibh dui rhoncus felis, suscipit mattis felis enim sed ex. Pellentesque scelerisque aliquam lorem, vel mattis nibh tincidunt ac. Suspendisse ac nibh sit amet lacus ullamcorper maximus.',
        };
    },
};
</script>

<style scoped>
</style>
