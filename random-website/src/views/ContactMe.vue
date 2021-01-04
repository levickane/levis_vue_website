<template>
    <v-container fluid>
        <v-layout justify-left align-left column py-16 class="my-16">
            <div
                class="text-h1 font-weight-black black--text text-decoration-underline text-left"
            >
                Contact Me
            </div>
            <div
                class="text-subtitle-1 font-weight-black black--text text-left mt-10"
            >
                A contact page built from scratch using Vue/Vuex/Routers
            </div>
        </v-layout>
        <hr />
        <v-layout class="my-10" row wrap>
            <v-col class="text-h3 font-weight-bold" cols="12" lg="3"
                >Contact Me!</v-col
            >
            <v-col>
                <v-form
                    ref="form"
                    v-model="valid"
                    method="POST"
                    lazy-validation
                    @submit="saveContactMessage"
                >
                    <v-col cols="12" md="8">
                        <v-text-field
                            outlined="true"
                            v-model="name"
                            :rules="nameRules"
                            label="Name"
                            required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="8">
                        <v-text-field
                            outlined="true"
                            v-model="email"
                            :rules="emailRules"
                            label="Email"
                            required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="8">
                        <v-text-field
                            outlined="true"
                            v-model="phone"
                            :rules="phoneRules"
                            :counter="10"
                            label="Phone Number"
                            required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="8">
                        <v-text-field
                            outlined="true"
                            v-model="organization"
                            :rules="organizationRules"
                            label="Organization"
                            required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="8">
                        <v-text-field
                            outlined="true"
                            v-model="location"
                            :rules="locationRules"
                            label="Location"
                            required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="8">
                        <v-textarea
                            outlined="true"
                            v-model="message"
                            :rules="messageRules"
                            :counter="500"
                            label="Message"
                            required
                        ></v-textarea>
                    </v-col>
                    <v-btn
                        dark
                        :disabled="!valid"
                        color="black"
                        class="mr-4"
                        @click="saveContactMessage"
                    >
                        Submit
                    </v-btn>
                </v-form>
            </v-col>
        </v-layout>
        <read-testimonials></read-testimonials>
    </v-container>
</template>

<script>
import router from '@/router';
import ReadTestimonials from '../components/ReadTestimonials.vue';
export default {
    components: { ReadTestimonials },
    name: 'ContactMe',
    data: () => ({
        valid: true,
        name: '',
        nameRules: [(v) => !!v || 'Name is required'],
        email: '',
        emailRules: [
            (v) => !!v || 'E-mail is required',
            (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        phone: '',
        phoneRules: [
            (v) => !!v || 'Phone number is required',
            (v) => /^\d+$/.test(v) || 'This field only accepts numbers',
            (v) =>
                /^\d{10}$/.test(v) ||
                'Must enter a valid 10-digit phone number',
        ],
        organization: '',
        organizationRules: [(v) => !!v || 'Input is required'],
        location: '',
        locationRules: [(v) => !!v || 'Location is required'],
        message: '',
        messageRules: [
            (v) => !!v || 'A message is required',
            (v) =>
                (v && v.length >= 50) ||
                'Enter a message with at least 50 characters',
        ],
    }),
    methods: {
        saveContactMessage: function (e) {
            e.preventDefault();
            const messagesRef = this.$firebaseDatabase.collection('message');
            messagesRef.add({
                name: this.name,
                email: this.email,
                phone: this.phone,
                organization: this.organization,
                location: this.location,
                message: this.message,
                time: new Date(),
            });
            (this.name = ''),
                (this.email = ''),
                (this.phone = ''),
                (this.organization = ''),
                (this.location = ''),
                (this.message = ''),
                (this.submitted = true),
                (this.snackbar = false);
            router.push('/');
        },
    },
};
</script>

<style scoped>
</style>