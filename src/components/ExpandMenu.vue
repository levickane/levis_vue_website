<template>
    <v-container>
        <v-layout row wrap>
            <v-col cols="12" lg="2" class="text-h6 font-weight-bold mt-5"
                >Frequently Asked Questions</v-col
            >
            <v-col cols="10" class="">
                <v-layout>
                    <v-col cols="12" class="shrink">
                        <v-col v-for="(item, index) in faqs" :key="index">
                            <v-layout>
                                <v-col
                                    cols="11"
                                    class="ma-2;"
                                    color="primary"
                                    @click="item.expand = !item.expand"
                                >
                                    {{ item.title }}
                                </v-col>
                                <v-col
                                    cols="1"
                                    @click="item.expand = !item.expand"
                                    ><v-icon
                                        v-if="!item.expand"
                                        medium
                                        color="black"
                                        >mdi-plus</v-icon
                                    ><v-icon
                                        v-if="item.expand"
                                        medium
                                        color="black"
                                        >mdi-close</v-icon
                                    ></v-col
                                >
                            </v-layout>
                            <v-expand-transition>
                                <v-card
                                    v-show="item.expand"
                                    class="mx-auto"
                                    elevation="0"
                                    >{{ item.text }}</v-card
                                >
                            </v-expand-transition>

                            <v-divider></v-divider>
                        </v-col>
                    </v-col>
                </v-layout>
            </v-col>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'ExpandMenu',
    data: () => ({
        faqs: [
            {
                title: 'Will I get thin if I pay you?',
                expand: false,
                text: 'No. You actually have to do the work'
            },
            {
                title: 'Do you specialize in Functional Training?',
                expand: false,
                text:
                    'Behind every movement is a function which produces the movement. Which essentially means that every type of training is functional training. So the answer is yes.'
            },
            {
                title: 'Do you help with dieting?',
                expand: false,
                text:
                    'I do not hold any sort of specialized nutrition certifications, however I do help you navigate the mess of excessive information that the media throws at you.'
            },
            {
                title: 'Do I still need a gym membership?',
                expand: false,
                text:
                    'Training with me once a week wont do much. You need to either put in the work at home or at a gym. I can provide you with exercises for both.'
            },
            {
                title:
                    'Will I reach my goals if I do exactly what you tell me to do?',
                expand: false,
                text:
                    "YES! I dont spend time writing you a plan just for fun. I do it because it will help you reach your goals. Follow it and you'll be successful. Deviate and results may vary"
            }
        ]
    })
};
</script>
