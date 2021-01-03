<template>
    <v-container>
        <v-layout row wrap>
            <v-col cols="12" lg="3" class="text-h6 font-weight-bold"
                >Open Positions</v-col
            >
            <v-col cols="9">
                <v-layout>
                    <v-col cols="12" class="shrink">
                        <v-col v-for="(job, index) in jobs" :key="index">
                            <v-layout>
                                <v-col cols="5" class="ma-2;" color="primary">
                                    {{ job.title }}
                                </v-col>
                                <v-col cols="5" class="text--disabled">
                                    {{ job.location }}
                                </v-col>
                                <v-col cols="2"
                                    >Apply<v-icon medium color="black"
                                        >mdi-arrow-right</v-icon
                                    ></v-col
                                >
                            </v-layout>

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
    name: 'OpenPositons',
    data() {
        return {
            jobs: [
                { title: 'Job #1', type: 'Engineer', location: 'USA' },
                { title: 'Job #2', type: 'Design', location: 'Mexico' },
                { title: 'Job #3', type: 'Design', location: 'Italy' },
                { title: 'Job #4', type: 'Engineer', location: 'Hungary' },
                { title: 'Job #5', type: 'Finance', location: 'Kroatia' },
                { title: 'Job #6', type: 'Engineer', location: 'Nepal' },
            ],
        };
    },
};
</script>