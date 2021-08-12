<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-col class="font-weight-black text-h4">My Latest Projects</v-col>
        </v-layout>
        <v-layout row wrap>
            <v-col
                cols="12"
                lg="4"
                md="4"
                v-for="(project, index) in projects.slice(0, 3)"
                :key="index"
            >
                <v-card class="pa-2">
                    <v-img
                        :src="require(`../assets/${project.image}.png`)"
                        height="400"
                        style="border: solid; border-width:1px; border-radius: 2%"
                    />
                    <h1>{{ project.title }}</h1>
                    <h4>Technologies Used: {{ project.technologies }}</h4>
                    <v-col @click="project.expand = !project.expand">
                        <v-btn v-if="!project.expand" depressed color="white"
                            ><em>Show Description</em></v-btn
                        >
                        <v-btn v-if="project.expand" depressed color="white"
                            ><em>Hide Description</em></v-btn
                        >
                        <v-expand-transition>
                            <p v-show="project.expand">
                                {{ project.description }}
                            </p>
                        </v-expand-transition>
                    </v-col>
                    <v-btn color="green" class="mr-2"
                        ><a
                            style="text-decoration: none; color:white"
                            :href="`${project.link}`"
                            target="_blank"
                            >Live Link</a
                        ></v-btn
                    >
                    <v-btn v-if="project.githubLink"
                        ><a
                            style="text-decoration: none; color:black"
                            :href="`${project.githubLink}`"
                            >Github</a
                        ></v-btn
                    >
                </v-card>
            </v-col>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'NewsCarousel',
    data: () => ({
        projects: {}
    }),

    async created() {
        const projectData = await this.$store.dispatch('getProjects');
        this.projects = projectData;
    }
};
</script>

<style scoped></style>
