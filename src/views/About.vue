<template>
    <div>
        <v-container fluid>
            <v-layout justify-left align-left column py-16 class="my-16 px-3">
                <div class="text-h1 font-weight-black black--text text-left">
                    About Me
                </div>
                <div
                    class="text-subtitle-1 font-weight-black black--text text-left mt-10"
                >
                    How did I get here?
                </div>
            </v-layout>
            <hr />
            <v-layout row wrap class="my-5 px-5">
                <v-col cols="12" lg="3" xl="3" class="font-weight-black text-h4"
                    >My Bio</v-col
                >
                <v-col cols="12" style="font-size: 1em">
                    <p>{{ bio1 }}</p>
                    <p>{{ bio2 }}</p>
                    <p>{{ bio3 }}</p>
                </v-col>
            </v-layout>
            <hr />
            <v-layout row wrap class="my-5 px-5">
                <v-col cols="12" lg="3" xl="3" class="font-weight-black text-h4"
                    >My Mission</v-col
                >
                <v-col style="font-size: 1.5em">
                    {{ mission }}
                </v-col>
            </v-layout>
            <hr />
            <v-layout row wrap class="my-5 px-5">
                <v-col cols="12" lg="3" xl="3" class="font-weight-black text-h4"
                    >My Team</v-col
                >
                <v-col cols="12" lg="4" xl="4" style="font-size: 1em">
                    <strong class="font-weight-black text-h4">"</strong>
                    <br />
                    {{ Levi }}
                    <br />
                    <v-layout>
                        <v-col cols="4" style="font-size: 1em">
                            <v-img
                                height="75"
                                width="75"
                                src="https://media-exp1.licdn.com/dms/image/C5603AQFcqQzr3nZSDQ/profile-displayphoto-shrink_200_200/0/1585836120975?e=1634169600&v=beta&t=QIKHPrXVJbPN9NGIBloufm4iKXsroOUYxRgIoZO9C-s"
                                class="rounded-circle mt-5 mb-16"
                            ></v-img>
                        </v-col>
                        <v-col cols="6" class="mt-8"
                            ><div>
                                <strong>Levi Kane</strong> <br />The Man
                            </div></v-col
                        >
                    </v-layout>
                </v-col>
                <v-col cols="12" lg="4" xl="4" style="font-size: 1em">
                    <strong class="font-weight-black text-h4">"</strong>
                    <br />
                    {{ Lindsey }}
                    <br />
                    <v-layout>
                        <v-col cols="4" style="font-size: 1em">
                            <v-img
                                height="75"
                                width="75"
                                src="https://media-exp1.licdn.com/dms/image/C4D03AQHvQyOIJYzOhg/profile-displayphoto-shrink_200_200/0/1516544168282?e=1634169600&v=beta&t=dMyI9FIn0O0nDdN-4k_Noo7yK6ws2HWmM_r3WGHcti0"
                                class="rounded-circle mt-5 mb-16"
                            ></v-img>
                        </v-col>
                        <v-col cols="6" class="mt-8"
                            ><div>
                                <strong>Lindsery Kane</strong> <br />The WOman
                            </div></v-col
                        >
                    </v-layout>
                </v-col>
            </v-layout>
            <hr />
            <news-carousel class="px-5"></news-carousel>
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
            mission:
                'To deliver high quality, dynamic, scalable, testable code, reflecting clients needs, requests and requirements, in a timely fashion, to drive revenue and increase profits.',
            bio1:
                "In 2012 I came accross a message posted on the door of a teacher of mine that I had at a community college in Chicago. I'll never forget it for as long as live. The message has been playing on repeat in my head, NONSTOP, ever since I graduated from UIC in 2015...***A man was out in the desert when a voice said to him, 'Pick up some pebbles and put them in your pocket, and tomorrow you will be both sorry and glad.' The man obeyed. He stooped down and picked up a handful of pebbles and put them in his pocket. The next day he reached into his pocket and found diamonds and rubies and emeralds. And he was both glad and sorry. Glad that he had taken some and sorry that he hadn’t taken more. And so it is with education.*** ",
            bio2:
                "I'm former World Class Athlete, turned Fitness Training Coach, turned Software Engineer. After losing my leg in a motorcycle accident in 2009, I had finally found my way in my newly amputated life in 2012, when I was introduced to the sport of ParaTriathlon. Here, I would be racing against other athletes with the same level of disability as myself (above-knee amputee). In the year 2015 I had hit my personal peak with athletics getting a Gold medal at National championships, Silver medal at World Championships, a Bronze medal at Continental Championships and I became the first single-leg above-knee amputee to ever run a sub 20:00 5k in the entire World. After that, I ran my own fitness training and coaching business for 5 years. Using my education in Kinesiology, paired with my story of inspiration, my business flourished!",
            bio3:
                "But then sadly, due to Covid-19, my business was brought to a screeching hault. And that's when I thought,'Why don't I learn how to write software??' My favorite clients were always developers, so asking them for advice on the matter only seemed natural. After just 1 month of fully immersing myself in something that I originally knew nothing about, I came to realize that I had finally found the pebbles that I've been longing for. With the exception of the PechaKucha project, all of the web-applications displayed on my projects page are custom built by me, from scratch. On the contact page you'll find all of my contact info as well as my resume which can be viewed in a downloadable PDF",
            Levi:
                'A Northwestern University Full Stack Bootcamp graduate. Dedicated and driven individual with experience producing high quality, scalable, testable, full stack code. Quick to learn, hungry to learn more, full of passion and dedication, Levi will stop at nothing to deliver his absolute best. With creativity and ingenuity to fuel his fire, grit and hustle are two things that he cannot live without.',
            Lindsey:
                'Professional public health advocate and project manager with greater than 11 years of experience in fields of healthcare management, operations, policy, public health, research, higher education, and wellness. Highly developed skills in working effectively with a wide range of abilities and cultures. Displays genuine compassion and empathy for group needs. Perceived as a receptive, hands-on problem solver. Fast learner with an inquisitive, positive nature and a sense of humor while espousing career as a way of life. Earned a nationally ranked graduate degree in public health and certificate in project management.'
        };
    }
};
</script>

<style scoped></style>
