<template>
    <div id="app">
        <v-app>
            <v-container>
                <v-btn
                    class="text-none primary"
                    min-width="80"
                    rounded
                    @click="$router.push('/home').catch((err) => {})"
                >
                <v-icon> mdi-arrow-left </v-icon>
                Back
                </v-btn>
                <v-row>
                    <v-col class="mt-2 mb-2" color="grey lighten-3" flat cols="12" md="4">
                        <v-card class="mx-auto" max-width="90%" variant="outlined"
                            style="padding:2%; margin-top:2%;height: 100%;">
                            <v-card-item>
                                <div>
                                    <div class="text-h5 mb-1" id="title">
                                        Government Internship Program
                                    </div>
                                    <v-divider color="success" :thickness="12" class="mt-2 mb-6"></v-divider>
                                    <p class="subtitle">Is a component of KABATAAN 2000 under Executive Order (EO) no. 139
                                        s. 1993, and DOLE Administrative Order No. 260-15, which aims to provide
                                        opportunities and engage young workers to serve general public in government
                                        agencies/entities projects and programs at the national and local level.</p>
                                </div>
                            </v-card-item>
                        </v-card>
                    </v-col>
                    <v-col class="mt-2 mb-2" color="grey lighten-3" flat cols="12" md="4">
                        <v-card class="mx-auto" max-width="90%" variant="outlined"
                            style="padding:2%; margin-top:2%;height:100%">
                            <v-card-item>
                                <div>
                                    <div class="text-h5 mb-1" id="title">
                                        Tulong Panghanapbuhay Para sa Ating Displaced and Disadvantaged Workers (TUPAD)
                                    </div>
                                    <v-divider color="success" :thickness="12" class="mt-2 mb-6"></v-divider>
                                    <p class="subtitle">Is a community-based package of assistance that provides emergency
                                        employment for displaced workers, underemployed and seasonal workers, for a minimum
                                        period of 10 days, but not to exceed a maximum of 30 days, depending on the nature
                                        of work to be performed.</p>
                                </div>
                            </v-card-item>
                        </v-card>
                    </v-col>

                </v-row>
            </v-container>
        </v-app>
    </div>
</template>
<style>
#title{
    color: green;
}
.subtitle{
    font-size: 16px;
    text-align: justify;
}
</style>
 