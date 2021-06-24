<template>
    <v-container>
        <v-layout row wrap>
            <v-col cols="12" lg="3" class="text-h6 font-weight-bold"
                >Open Positions</v-col
            >
            <v-col cols="9">
                <v-simple-table
                    v-for="(type, index) in Object.keys(jobs)"
                    :key="index"
                >
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th
                                    colspan="3"
                                    class="text-left black--text"
                                    style="font-size: 1em"
                                >
                                    {{ type }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(job, index) in jobs[type]" :key="index">
                                <td>{{ job.title }}</td>
                                <td class="text-center text--disabled">
                                    {{ job.location }}
                                </td>
                                <td class="text-right">
                                    <router-link
                                        to="/contact"
                                        class="text-decoration-none black--text"
                                    >
                                        Apply<v-icon medium color="black"
                                            >mdi-arrow-right</v-icon
                                        ></router-link
                                    >
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'OpenPositons',
    data() {
        return {
            jobs: {}
        };
    },
    async created() {
        const jobData = await this.$store.dispatch('getJobs');
        this.jobs = jobData.jobs;
    }
};
</script>
