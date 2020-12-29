<template>
    <v-container class="my-10">
        <v-layout row wrap class="mb-10">
            <v-col cols="12" lg="3" class="text-h3 font-weight-bold"
                >Services</v-col
            >
            <v-col cols="6" lg="3"
                ><v-icon large color="black">mdi-face-outline</v-icon
                ><br /><span class="text-h6 font-weight-bold"
                    >First things First</span
                ><br />
                1 colum 2 this is the first things first column</v-col
            >
            <v-col cols="6" lg="3"
                ><v-icon large color="black">mdi-ear-hearing</v-icon><br /><span
                    class="text-h6 font-weight-bold"
                    >I Hear Everything</span
                ><br />This is the section where I talk about how I can hear
                everything all of the time. The truth is that I cant!
            </v-col>
            <v-col cols="6" lg="3"
                ><v-icon large color="black">mdi-tooltip-outline</v-icon
                ><br /><span class="text-h6 font-weight-bold"
                    >Real Interactions</span
                ><br />This is the area where I would talk about having real
                interactions with a real person like MYSELF! How cool is
                that?!</v-col
            >
            <v-spacer>
                <v-col class="hidden-md-and-down" lg="3"> </v-col>
            </v-spacer>
            <v-col cols="6" lg="3"
                ><v-icon large color="black">mdi-tune</v-icon><br /><span
                    class="text-h6 font-weight-bold"
                    >Customize Your Life</span
                ><br />
                2 colum 2 this is the part where you customize your life and in
                the second column, the text is longer than the first
                column</v-col
            >
            <v-col cols="6" lg="3"
                ><v-icon large color="black"
                    >mdi-play-box-multiple-outline</v-icon
                ><br /><span class="text-h6 font-weight-bold"
                    >Video Explanations</span
                ><br />This is the section where I would talk about how I have
                awesome videos to explain things like my awesomeness and other
                sorts of things</v-col
            >
            <v-col cols="6" lg="3"
                ><v-icon large color="black">mdi-web</v-icon><br /><span
                    class="text-h6 font-weight-bold"
                    >Conquer the World</span
                ><br />This is the section that I would talk about how if you
                worked with me and allowed me to work FOR you then together we
                could conquor the world</v-col
            >
        </v-layout>
        <v-layout row wrap class="mb-10">
            <v-col cols="3"></v-col>
            <v-col
                ><span class="black--text"
                    ><a to="/services"
                        >Learn More
                        <v-icon large color="black">mdi-arrow-right</v-icon></a
                    ></span
                ></v-col
            >
        </v-layout>
        <hr />
    </v-container>
</template>

<script>
export default {
    name: 'ServicePreviews',
};
</script>
<style scoped>
a {
    color: black;
}
</style>