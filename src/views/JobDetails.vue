<template>
    <v-container>


        <v-row>
            <v-col cols="12" md="12">
                <v-card>
                    <v-toolbar elevation="0">
                        <div class="text-h6">{{ post.title }}</div>
                        <v-spacer />
                        <template v-if="can_apply">

                        </template>
                        <template v-else>

                        </template>

                    </v-toolbar>
                    <v-card-text style="min-height: 130px;">
                        <div style="float: left; width:100px; margin-right: 12px;">

                            <v-img :src="company.medias.logo" />
                        </div>

                        <div class="font-weight-bold">{{ post.post_meta.company }}</div>
                        <div>{{ post.post_meta.company_address }}</div>
                        <div>{{ post.post_meta.salary }}</div>
                        <div class="text-info"><em>POSTED ON {{ $moment(post.created_td).format('MMM DD, YYYY') }}</em>
                        </div>


                        <v-btn color="primary" dark @click="dialogschedule = true" style="margin-left: 50%;">
                            Add Schedule
                        </v-btn>


                        <v-dialog v-model="dialogschedule" persistent max-width="60%">
                            <v-card style="padding: 3%;">


                                <v-form v-model="valid">
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" md="6">
                                                <v-text-field v-model="date" label="Date" readonly=""></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="3">
                                                <v-text-field v-model="time" label="Time from" readonly></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="3">
                                                <v-text-field v-model="time" label="Time too" readonly></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="6">
                                                <v-text-field v-model="location" label="Localtion"
                                                    readonly=""></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <row>
                                            <v-textarea solo name="input-7-4" label="Remarks"></v-textarea>
                                        </row>
                                    </v-container>
                                </v-form>
                                <v-spacer></v-spacer>
                                <v-btn color="warning darken-1" text @click="dialogschedule = false">
                                    Cancel
                                </v-btn>
                                <v-btn color="primary" dark @click="dialogschedule = false">
                                    Save
                                </v-btn>
                            </v-card>
                        </v-dialog>
                    </v-card-text>
                </v-card>

            </v-col>

        </v-row>
        <v-card style="padding: 2%;">
            <SelectTenApplicant />
        </v-card>
        <span style="font-size: 56px; font-weight: 400;">List of Applicants</span>
        <v-card style="margin-top: 3%;padding: 2%;">
            <ListofApplicants />
        </v-card>
    </v-container>
</template>
<script>
import { relativeTimeThreshold } from 'moment';
import {
    mapMutations
} from 'vuex'
export default {
    name: 'PostPage',
    data: () => ({
        dialog: false,
        post: { post_meta: {}, type: "" },
        loading: false,
        can_apply: true,
        company: { medias: {} },
        applicants: [],
        dialogschedule: false,

    }),
    computed: {
        HEADERTEXT() {
            return this.post.type.toUpperCase()
        },
        user() {
            if (this.$session.exists()) {
                return this.$session.get("user");
            }
            return null;
        },
    },
    created() {
        if (this.$session.exists()) {
            this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
        }
        this.setLoggedIn(true)
        this.setAppBar(true)
        this.getpost(this.$route.params.id)
        this.checkAppplied(this.$route.params.id)
    },
    methods: {
        ...mapMutations(['setLoggedIn', 'setAppBar', 'setMonthDailySales']),
        applyJob() {
            var params = {
                post_id: this.post.id,
                posted_by: this.post.created_by,
                post_type: this.post.type
            }

            console.log(params)
            this.$http.post('new/application', params).then(response => {
                this.loading = false
                this.dialog = true
                // response.data.status ? this.VA_ALERT('success', response.data.message) : this.VA_ALERT('error', response.data.message)
                this.checkAppplied(this.$route.params.id)
            }).catch(e => {
                console.log(e)
            })
        },
        getApplicants() {
            this.$http.get('get_applicants').then(response => {
                response.data.status ? this.applicants = response.data.applicants : this.applicants = []
            }).catch(e => {
                console.log(e)
            })
        },

        checkAppplied() {
            var params = {
                post_id: this.$IsNum(this.$route.params.id),
            }

            console.log(params)
            this.$http.post('chech_applied', params).then(response => {
                this.can_apply = response.data.status
            }).catch(e => {
                console.log(e)
            })
        },

        getpost(id) {
            this.$http.post('post/get', { id: this.$IsNum(id) }).then(response => {
                console.log(response.data)
                response.data.status ? this.post = response.data.post : this.post = {}
                response.data.status ? this.company = response.data.company : this.company = {}
            }).catch(e => {
                console.log(e)
            })
        }
    },
}
</script>