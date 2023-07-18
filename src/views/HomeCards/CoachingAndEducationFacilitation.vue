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
                                        Career Guidance and Employment Coaching
                                    </div>
                                    <v-divider color="success" :thickness="12" class="mt-2 mb-6"></v-divider>
                                    <p class="subtitle">It is a conduct of assessment and seminar to Grade 6, Grade 10 and
                                        Grade 12
                                        students to provide guidance on their career path, provide Labor Market Information
                                        and
                                        career
                                        options.</p>
                                        
                                </div>
                            </v-card-item>
                        </v-card>
                    </v-col>
                    <v-col class="mt-2 mb-2" color="grey lighten-3" flat cols="12" md="4">
                        <v-card class="mx-auto" max-width="90%" variant="outlined"
                            style="padding:2%; margin-top:2%;height:100%">
                            <v-card-item>
                                <div>
                                    <div  class="text-h5 mb-1" id="title">
                                        Labor Education for Graduating Students (LEGS)
                                    </div>
                                    <v-divider color="success" :thickness="12" class="mt-2 mb-6"></v-divider>
                                    <p class="subtitle">Intended for college graduating students where they are given an
                                        orientation on what to expect in the world of employment which also includes
                                        orientation
                                        from DOLE, SSS, Pag-ibig and Philhealth.</p>
                                </div>
                            </v-card-item>
                        </v-card>
                    </v-col>
                    <v-col class="mt-2 mb-2" color="grey lighten-3" flat cols="12" md="4">
                        <v-card class="mx-auto" max-width="90%" variant="outlined"
                            style="padding:2%; margin-top:2%;height:100%">
                            <v-card-item>
                                <div>
                                    <div  class="text-h5 mb-1" id="title">
                                        Basic Educational Aid Program (BEAP)
                                    </div>
                                    <v-divider color="success" :thickness="12" class="mt-2 mb-6"></v-divider>
                                    <p class="subtitle">This is established through City Ordinance No. 770 s. – 2016,
                                        intended for the DepEd teaching and non-teaching personnel including retirees within
                                        the year of implementation.
                                        The program provides yearly accident insurance of P 100.00 and cash incentives of
                                        P2,400.00 per individual.</p>
                                </div>
                            </v-card-item>
                           
                        </v-card>
                    </v-col>
                    <v-col class="mt-2 mb-2" color="grey lighten-3" flat cols="12" md="4">
                        <v-card class="mx-auto" max-width="90%" variant="outlined"
                            style="padding:2%; margin-top:2%;height:100%">
                            <v-card-item>
                                <div>
                                    <div  class="text-h5 mb-1" id="title">
                                        Pre-employment Seminar for Local Applicants
                                    </div>
                                    <v-divider color="success" :thickness="12" class="mt-2 mb-6"></v-divider>
                                    <p class="subtitle">It is an orientation to all local job seekers and graduating Senior
                                        High
                                        School and College Students. This is composed of information the things they need to
                                        prepare
                                        as they apply for jobs from documents to Work Ethics.</p>
                                </div>
                            </v-card-item>
                        </v-card>
                    </v-col>
                    <v-col class="mt-2 mb-2" color="grey lighten-3" flat cols="12" md="4">
                        <v-card class="mx-auto" max-width="90%" variant="outlined"
                            style="padding:2%; margin-top:2%;height:100%">
                            <v-card-item>
                                <div>
                                    <div  class="text-h5 mb-1" id="title">
                                        Expanded City Educational Scholarship Program (E-CESPRO)
                                    </div>
                                    <v-divider color="success" :thickness="12" class="mt-2 mb-6"></v-divider>
                                    <p class="subtitle">A scholarship program intended to Tagumenyo college students taking
                                        4-5
                                        year courses except to those enrolled in State Universities.</p>
                                </div>
                            </v-card-item>
                        </v-card>
                    </v-col>
                    <v-col class="mt-2 mb-2" color="grey lighten-3" flat cols="12" md="4">
                        <v-card class="mx-auto" max-width="90%" variant="outlined"
                            style="padding:2%; margin-top:2%;height:100%">
                            <v-card-item>
                                <div>
                                    <div  class="text-h5 mb-1" id="title">
                                        Sulong Dunong Educational Assistance Program
                                    </div>
                                    <v-divider color="success" :thickness="12" class="mt-2 mb-6"></v-divider>
                                    <p class="subtitle">It is intended for Secondary level students enrolled in public
                                        schools
                                        within the city.
                                        Grantees is entitled with P 500.00 payment for PTA Fees and P 500.00 allowance for a
                                        total
                                        of P 1,000.00 per grantee.</p>
                                </div>
                            </v-card-item>
                        </v-card>
                    </v-col>
                    <v-col class="mt-2 mb-2" color="grey lighten-3" flat cols="12" md="4">
                        <v-card class="mx-auto" max-width="90%" variant="outlined"
                            style="padding:2%; margin-top:2%;height:100%">
                            <v-card-item>
                                <div>
                                    <div  class="text-h5 mb-1" id="title">
                                        Mental Health
                                    </div>
                                    <v-divider color="success" :thickness="12" class="mt-2 mb-6"></v-divider>
                                    <p class="subtitle">Emanating from the City Mayor’s Office, various City Offices have
                                        worked together for the common goal of addressing the Mental Health concerns of
                                        Tagumenyos.

                                        With this, the Education Division of PEESO is tasked to lead the Mental Health
                                        interventions for all in-school Tagumenyo youth particularly in the conduct of
                                        relative talks and seminars with the resident Psychometrician of the office.</p>
                                </div>
                            </v-card-item>
                        </v-card>
                    </v-col>
                    <v-col class="mt-2 mb-2" color="grey lighten-3" flat cols="12" md="4">
                        <v-card class="mx-auto" max-width="90%" variant="outlined"
                            style="padding:2%; margin-top:2%;height:100%">
                            <v-card-item>
                                <div>
                                    <div  class="text-h5 mb-1" id="title">
                                        Adolescents Welfare Campaign
                                    </div>
                                    <v-divider color="success" :thickness="12" class="mt-2 mb-6"></v-divider>
                                    <p class="subtitle">This aims to provide awareness on Early Pregnancy, Smoking, Drug
                                        Abuse, Bullying, Gangsterism, Digital Addiction and HIV to all students within Tagum
                                        City in partnership with the schools’ Guidance Counselors.</p>
                                </div>
                            </v-card-item>
                        </v-card>
                    </v-col>
                    <v-col class="mt-2 mb-2" color="grey lighten-3" flat cols="12" md="4">
                        <v-card class="mx-auto" max-width="90%" variant="outlined"
                            style="padding:2%; margin-top:2%;height:100%">
                            <v-card-item>
                                <div>
                                    <div  class="text-h5 mb-1" id="title">
                                        Work Immersion Program
                                    </div>
                                    <v-divider color="success" :thickness="12" class="mt-2 mb-6"></v-divider>
                                    <p class="subtitle">The deployment facilitation of Grade 12 students in the offices of
                                        the City Government of Tagum under DepEd's Work Immersion Program.</p>
                                </div>
                            </v-card-item>
                        </v-card>
                    </v-col>
                    <v-col class="mt-2 mb-2" color="grey lighten-3" flat cols="12" md="4">
                        <v-card class="mx-auto" max-width="90%" variant="outlined"
                            style="padding:2%; margin-top:2%;height:100%">
                            <v-card-item>
                                <div>
                                    <div  class="text-h5 mb-1" id="title">
                                        Aral Kawani: Balik Skwela Program for Government Employees
                                    </div>
                                    <v-divider color="success" :thickness="12" class="mt-2 mb-6"></v-divider>
                                    <p class="subtitle">This is intended for government employees who wishes to complete
                                        their basic education through the Alternative Learning System of DepEd.

                                        For its first implementation, city employees are the target learners, and in the
                                        following year, this will be extended to other government offices.</p>
                                </div>
                            </v-card-item>
                        </v-card>
                    </v-col>
                    <v-col class="mt-2 mb-2" color="grey lighten-3" flat cols="12" md="4">
                        <v-card class="mx-auto" max-width="90%" variant="outlined"
                            style="padding:2%; margin-top:2%;height:100%">
                            <v-card-item>
                                <div>
                                    <div  class="text-h5 mb-1" id="title">
                                        One-on-one coaching
                                    </div>
                                    <v-divider color="success" :thickness="12" class="mt-2 mb-6"></v-divider>
                                    <p class="subtitle">Employment coaching intended for daily clients in PEESO which
                                        includes but
                                        not limited to guidance in the formulation of application documents, other tips and
                                        work
                                        ethics.</p>
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
 