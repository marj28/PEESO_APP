<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12">
                <div class="pa-4 text-end">
                <v-btn
                class="text-none primary"
                min-width="92"
                rounded
                variant="outlined"
                @click="$router.push('/job-post').catch((err) => {})"
                >
                <v-icon>
                 mdi-arrow-left
                </v-icon>
                Back
                </v-btn>
                </div>
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
                        <v-btn color="primary" dark @click="dialogschedule = true" class="mt-2">
                            Add Schedule
                        </v-btn>
                        <v-dialog v-model="dialogschedule" persistent max-width="60%">
                            
                                <v-form v-model="valid">
                             
                                        <v-row>
                                            <v-col cols="12" md="6">
                                                <v-text-field v-model="date" label="Date" type="date"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="3">
                                                <!-- <v-text-field v-model="time" label="Time from" type="date"></v-text-field> -->
                                                <v-menu ref="timePicker" v-model="timePicker"
                                                    :close-on-content-click="false" :return-value.sync="selectedTime"
                                                    transition="scale-transition" offset-y max-width="290px"
                                                    min-width="290px">
                                                    <template v-slot:activator="{ on }">
                                                        <v-text-field v-model="selectedTime" label="Selected Time"
                                                            prepend-icon="mdi-clock-time-four-outline" readonly
                                                            v-on="on"></v-text-field>
                                                    </template>
                                                    <v-time-picker v-if="timePicker" v-model="selectedTime" full-width
                                                        @click:minute="$refs.timePicker.save(selectedTime)"
                                                        @click:second="$refs.timePicker.save(selectedTime)"></v-time-picker>
                                                </v-menu>
                                            </v-col>
                                            <v-col cols="12" md="3">
                                                <!-- <v-text-field v-model="time" label="Time too" type="date"></v-text-field> -->
                                                <v-menu ref="timePicker1" v-model="timePicker1"
                                                    :close-on-content-click="false" :return-value.sync="selectedTime1"
                                                    transition="scale-transition" offset-y max-width="290px"
                                                    min-width="290px">
                                                    <template v-slot:activator="{ on }">
                                                        <v-text-field v-model="selectedTime1" label="Selected Time"
                                                            prepend-icon="mdi-clock-time-four-outline" readonly
                                                            v-on="on"></v-text-field>
                                                    </template>
                                                    <v-time-picker v-if="timePicker1" v-model="selectedTime1" full-width
                                                        @click:minute="$refs.timePicker.save(selectedTime1)"
                                                        @click:second="$refs.timePicker.save(selectedTime1)"></v-time-picker>
                                                </v-menu>
                                            </v-col>
                                            <v-col cols="12" md="6">
                                                <v-text-field v-model="location" label="Localtion"></v-text-field>
                                            </v-col><v-col cols="12" md="6">
                                                <v-text-field v-model="location" label="Number of applicant"
                                                    type="number"></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <row>
                                            <v-textarea solo name="input-7-4" label="Remarks"></v-textarea>
                                        </row>
                                </v-form>
                                <v-spacer></v-spacer>
                                <v-btn color="warning darken-1" text @click="dialogschedule = false">
                                    Cancel
                                </v-btn>
                                <v-btn color="primary" dark @click="dialogschedule = false">
                                    Save
                                </v-btn>
                            
                        </v-dialog>
                    </v-card-text>
                </v-card>

            </v-col>

        </v-row>
        <v-card style="padding: 2%;">
           <!--  <SelectTenApplicant /> -->
           <v-data-table :headers="headers" :items="items" :item-key="itemKey" :rows-per-page-items="[5, 10, 15]"
              @click:row="redirecttoformattendance" style="cursor: pointer;">
            <template v-slot:[`item.actions`]>
                <v-btn small color="primary" @click="
                    $router.push('/table-passing')
                    ">
                    <v-icon>mdi-account-multiple-plus</v-icon> Add Applicant
                </v-btn>

            </template>
        </v-data-table>


        </v-card>
        <h2 class="mt-6 mb-2">LIST OF APPLICANTS</h2>
        <v-card>
            <ListofApplicants class="pa-6"/>
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
        headers: [
                { text: 'Date', value: 'date' },
                { text: 'From', value: 'timef' },
                { text: 'To', value: 'timet' },
                { text: 'Location', value: 'location' },
                { text: 'Invites', value: 'invite' },
                { text: 'Confirmed', value: 'confirmed' },

                { text: 'Actions', value: 'actions', sortable: false },
            ],
            items: [
                {  id:1,  name: 'Invoker', date: '01/02/2021', timef: '1:11pm', timet: '5:11pm', location: 'City Hall of Asuncion', number: '111', invite: '347', confirmed: '423' },
                {  id:2,  name: 'Minara', date: '01/03/2022', timef: '1:22pm', timet: '5:22pm', location: 'City Mall of You', number: '222', invite: '987', confirmed: '542' },
                {  id:3, name: 'War Lord', date: '01/04/2023', timef: '1:22pm', timet: '5:33pm', location: 'City Davao', number: '333', invite: '907', confirmed: '542' },
                {  id:4, name: 'Jamica', date: '01/05/2024', timef: '1:33pm', timet: '5:44pm', location: 'City Hall of Manila', number: '123', invite: '222', confirmed: '245' },
                {  id:5, name: 'Red Bull', date: '01/06/2025', timef: '1:44pm', timet: '5:55pm', location: 'City Hall', number: '444', invite: '765', confirmed: '875' },
            ],


       
        dialog: false,
        post: { post_meta: {}, type: "" },
        loading: false,
        can_apply: true,
        company: { medias: {} },
        applicants: [],
        dialogschedule: false,
        timePicker: false,
        selectedTime: null,
        timePicker1: false,
        selectedTime1: null,

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

        navigateTo(path) {
        this.$router.push({ 'path': path });
      },

      redirecttoformattendance (item) {    
            /*   this.navigateTo('/SelectYouth');  */
              this.$router.push({ name: 'DisplaySchedView', 
              params: {
                 id: item.id 
                ,title: this.post.title 
                ,company: this.post.post_meta.company 
                ,salary: this.post.post_meta.salary
                ,created_td: this.post.created_td } })
  
            },

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