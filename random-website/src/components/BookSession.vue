<template>
    <v-layout class="my-10" row wrap>
        <v-col cols="12" lg="5" class="ml-5 pr-15">
            <v-col class="text-h3 font-weight-bold"
                >Ready to start living?</v-col
            >
            <v-col class="text-h3 font-weight-bold"
                >Book something today!</v-col
            >
            <v-col
                ><v-icon large>mdi-microsoft-windows</v-icon
                ><v-icon large class="mx-4">mdi-apple</v-icon
                ><span style="font-size: 0.75em">Comming Soon</span></v-col
            >
            <v-col class="pr-16 mr-10"
                >Break free from doing the same old, same old, same-old! Levi
                Kane is your answer to invigorating and meaningful real life
                human living</v-col
            >
        </v-col>
        <v-col cols="1 hidden-md-and-down"></v-col>
        <v-col class="mr-5">
            <v-form
                ref="form"
                v-model="valid"
                method="POST"
                lazy-validation
                @submit="saveContactMessage"
            >
                <v-col class="pb-0">
                    <v-text-field
                        outlined="true"
                        v-model="name"
                        placeholder="Jane Smith"
                        label="Name"
                        :rules="nameRules"
                        required
                    ></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field
                        outlined="true"
                        v-model="email"
                        placeholder="you@company.com"
                        :rules="emailRules"
                        label="Email"
                        required
                    ></v-text-field>
                </v-col>
                <v-col>
                    <v-textarea
                        outlined="true"
                        placeholder="I would like to use Levi Kane for an awesome company gathering of over 200 people"
                        :rules="messageRules"
                        :counter="500"
                        label="Message"
                        required
                    ></v-textarea>
                    <v-btn
                        width="100%"
                        dark
                        :disabled="!valid"
                        color="black"
                        class="mr-4"
                        @click="saveContactMessage"
                    >
                        Submit
                    </v-btn>
                </v-col>

                <v-col class="mt-5 text--secondary">
                    <p>
                        I need the contact information that you provide me in
                        order to contact you about all of my cool shit that I
                        do. You can unsubscribe from my spam at anytime. For
                        information on how to unsubscribe, as well as our
                        privacy practices and commitment to protecting your
                        privacy, please visit our
                        <router-link
                            to="/privacy"
                            style="text-decoration: none; color: black"
                            >Privacy Policy</router-link
                        >
                    </p>
                </v-col>
            </v-form>
        </v-col>
    </v-layout>
</template>

<script>
import router from '@/router';
export default {
    name: 'BookSession',
    data: () => ({
        valid: true,
        name: '',
        nameRules: [(v) => !!v || 'Name is required'],
        email: '',
        emailRules: [
            (v) => !!v || 'E-mail is required',
            (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        message: '',
        messageRules: [
            (v) => !!v || 'A message is required',
            (v) =>
                (v && v.length >= 20) ||
                'Enter a message with at least 20 characters',
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