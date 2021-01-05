<template>
    <div>
        <v-container fluid dark class="banner">
            <v-layout dark justify-left align-left column py-16 my-16>
                <div
                    class="text-subtitle-1 font-weight-black white--text text-left my-5"
                >
                    It's time for...
                </div>
                <div class="text-h1 font-weight-black white--text text-left">
                    Fitness
                </div>
            </v-layout>
        </v-container>
        <v-layout column>
            <v-col>
                <p style="font-size: 1.5em">{{ lorem }}</p>
                <p style="font-size: 1.5em">
                    {{ Nullam }}
                </p>
                <p style="font-size: 1.5em">
                    {{ Aenean }}
                </p>
                <br />
                <div style="font-size: 1.5em">
                    <strong>Welcome to Greatness</strong>
                </div>
            </v-col>
            <hr />
            <v-col class="pt-10 px-15">
                <div class="text-h3 text-center">
                    <strong>What is Fitness?</strong>
                </div>
                <p class="text-center" style="font-size: 1.5em">
                    Having trouble seeing what's directly underneath your belly?
                    Then you've come to the right place! See how your life can
                    be a million times better.
                </p>
                <my-video></my-video>
            </v-col>
        </v-layout>

        <hr />
        <video-layouts></video-layouts>
        <v-layout style="background-color: lightgrey" class="mb-10">
            <service-previews></service-previews>
        </v-layout>
        <read-testimonials></read-testimonials>
        <book-session></book-session>
        <hr />
        <expand-menu></expand-menu>
    </div>
</template>

<script>
import BookSession from '../components/BookSession.vue';
import ExpandMenu from '../components/ExpandMenu.vue';
import MyVideo from '../components/MyVideo.vue';
import ReadTestimonials from '../components/ReadTestimonials.vue';
import ServicePreviews from '../components/ServicePreviews.vue';
import VideoLayouts from '../components/VideoLayouts.vue';
export default {
    components: {
        MyVideo,
        ReadTestimonials,
        VideoLayouts,
        ServicePreviews,
        BookSession,
        ExpandMenu,
    },
    name: 'Fitness',
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
.banner {
    background-color: black;
}
</style>