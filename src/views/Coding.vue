<template>
    <v-container fluid>
        <v-layout justify-left align-left column py-16 class="my-16">
            <div class="text-h1 font-weight-black black--text text-left">
                Coding!
            </div>
            <div
                class="text-subtitle-1 font-weight-black black--text text-left mt-10"
            >
                A bunch of projects that I've either worked on or built myself
            </div>
        </v-layout>
        <hr class="mb-14" />
        <v-layout row wrap class="d-flex justify-center">
            <v-col
                cols="12"
                lg="6"
                md="6"
                v-for="(project, index) in projects"
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
    name: 'Coding',
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
