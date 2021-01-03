<template>
    <v-container>
        <v-layout row wrap>
            <v-col cols="12" lg="3" class="text-h6 font-weight-bold"
                >Frequently Asked Questions</v-col
            >
            <v-col cols="9">
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
                                    ><v-icon medium color="black"
                                        >mdi-plus</v-icon
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
                title: 'Title #1',
                expand: false,
                text:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar risus quis mauris interdum, in euismod nibh pretium. Etiam pulvinar tincidunt dapibus. Quisque sollicitudin, mauris a consequat consectetur, turpis nisl sollicitudin enim, id consectetur neque neque nec metus. Pellentesque dolor nisi, vulputate quis lobortis ac, tincidunt et quam. Mauris pulvinar blandit nisi nec mattis. Aliquam accumsan ut sem eget efficitur. Vivamus in tortor gravida eros laoreet condimentum nec vel dui. Nullam quam massa, ultrices eget tincidunt a, pulvinar ac libero.',
            },
            {
                title: 'Title #2',
                expand: false,
                text:
                    'Nullam nec massa eu est fringilla lobortis. Praesent in enim in justo blandit varius. Cras placerat arcu in sapien rhoncus aliquet. Sed interdum tortor et tincidunt condimentum. Etiam consequat mi leo, in suscipit odio scelerisque molestie. Nam et purus consequat, iaculis augue vel, sagittis ligula. Vestibulum aliquet vulputate erat. Phasellus id mauris mauris. Nunc a maximus dolor. Curabitur ut vestibulum arcu. Curabitur non lacus justo. Cras varius a magna in semper. Nulla eros ante, consectetur faucibus sapien eu, rhoncus imperdiet dui. Sed viverra iaculis nunc, id pulvinar massa egestas vitae.',
            },
            {
                title: 'Title #3',
                expand: false,
                text:
                    'Aenean erat metus, imperdiet eget nisl laoreet, venenatis ultricies ante. In interdum ante vel dictum ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer sit amet gravida diam. Aliquam in tempor metus. Fusce pellentesque pharetra sem, et luctus justo tempor dictum.',
            },
            {
                title: 'Title #4',
                expand: false,
                text:
                    'Ut feugiat est sed tristique egestas. Nullam posuere a nunc in blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse laoreet ultrices eros, nec malesuada enim semper sit amet. ',
            },
            {
                title: 'Title #5',
                expand: false,
                text:
                    'Maecenas efficitur consectetur accumsan. Etiam in aliquam turpis, ut pharetra nulla. Vestibulum malesuada, nulla id elementum cursus, nibh dui rhoncus felis, suscipit mattis felis enim sed ex. Pellentesque scelerisque aliquam lorem, vel mattis nibh tincidunt ac. Suspendisse ac nibh sit amet lacus ullamcorper maximus.',
            },
            {
                title: 'Title #6',
                expand: false,
                text:
                    'Aliquam accumsan ut sem eget efficitur. Vivamus in tortor gravida eros laoreet condimentum nec vel dui. Nullam quam massa, ultrices eget tincidunt a, pulvinar ac libero.',
            },
        ],
    }),
};
</script>