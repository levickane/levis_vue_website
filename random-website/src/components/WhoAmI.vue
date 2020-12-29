<template>
    <v-container>
        <v-layout row wrap class="mb-10">
            <v-col cols="12" lg="3" class="text-h3 font-weight-bold"
                >Who Am I?</v-col
            >
            <v-col cols="9"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                pulvinar risus quis mauris interdum, in euismod nibh pretium.
                Etiam pulvinar tincidunt dapibus.<span class="black--text"
                    ><br /><br /><a
                        >Learn More
                        <v-icon large color="black">mdi-arrow-right</v-icon></a
                    ></span
                ></v-col
            >
        </v-layout>
        <hr />
    </v-container>
</template>

<script>
export default {
    name: 'WhoAmI',
};
</script>

<style scoped>
a {
    color: black;
}
</style>