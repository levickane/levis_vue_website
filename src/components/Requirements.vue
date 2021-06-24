<template>
    <v-container fluit>
        <v-layout row wrap>
            <v-col cols="12" md="3" class="text-h6 font-weight-bold mt-5"
                >System Requirements</v-col
            >
            <v-col cols="12" md="4" class="mt-5 pr-16">
                <v-simple-table
                    class="mytable"
                    v-for="(type, index) in Object.keys(system).slice(0, 1)"
                    :key="index"
                >
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th
                                    class="text-left black--text"
                                    style="font-size: 1em"
                                >
                                    {{ type }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(item, index) in system[type]"
                                :key="index"
                            >
                                <td>
                                    <span
                                        class="text--disabled"
                                        style="font-size: 0.95em"
                                        >{{ item.name }}</span
                                    >
                                    <br />
                                    {{ item.details }}
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
            <v-col cols="12" md="4" class="mt-5 pr-16">
                <v-simple-table
                    class="mytable"
                    v-for="(type, index) in Object.keys(system).slice(1, 2)"
                    :key="index"
                >
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th
                                    class="text-left black--text"
                                    style="font-size: 1em"
                                >
                                    {{ type }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(item, index) in system[type]"
                                :key="index"
                            >
                                <td>
                                    <span
                                        class="text--disabled"
                                        style="font-size: 0.95em"
                                        >{{ item.name }}</span
                                    >
                                    <br />
                                    {{ item.details }}
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Requirements',
    data() {
        return {
            system: {}
        };
    },
    async created() {
        const systemData = await this.$store.dispatch('getSystem');
        this.system = systemData.system;
    }
};
</script>

<style scoped>
.mytable th,
td {
    border-bottom: none !important;
}
</style>
