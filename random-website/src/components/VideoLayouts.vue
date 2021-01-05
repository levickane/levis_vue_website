<template>
    <v-container>
        <v-layout row wrap mb-10>
            <v-col cols="12" class="order-0 order-sm-0">
                <div class="text-h3"><strong>Cool Vids</strong></div>
            </v-col>
            <v-col cols="12" class="order-1 order-sm-1" md="6"
                ><v-icon large color="black">mdi-face-outline</v-icon
                ><br /><span class="text-h6 font-weight-bold"
                    >First things First</span
                ><br />
                1 colum 2 this is the first things first column</v-col
            >
            <v-col cols="12" class="order-2 order-sm-2" md="6"
                ><iframe
                    :width="`${video.width}`"
                    :height="`${video.height}`"
                    :src="`${video1.src}`"
                    :frameborder="`${video.frameborder}`"
                    :allow="`${video.allow}`"
                    allowfullscreen
                ></iframe
            ></v-col>
            <v-col cols="12" class="order-4 order-md-3" md="6"
                ><iframe
                    :width="`${video.width}`"
                    :height="`${video.height}`"
                    :src="`${video2.src}`"
                    :frameborder="`${video.frameborder}`"
                    :allow="`${video.allow}`"
                    allowfullscreen
                ></iframe
            ></v-col>
            <v-col cols="12" class="order-3 order-md-4" md="6"
                ><v-icon large color="black">mdi-ear-hearing</v-icon><br /><span
                    class="text-h6 font-weight-bold"
                    >I Hear Everything</span
                ><br />This is the section where I talk about how I can hear
                everything all of the time. The truth is that I cant!
            </v-col>
            <v-col cols="12" class="order-5 order-sm-5" md="6"
                ><v-icon large color="black"
                    >mdi-comment-processing-outline</v-icon
                ><br /><span class="text-h6 font-weight-bold"
                    >Real Interactions</span
                ><br />This is the area where I would talk about having real
                interactions with a real person like MYSELF! How cool is
                that?!</v-col
            >
            <v-col cols="12" class="order-6 order-sm-6" md="6"
                ><iframe
                    :width="`${video.width}`"
                    :height="`${video.height}`"
                    :src="`${video3.src}`"
                    :frameborder="`${video.frameborder}`"
                    :allow="`${video.allow}`"
                    allowfullscreen
                ></iframe
            ></v-col>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'VideoLayouts',
    data() {
        return {
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
        };
    },
};
</script>

<style scoped>
</style>