<template>
    <!-- <v-container fluid style="background-color: black"> -->
    <v-container fluid class="hero">
        <v-layout justify-left align-left column pa-5 row wrap class="titles">
            <div
                class="title1 text-h1 font-weight-black text-decoration-underline text-left"
            >
                LEVI KANE
            </div>
            <div
                class="title2  text-h4 text-lg-h1 text-xl-h1 font-weight-bold text-left"
            >
                Software Engineer
            </div>
            <div
                class="title3 text-subtitle-1 font-weight-black  text-left mt-10"
            >
                A website built from scratch using Vue/Vuex/Routers and
                Firebase/Firestore
            </div>
        </v-layout>
        <v-btn
            class="font-weight-black"
            justify-left
            dark
            to="/testimonials"
            color="green"
        >
            Testimonials
        </v-btn>
    </v-container>
</template>

<script>
export default {
    name: 'HomeLeviBanner'
};
</script>

<style scoped>
.hero {
    background-image: url('../assets/logo.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}
.title1 {
    margin-top: 100px;
}
.title2 {
    margin-top: 50px;
}
@media only screen and (max-width: 515px) {
    .hero {
        background-image: url('../assets/logo.jpg');
        height: 100%;
    }
    .title1 {
        transform: scale(0.8);
        margin-left: -30px;
        margin-top: -30px;
    }
    .title2 {
        transform: scale(0.8);
        margin-left: -30px;
        margin-top: -20px;
    }
    .title3 {
        display: none;
    }
    .titles {
        margin: none;
    }
}
</style>
