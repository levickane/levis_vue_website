<template>
    <v-container fluid class="hero">
        <v-layout justify-left align-left column py-16 class="my-16">
            <div class="text-h1 font-weight-black black--text text-left">
                Real Estate!
            </div>
            <div
                class="text-subtitle-1 font-weight-black black--text text-left mt-10"
            >
                Easily calculate your ROI when investing in multi-units
            </div>
        </v-layout>
        <hr class="mb-14" />
        <v-layout row wrap class="d-flex justify-center">
            <v-col cols="12" sm="8">
                <v-card class="pa-5 rounded-lg" color="rgb(255, 255, 255, 0.8)">
                    <v-card-title class="text-center"
                        >Calculate your monthly ROI</v-card-title
                    >
                    <v-card-text class="text-center"
                        >***For best results, be conservative in your
                        projections***</v-card-text
                    >
                    <form @submit.prevent="submit">
                        <v-layout row wrap class="d-flex justify-center">
                            <v-col cols="6">
                                <v-text-field
                                    v-model="potentialMoney"
                                    :rules="[rules.number]"
                                    label="Money On Hand"
                                    append-icon="mdi-currency-usd"
                                    type="number"
                                ></v-text-field>

                                <v-text-field
                                    v-model="purchasePrice"
                                    :rules="[rules.number]"
                                    label="Purchase Price"
                                    append-icon="mdi-currency-usd"
                                    required
                                    type="number"
                                ></v-text-field>

                                <v-text-field
                                    v-model="annualTax"
                                    :rules="[rules.number]"
                                    label="Annual Tax Amount"
                                    append-icon="mdi-currency-usd"
                                    required
                                    type="number"
                                ></v-text-field>

                                <v-select
                                    v-model="percentDown"
                                    :items="dpOptions"
                                    label="Down Payment Amount"
                                    data-vv-name="PercentDown"
                                    type="text"
                                    required
                                ></v-select>

                                <v-text-field
                                    v-model="interestRate"
                                    :rules="[rules.number]"
                                    label="Interest Rate"
                                ></v-text-field>

                                <v-text-field
                                    v-model="insurance"
                                    :rules="[rules.number]"
                                    label="Monthly Insurance Amount"
                                    append-icon="mdi-currency-usd"
                                    required
                                    type="number"
                                ></v-text-field>

                                <v-text-field
                                    v-model="utilities"
                                    :rules="[rules.number]"
                                    label="Est. Monthly Utilities"
                                    append-icon="mdi-currency-usd"
                                    required
                                    type="number"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field
                                    v-model="unit1"
                                    :rules="[rules.number]"
                                    label="Unit 1 Rent"
                                    append-icon="mdi-currency-usd"
                                    type="number"
                                ></v-text-field>

                                <v-text-field
                                    v-model="unit2"
                                    :rules="[rules.number]"
                                    label="Unit 2 Rent"
                                    append-icon="mdi-currency-usd"
                                    type="number"
                                ></v-text-field>

                                <v-text-field
                                    v-model="unit3"
                                    :rules="[rules.number]"
                                    label="Unit 3 Rent"
                                    append-icon="mdi-currency-usd"
                                    type="number"
                                ></v-text-field>
                                <v-text-field
                                    v-model="unit4"
                                    :rules="[rules.number]"
                                    label="Unit 4 Rent"
                                    append-icon="mdi-currency-usd"
                                    type="number"
                                ></v-text-field>
                                <v-text-field
                                    v-model="unit5"
                                    :rules="[rules.number]"
                                    label="Unit 5 Rent"
                                    append-icon="mdi-currency-usd"
                                    type="number"
                                ></v-text-field>
                                <v-text-field
                                    v-model="bonusUnit"
                                    :rules="[rules.number]"
                                    label="Bonus Unit Rent"
                                    append-icon="mdi-currency-usd"
                                    type="number"
                                ></v-text-field>
                                <v-text-field
                                    v-model="parkingRent"
                                    :rules="[rules.number]"
                                    label="Parking Rent"
                                    append-icon="mdi-currency-usd"
                                    type="number"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" class="d-flex justify-end mb-2">
                                <v-btn class="mr-4" type="submit">
                                    submit
                                </v-btn>
                                <v-btn @click="clear">
                                    clear
                                </v-btn>
                            </v-col>
                        </v-layout>
                    </form>
                </v-card>
                <v-card
                    class="pa-5 mt-10 rounded-lg"
                    color="rgb(255, 255, 255, 0.8)"
                >
                    <h4>
                        Down Payment: ${{
                            percentDown !== '100%'
                                ? downPayment.toFixed(2)
                                : downPayment
                        }}
                    </h4>
                    <h4>
                        Money left in your bank after purchase: ${{
                            leftOverMoney.toFixed(2)
                        }}
                    </h4>
                    <h4>
                        Estimated monthly payment (with Utilities{{
                            PMIincluded
                        }}): ${{ MonthlyPayment.toFixed(2) }}
                    </h4>
                    <h2>Potential Income: ${{ Income.toFixed(2) }}</h2>
                </v-card>
            </v-col>
        </v-layout>
    </v-container>
</template>

<script>
import mortgageHelpers from 'mortgage-helpers';
export default {
    name: 'RealEstate',
    data: () => ({
        rules: {
            number: value => {
                const numPattern = /^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/;
                return numPattern.test(value) || 'Please enter numbers only';
            }
        },
        potentialMoney: '',
        purchasePrice: '',
        annualTax: '',
        dpOptions: ['3.5%', '5%', '10%', '15%', '20%', '25%', '100%'],
        percentDown: null,
        interestRate: 0,
        insurance: 150,
        utilities: 400,
        unit1: 0,
        unit2: 0,
        unit3: 0,
        unit4: 0,
        unit5: 0,
        bonusUnit: 0,
        parkingRent: 0,
        downPayment: 0,
        leftOverMoney: 0,
        MonthlyPayment: 0,
        Income: 0,
        PMIincluded: '',
        googleQuery: ''
    }),

    methods: {
        submit() {
            const switchPercentToDecimal = amount => {
                switch (amount) {
                    case '3.5%':
                        return 0.035;
                    case '5%':
                        return 0.05;
                    case '10%':
                        return 0.1;
                    case '15%':
                        return 0.15;
                    case '20%':
                        return 0.2;
                    case '25%':
                        return 0.25;
                    case '100%':
                        return 1;
                }
            };
            const dpDecimal = switchPercentToDecimal(this.percentDown);
            this.downPayment =
                dpDecimal <= 0.25
                    ? this.purchasePrice * dpDecimal
                    : this.purchasePrice;
            const loanAmount = this.purchasePrice - this.downPayment;
            const monthlyPmt =
                dpDecimal <= 0.25
                    ? mortgageHelpers.getMonthlyPayments(
                          loanAmount,
                          parseFloat(this.interestRate),
                          360
                      )
                    : 0;

            const unit1 = parseInt(this.unit1);
            const unit2 = parseInt(this.unit2);
            const unit3 = parseInt(this.unit3);
            const unit4 = parseInt(this.unit4);
            const unit5 = parseInt(this.unit5);
            const bonusUnit = parseInt(this.bonusUnit);
            const parkingRent = parseInt(this.parkingRent);
            const monthlyPropTax = parseFloat(this.annualTax) / 12;
            const totalIncome =
                unit1 + unit2 + unit3 + unit4 + unit5 + bonusUnit + parkingRent;

            this.leftOverMoney = this.potentialMoney - this.downPayment;

            const monthlyPay =
                monthlyPmt +
                monthlyPropTax +
                parseInt(this.utilities) +
                parseInt(this.insurance);
            const paidInFullPmt =
                monthlyPropTax +
                parseInt(this.utilities) +
                parseInt(this.insurance);
            if (dpDecimal < 0.2) {
                this.MonthlyPayment = monthlyPay + 250;
                this.PMIincluded = ' & PMI';
            } else if (dpDecimal > 0.25) {
                this.MonthlyPayment = paidInFullPmt;
                this.PMIincluded = '';
            } else {
                this.MonthlyPayment = monthlyPay;
                this.PMIincluded = '';
            }

            this.Income = totalIncome - this.MonthlyPayment;
        },
        clear() {
            this.potentialMoney = '';
            this.purchasePrice = '';
            this.annualTax = '';
            this.percentDown = null;
            this.interestRate = '';
            this.insurance = '';
            this.utilities = '';
            this.unit1 = 0;
            this.unit2 = 0;
            this.unit3 = 0;
            this.unit4 = 0;
            this.unit5 = 0;
            this.bonusUnit = 0;
            this.parkingRent = 0;
            this.$refs.observer.reset();
        }
    }
};
</script>

<style scoped>
.hero {
    background-image: url('../assets/chicago-3-flats.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
}
@media only screen and (max-width: 515px) {
    .hero {
        background-image: url('../assets/chicago-3-flats.jpeg');
        height: 100%;
    }
}
</style>
