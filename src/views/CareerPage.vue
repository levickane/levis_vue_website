<template>
    <v-container fluid>
        <v-layout justify-left align-left column py-16 class="my-16">
            <div class="text-h1 font-weight-black black--text my-16 text-left">
                Careers
            </div>
        </v-layout>
        <hr />
        <v-layout row wrap class="my-5">
            <v-col cols="12" lg="3" xl="3" class="font-weight-black text-h4"
                >My Mission</v-col
            >
            <v-col style="font-size: 1.5em">
                {{ lorem }}
            </v-col>
        </v-layout>
        <hr />
        <open-positions></open-positions>
    </v-container>
</template>

<script>
import OpenPositions from '../components/OpenPositions.vue';
export default {
    components: { OpenPositions },
    name: 'CareerPage',
    data() {
        return {
            lorem:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar risus quis mauris interdum, in euismod nibh pretium. Etiam pulvinar tincidunt dapibus. Quisque sollicitudin, mauris a consequat consectetur, turpis nisl sollicitudin enim, id consectetur neque neque nec metus. Pellentesque dolor nisi, vulputate quis lobortis ac, tincidunt et quam. Mauris pulvinar blandit nisi nec mattis. Aliquam accumsan ut sem eget efficitur. Vivamus in tortor gravida eros laoreet condimentum nec vel dui. Nullam quam massa, ultrices eget tincidunt a, pulvinar ac libero.',
            Nullam:
                'Nullam nec massa eu est fringilla lobortis. Praesent in enim in justo blandit varius. Cras placerat arcu in sapien rhoncus aliquet. Sed interdum tortor et tincidunt condimentum. Etiam consequat mi leo, in suscipit odio scelerisque molestie. Nam et purus consequat, iaculis augue vel, sagittis ligula. Vestibulum aliquet vulputate erat. Phasellus id mauris mauris. Nunc a maximus dolor. Curabitur ut vestibulum arcu. Curabitur non lacus justo. Cras varius a magna in semper. Nulla eros ante, consectetur faucibus sapien eu, rhoncus imperdiet dui. Sed viverra iaculis nunc, id pulvinar massa egestas vitae.',
        };
    },
};
</script>

<style scoped>
</style>