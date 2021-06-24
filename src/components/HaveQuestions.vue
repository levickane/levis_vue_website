<template>
    <v-container>
        <v-layout row wrap class="background">
            <v-col>
                <div class="text-h3 font-weight-bold">Have any Questions?</div>
                <v-btn
                    class="my-10 button font-weight-black"
                    align-bottom
                    justify-left
                    dark
                    to="/contact"
                    color="green"
                >
                    Hit me up!
                </v-btn>
            </v-col>
            <v-col cols="12" md="5" lg="5">
                <v-img
                    src="../assets/LeviKnows.jpeg"
                    height="300"
                    contain
                ></v-img>
            </v-col>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HaveQuestions'
};
</script>

<style scoped>
.background {
    background-color: rgb(0, 0, 0);
    border-radius: 10px;
    color: white;
}
</style>
