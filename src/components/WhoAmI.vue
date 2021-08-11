<template>
    <v-container>
        <v-layout row wrap class="mb-10">
            <v-col cols="12" lg="3" xl="3" class="text-h3 font-weight-bold"
                >Who Am I?</v-col
            >
            <v-col cols="9"
                >A Northwestern University Full Stack Bootcamp graduate.
                Dedicated and driven individual with experience producing high
                quality, scalable, testable, full stack code. Quick to learn,
                hungry to learn more, full of passion and dedication, Levi will
                stop at nothing to deliver his absolute best. With creativity
                and ingenuity to fuel his fire, grit and hustle are two things
                that he cannot live without.<span class="black--text"
                    ><br /><br /><router-link
                        style="text-decoration: none; color: black"
                        to="/about"
                        >Learn More
                        <v-icon large color="black"
                            >mdi-arrow-right</v-icon
                        ></router-link
                    ></span
                ></v-col
            >
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'WhoAmI'
};
</script>

<style scoped>
a {
    color: black;
}
</style>
