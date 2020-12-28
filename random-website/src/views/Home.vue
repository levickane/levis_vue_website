<template>
    <div>
        <home-levi-banner></home-levi-banner>
        <home-details></home-details>
    </div>
</template>

<script>
import HomeDetails from '../components/HomeDetails.vue';
import HomeLeviBanner from '../components/HomeLeviBanner.vue';
export default {
    name: 'Home',
    components: { HomeLeviBanner, HomeDetails },
};
</script>
