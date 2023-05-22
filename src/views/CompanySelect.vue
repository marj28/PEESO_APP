<!-- <template>

    <div class="wrapper">
        <div class="one">
            <v-card class="mx-auto" max-width="100%" outlined>
                <v-list-item three-line>
                    <v-list-item-content>

                        <v-list-item-title class="text-h2 mb-1">
                            Private company
                        </v-list-item-title>
                        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                    </v-list-item-content>

                </v-list-item>
                <v-card-actions>
                    <v-btn outlined text @click="$router.push({ path: 'company-private' })" max-width="130px">
                        Button
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>
        <div class="two">
            <v-card class="mx-auto" max-width="100%" outlined>
                <v-list-item three-line>
                    <v-list-item-content>

                        <v-list-item-title class="text-h2 mb-1">
                            Government company
                        </v-list-item-title>
                        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                    </v-list-item-content>

                </v-list-item>
                <v-card-actions>
                    <v-btn outlined text @click="$router.push({ path: 'company-public' })" max-width="130px">
                        Button
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>

    </div>
</template>
<style>
.wrapper {

    display: grid;
    grid-template-columns: 50% 50%;

    margin-top: 5%;
    padding: 5px;
}

.one {
    width: 95%;

}

.two {
    width: 95%;

}
</style> -->

<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-text>
                        <div style="float:left;" class="mr-8">
                            <img :src="$store.state.systemlogo" width="110px">
                        </div>
                        <div style="min-height: 100px;">
                            <div class="text-h5 font-weight-bold text-primary">
                                Welcome
                            </div>
                            <div>Welcome to Tagum City - PEESO Program</div>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-toolbar dense elevation="1">
                        <div>
                            <v-menu offset-y>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn v-bind="attrs" v-on="on">Type of company</v-btn>
                                </template>
                                <v-list>
                                    <v-list-item @click="private_compay_button">
                                        <v-list-item-title>Private company</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                                <v-list>
                                    <v-list-item @click="public_company_button">
                                        <v-list-item-title>Public company</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                    </v-toolbar>
                    <div v-if="private_company">
                        <CompanyPrivate />
                    </div>
                    <div v-if="public_company">
                        
                        <CompanyPublic  />
                    </div>
                    <!-- <CompanyPrivate /> -->
                    <!-- <CompanyPublic /> -->
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
 

<script>
export default {
    data() {
        return {
            private_company: false,
            public_company: false
        };
    },
    methods: {
        private_compay_button() {
            this.private_company = true;
            this.public_company=false
        },
        public_company_button() {
            this.public_company = true;
            this.private_company=false
        }
    }
};
</script>
 