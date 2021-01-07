<template>
    <div>
        <v-container fill-height>
            <v-layout align-center justify-center>
                <v-col xs="12" sm="10" md="8" lg="6">
                    <v-card class="elevation-12 font-weight-bold">
                        <v-toolbar dark color="red">Join My Life!</v-toolbar>
                        <v-card-text>
                            <v-form ref="form" v-model="valid" lazy-validation>
                                <v-text-field
                                    prepend-icon="mdi-account"
                                    name="email"
                                    label="Email"
                                    type="email"
                                    v-model="email"
                                    :rules="emailRules"
                                    required
                                >
                                </v-text-field>
                                <v-text-field
                                    prepend-icon="mdi-lock"
                                    name="password"
                                    label="Password"
                                    id="password"
                                    type="password"
                                    required
                                    v-model="password"
                                    :rules="passwordRules"
                                >
                                </v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                dark
                                color="black"
                                :disabled="!valid"
                                @click="submit"
                                >Join</v-btn
                            >
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-layout>
        </v-container>
        <have-questions></have-questions>
    </div>
</template>

<script>
import HaveQuestions from '../components/HaveQuestions.vue';
export default {
    components: { HaveQuestions },
    name: 'ClientJoin',
    data() {
        return {
            valid: false,
            email: '',
            password: '',
            emailRules: [
                (v) => !!v || 'E-mail is required',
                (v) => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            passwordRules: [
                (v) => !!v || 'Password is required',
                (v) =>
                    v.length >= 6 ||
                    'Password must be greater than 6 characters',
            ],
        };
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('userJoin', {
                    email: this.email,
                    password: this.password,
                });
            }
        },
    },
};
</script>

<style scoped>
</style>