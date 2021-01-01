<template>
    <v-container>
        <v-layout class="background">
            <v-col>
                <div class="text-h3 font-weight-bold">Careers</div>
                <p>
                    Looking to be apart of the greatest thing on the face of the
                    earth??
                </p>
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
            <v-col cols="5">
                <v-img
                    src="../assets/LeviKnows.jpg"
                    height="300"
                    contain
                ></v-img>
            </v-col>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Careers',
};
</script>

<style scoped>
.background {
    background-color: rgb(24, 23, 23);
    border-radius: 10px;
    color: white;
}
</style>