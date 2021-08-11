<template>
    <v-container>
        <v-layout column>
            <v-col class="text-h3 my-5"
                >Making Normal Software Abnormally Awesome</v-col
            >
            <v-col>
                <div class="headline mt-3">Lorem ipsum</div>

                <p class="body-1 mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras pulvinar risus quis mauris interdum, in euismod nibh
                    pretium. Etiam pulvinar tincidunt dapibus. Quisque
                    sollicitudin, mauris a consequat consectetur, turpis nisl
                    sollicitudin enim, id consectetur neque neque nec metus.
                    Pellentesque dolor nisi, vulputate quis lobortis ac,
                    tincidunt et quam. Mauris pulvinar blandit nisi nec mattis.
                    Aliquam accumsan ut sem eget efficitur. Vivamus in tortor
                    gravida eros laoreet condimentum nec vel dui. Nullam quam
                    massa, ultrices eget tincidunt a, pulvinar ac libero.
                </p>
                <my-video></my-video>
            </v-col>
        </v-layout>
    </v-container>
</template>

<script>
import MyVideo from './MyVideo.vue';
export default {
    components: { MyVideo },
    name: 'HomeDetails'
};
</script>

<style scoped></style>
