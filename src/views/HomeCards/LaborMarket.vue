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
                                        Youth Employment Support Volunteer Program (YESVP)
                                    </div>
                                    <v-divider color="success" :thickness="12" class="mt-2 mb-6"></v-divider>
                                    <p class="subtitle">A program for 15-25 years old Tagumenyo youth who wishes to be a
                                        volunteer in the offices of the City Government of Tagum and gain valuable work
                                        experience.</p>
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
                                        Project CARE (Cooperation, Action, Responsibility and Empowerment of OFW and their
                                        Families)
                                    </div>
                                    <v-divider color="success" :thickness="12" class="mt-2 mb-6"></v-divider>
                                    <p class="subtitle">A program intended to prepare the family and the OFW for their
                                        departure through the conduct of various seminars and lectures and facilitation of
                                        OFW assistance during and after deployment to be referred to the Department of
                                        Migrant Workers (DMW).</p>
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
                                        Project CARE (Cooperation, Action, Responsibility and Empowerment of OFW and their
                                        Families)
                                    </div>
                                    <v-divider color="success" :thickness="12" class="mt-2 mb-6"></v-divider>
                                    <p class="subtitle">A program intended to prepare the family and the OFW for their
                                        departure through the conduct of various seminars and lectures and facilitation of
                                        OFW assistance during and after deployment to be referred to the Department of
                                        Migrant Workers (DMW).</p>
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
                                        Special Recruitment Activity
                                    </div>
                                    <v-divider color="success" :thickness="12" class="mt-2 mb-6"></v-divider>
                                    <p class="subtitle">Overseas Employment Facilitation with employment agencies through a
                                        small size and exclusive recruitment activity.</p>
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
                                        Local Recruitment Activity
                                    </div>
                                    <v-divider color="success" :thickness="12" class="mt-2 mb-6"></v-divider>
                                    <p class="subtitle">Local employment facilitation with local companies through a small
                                        size and exclusive recruitment activity.</p>
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
                                        OFW Referral and Counselling
                                    </div>
                                    <v-divider color="success" :thickness="12" class="mt-2 mb-6"></v-divider>
                                    <p class="subtitle">This is a program of DOLE that caters the need and requests of OFWs
                                        and their families for assistance in all aspects to be forwarded to OWWA and POEA
                                        for appropriate measures. </p>
                                </div>
                            </v-card-item>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-app>
    </div>
</template>
 