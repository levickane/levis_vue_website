<template>
    <v-container fluid>
        <v-layout justify-left align-left column py-16 class="my-16 px-3">
            <div class="text-h2 font-weight-black black--text text-left">
                Testimonials
            </div>
            <div
                class="text-subtitle-1 font-weight-black black--text text-left mt-10"
            >
                What are they saying?
            </div>
        </v-layout>
        <hr class="mb-10" />
        <v-layout row wrap class="px-3">
            <v-col cols="12" v-for="(item, index) in techReviews" :key="index">
                <v-card class="pa-3">
                    <v-layout row wrap>
                        <v-col cols="6" md="2"
                            ><v-img
                                :src="`${item.profilePic}`"
                                style="border-radius:50%"
                        /></v-col>
                        <v-col cols="6" md="2"
                            ><h4>{{ item.person }}</h4>
                            <p>{{ item.jobTitle }}</p></v-col
                        >
                        <v-col cols="12" md="8">{{ item.testimony }}</v-col>
                    </v-layout>
                </v-card>
            </v-col>
        </v-layout>
        <v-layout row wrap class="px-3">
            <v-col cols="6" md="4">
                <h2>Fitness reviews:</h2>
                <h4>
                    In case things go south with software engineering, OR you
                    REALLY want me to be your trainer - Check out my reviews in
                    the fitness industry
                </h4>
            </v-col>
            <v-col cols="6" md="3" class="d-flex align-center justify-center"
                ><v-btn color="primary"
                    ><a
                        href="https://www.google.com/maps/place/One+Legged+Levi/@41.9220945,-87.6723672,15z/data=!4m5!3m4!1s0x0:0x221e9b60216a57d0!8m2!3d41.9218638!4d-87.6726538"
                        target="_blank"
                        style="text-decoration: none; color: white"
                        >Google Reviews</a
                    ></v-btn
                ></v-col
            >
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Testimonials',
    data: () => ({
        techReviews: [
            {
                person: 'Brian Rojas',
                profilePic:
                    'https://media-exp1.licdn.com/dms/image/C4E03AQGER2y6mcgGpA/profile-displayphoto-shrink_100_100/0/1517753039495?e=1634169600&v=beta&t=ucdhGNyBDgZvJdIbxSBtzS7PwkAmorFVnhmPoAKv6ug',
                jobTitle: 'Mobile Developer - FourSquare',
                testimony:
                    "As a former client of Levi's and a current software developer mentor of his, I can attest to his ability to quickly learn and adapt. I've watch his skills grow since he started learning how to code and I'm proud of how far he has come! The fact that he has already learned as much as he has during the short time that he has is incredibly impressive. His work ethic is unrivaled and I believe that any company would be lucky to have him!"
            },
            {
                person: 'Ben James',
                profilePic:
                    'https://media-exp1.licdn.com/dms/image/C5603AQFqWcqFqsacTg/profile-displayphoto-shrink_100_100/0/1516582560128?e=1634169600&v=beta&t=pHGtoGsiBGFTIP_HFaNk7ZHY__jzHnCd7K6LautqRuo',
                jobTitle: 'OGAds - CEO',
                testimony:
                    "Levi's a real go-getter! I used to be one of his personal training clients and when covid basically cancelled his business he didn't waste any time turning to software development, we had talked about it a lot and he was very keen to try it out for himself. As he was someone who came into this industry knowing absolutely nothing about software development, I'm so proud of how far he has come! He is a quick learner, intuitive and eager to learn more - are 3 things that come to mind when I think of Levi!"
            },
            {
                person: 'Sara Neves Pereira',
                profilePic:
                    'https://media-exp1.licdn.com/dms/image/C5603AQHOHOUTOZoWrw/profile-displayphoto-shrink_100_100/0/1595273711043?e=1634169600&v=beta&t=HsEg1O20cKTl2DTVExtNRZe_HjYxdHlT2uQuxDf5Azk',
                jobTitle: 'Full Stack Web Developer',
                testimony:
                    "As Levi's Coding Tutor, I was extremely impressed at how fast Levi would learn the material he was being taught. Whenever his apps had issues, he would not wait for me to tell him the answer, we would debug his projects together. Levi is a motivated, self-starter individual that is always seeking the opportunity to learn. It was a true pleasure to tutor Levi and I look forward to see where his determination takes him."
            }
        ]
    })
};
</script>

<style scoped></style>
