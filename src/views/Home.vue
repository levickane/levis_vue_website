<template>
    <div>
        <home-levi-banner></home-levi-banner>
        <home-details></home-details>
        <hr />
        <service-previews></service-previews>
        <hr />
        <who-am-i></who-am-i>
        <hr />
        <latest-and-greatest></latest-and-greatest>
        <read-testimonials></read-testimonials>
    </div>
</template>

<script>
import HomeDetails from '../components/HomeDetails.vue';
import HomeLeviBanner from '../components/HomeLeviBanner.vue';
import LatestAndGreatest from '../components/LatestAndGreatest.vue';
import ReadTestimonials from '../components/ReadTestimonials.vue';
import ServicePreviews from '../components/ServicePreviews.vue';
import WhoAmI from '../components/WhoAmI.vue';
export default {
    name: 'Home',
    components: {
        HomeLeviBanner,
        HomeDetails,
        WhoAmI,
        ServicePreviews,
        LatestAndGreatest,
        ReadTestimonials
    }
};
</script>
<style scoped></style>
