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
        <v-container>
            <v-layout column>
                <v-col>
                    <p style="font-size: 1.5em">{{ lorem }}</p>
                    <p style="font-size: 1.5em">
                        {{ Nullam }}
                    </p>
                    <p style="font-size: 1.5em">
                        {{ Aenean }}
                    </p>
                    <div style="font-size: 1.5em">
                        <strong>Welcome to Greatness</strong>
                    </div>
                </v-col>
                <hr />
                <v-col class="pt-10">
                    <div class="text-h3 text-center">
                        <strong>What is Fitness?</strong>
                    </div>
                    <p class="text-center" style="font-size: 1.5em">
                        Having trouble seeing what's directly underneath your
                        belly? Then you've come to the right place! See how your
                        life can be a million times better.
                    </p>
                    <my-video></my-video>
                </v-col>
                <hr />
            </v-layout>

            <v-layout row wrap mb-10>
                <v-col cols="12">
                    <div class="text-h3"><strong>Cool Vids</strong></div>
                </v-col>
                <v-col cols="12" lg="6" xl="6"
                    ><v-icon large color="black">mdi-face-outline</v-icon
                    ><br /><span class="text-h6 font-weight-bold"
                        >First things First</span
                    ><br />
                    1 colum 2 this is the first things first column</v-col
                >
                <v-col cols="12" lg="6" xl="6"
                    ><iframe
                        :width="`${video.width}`"
                        :height="`${video.height}`"
                        :src="`${video1.src}`"
                        :frameborder="`${video.frameborder}`"
                        :allow="`${video.allow}`"
                        allowfullscreen
                    ></iframe
                ></v-col>
                <v-col cols="12" lg="6" xl="6"
                    ><iframe
                        :width="`${video.width}`"
                        :height="`${video.height}`"
                        :src="`${video2.src}`"
                        :frameborder="`${video.frameborder}`"
                        :allow="`${video.allow}`"
                        allowfullscreen
                    ></iframe
                ></v-col>
                <v-col cols="12" lg="6" xl="6"
                    ><v-icon large color="black">mdi-ear-hearing</v-icon
                    ><br /><span class="text-h6 font-weight-bold"
                        >I Hear Everything</span
                    ><br />This is the section where I talk about how I can hear
                    everything all of the time. The truth is that I cant!
                </v-col>
                <v-col cols="12" lg="6" xl="6"
                    ><v-icon large color="black"
                        >mdi-comment-processing-outline</v-icon
                    ><br /><span class="text-h6 font-weight-bold"
                        >Real Interactions</span
                    ><br />This is the area where I would talk about having real
                    interactions with a real person like MYSELF! How cool is
                    that?!</v-col
                >
                <v-col cols="12" lg="6" xl="6"
                    ><iframe
                        :width="`${video.width}`"
                        :height="`${video.height}`"
                        :src="`${video3.src}`"
                        :frameborder="`${video.frameborder}`"
                        :allow="`${video.allow}`"
                        allowfullscreen
                    ></iframe
                ></v-col>
                <v-col cols="12" lg="6" xl="6"
                    ><iframe
                        :width="`${video.width}`"
                        :height="`${video.height}`"
                        :src="`${video4.src}`"
                        :frameborder="`${video.frameborder}`"
                        :allow="`${video.allow}`"
                        allowfullscreen
                    ></iframe
                ></v-col>
                <v-col cols="12" lg="6" xl="6"
                    ><v-icon large color="black">mdi-tune</v-icon><br /><span
                        class="text-h6 font-weight-bold"
                        >Customize Your Life</span
                    ><br />
                    2 colum 2 this is the part where you customize your life and
                    in the second column, the text is longer than the first
                    column</v-col
                >
                <v-col cols="12" lg="6" xl="6"
                    ><v-icon large color="black"
                        >mdi-play-box-multiple-outline</v-icon
                    ><br /><span class="text-h6 font-weight-bold"
                        >Video Explanations</span
                    ><br />This is the section where I would talk about how I
                    have awesome videos to explain things like my awesomeness
                    and other sorts of things</v-col
                >
                <v-col cols="12" lg="6" xl="6"
                    ><iframe
                        :width="`${video.width}`"
                        :height="`${video.height}`"
                        :src="`${video5.src}`"
                        :frameborder="`${video.frameborder}`"
                        :allow="`${video.allow}`"
                        allowfullscreen
                    ></iframe
                ></v-col>

                <v-col cols="12" lg="6" xl="6"
                    ><iframe
                        :width="`${video.width}`"
                        :height="`${video.height}`"
                        :src="`${video6.src}`"
                        :frameborder="`${video.frameborder}`"
                        :allow="`${video.allow}`"
                        allowfullscreen
                    ></iframe
                ></v-col>
                <v-col cols="12" lg="6" xl="6"
                    ><v-icon large color="black">mdi-web</v-icon><br /><span
                        class="text-h6 font-weight-bold"
                        >Conquer the World</span
                    ><br />This is the section that I would talk about how if
                    you worked with me and allowed me to work FOR you then
                    together we could conquor the world</v-col
                >
            </v-layout>
        </v-container>
        <read-testimonials></read-testimonials>
    </div>
</template>

<script>
import MyVideo from '../components/MyVideo.vue';
import ReadTestimonials from '../components/ReadTestimonials.vue';
export default {
    components: { MyVideo, ReadTestimonials },
    name: 'Fitness',
    data() {
        return {
            lorem:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar risus quis mauris interdum, in euismod nibh pretium. Etiam pulvinar tincidunt dapibus. Quisque sollicitudin, mauris a consequat consectetur, turpis nisl sollicitudin enim, id consectetur neque neque nec metus. Pellentesque dolor nisi, vulputate quis lobortis ac, tincidunt et quam. Mauris pulvinar blandit nisi nec mattis. Aliquam accumsan ut sem eget efficitur. Vivamus in tortor gravida eros laoreet condimentum nec vel dui. Nullam quam massa, ultrices eget tincidunt a, pulvinar ac libero.',
            Nullam:
                'Nullam nec massa eu est fringilla lobortis. Praesent in enim in justo blandit varius. Cras placerat arcu in sapien rhoncus aliquet. Sed interdum tortor et tincidunt condimentum. Etiam consequat mi leo, in suscipit odio scelerisque molestie. Nam et purus consequat, iaculis augue vel, sagittis ligula. Vestibulum aliquet vulputate erat. Phasellus id mauris mauris. Nunc a maximus dolor. Curabitur ut vestibulum arcu. Curabitur non lacus justo. Cras varius a magna in semper. Nulla eros ante, consectetur faucibus sapien eu, rhoncus imperdiet dui. Sed viverra iaculis nunc, id pulvinar massa egestas vitae.',
            Aenean:
                'Aenean erat metus, imperdiet eget nisl laoreet, venenatis ultricies ante. In interdum ante vel dictum ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer sit amet gravida diam. Aliquam in tempor metus. Fusce pellentesque pharetra sem, et luctus justo tempor dictum. Ut feugiat est sed tristique egestas. Nullam posuere a nunc in blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse laoreet ultrices eros, nec malesuada enim semper sit amet. Maecenas efficitur consectetur accumsan. Etiam in aliquam turpis, ut pharetra nulla. Vestibulum malesuada, nulla id elementum cursus, nibh dui rhoncus felis, suscipit mattis felis enim sed ex. Pellentesque scelerisque aliquam lorem, vel mattis nibh tincidunt ac. Suspendisse ac nibh sit amet lacus ullamcorper maximus.',
            video: {
                width: '500',
                height: '300',
                frameborder: '0',
                allow:
                    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
            },
            video1: {
                src: 'https://www.youtube.com/embed/GlnZoMZ7z2g',
            },
            video2: {
                src: 'https://www.youtube.com/embed/E-gJl5DAE4g',
            },
            video3: {
                src: 'https://www.youtube.com/embed/4S95iDJXAUo',
            },
            video4: {
                src: 'https://www.youtube.com/embed/LvPgj7xnUC4',
            },
            video5: {
                src: 'https://www.youtube.com/embed/V1qbK50CU9k',
            },
            video6: {
                src: 'https://www.youtube.com/embed/jlrVOamTXBk',
            },
        };
    },
};
</script>

<style scoped>
.banner {
    background-color: black;
}
</style>