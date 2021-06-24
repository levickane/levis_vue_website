<template>
    <v-container>
        <v-layout row wrap class="mb-10">
            <v-col cols="12" lg="3" xl="3" class="text-h3 font-weight-bold"
                >Who Am I?</v-col
            >
            <v-col cols="9"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                pulvinar risus quis mauris interdum, in euismod nibh pretium.
                Etiam pulvinar tincidunt dapibus.<span class="black--text"
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
