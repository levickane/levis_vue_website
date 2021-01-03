<template>
    <v-container fluid>
        <v-layout justify-left align-left column py-16 class="my-16">
            <div class="text-h1 font-weight-black black--text text-left my-16">
                Your Profile
            </div>
        </v-layout>
        <have-questions></have-questions>
    </v-container>
</template>

<script>
import HaveQuestions from '../components/HaveQuestions.vue';
export default {
    components: { HaveQuestions },
    name: 'ClientHome',
};
</script>

<style scoped>
</style>