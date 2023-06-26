<template>
  <!--  eslint-disable  -->
    <v-container>
   
      <v-row>
          <v-col cols="8">
            <v-btn tile  color="success"  @click="post={}, state='new', jobform=true"><v-icon small left>mdi-pin</v-icon>  Post a Job</v-btn>
            <v-row class="mt-4">
            <template v-for="(item,index) in posts">
              <v-col cols="6">
                  <v-card :key="index+'-'+item.id">
                    <v-toolbar dense elevation="1"> 
                      {{ item.title }}
                    <v-spacer></v-spacer>
                      <v-btn fab x-small elevation="1">
                        <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                                  <v-icon
                                    dark
                                    @click="post=item, state='update', jobform=true"
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                  mdi-file-edit
                                  </v-icon>
                                </template>
                                <span>Edit Job</span>
                              </v-tooltip>
                        </v-btn>      
                    </v-toolbar>
                      <v-card-text>
                       <div> Salary: {{ item.post_meta.salary }}</div>
                       <div> Nature of Work: {{ item.post_meta.classificationofvacancy }}</div>
                       <div> Date Posted: <em class="text-warning">{{ $moment(item.created_dt).fromNow()  }}</em></div>
                      </v-card-text>
                      <v-card-actions dense>
                        <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                  <v-icon
                                    color="primary"
                                    @click="job=item,show_applicants = true"
                                    dark
                                    left
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                  mdi-account-multiple
                                  </v-icon>
                                </template>
                                <span>View Applicants</span>
                              </v-tooltip>
                              0
                        <v-spacer></v-spacer>
                         <small>{{ item.status }}</small>
                      </v-card-actions>
                  </v-card>
                </v-col>
            </template>
          </v-row>
           
          </v-col>
          <v-col cols="4">
            <v-card flat>
               <v-toolbar elevation="1" dense>
                 <v-icon left color="success">mdi-file-account</v-icon> Applicants
                 <v-spacer/>
                
               </v-toolbar>
               <v-card-text>
                <v-data-table
                    dense
                    hide-default-header
                    :search="search"
                    :items="applicants"
                    >
                    <template v-slot:body="{ items }">
                        <tbody>
                        <tr v-for="(item,index) in items" :key="index">
                          <template v-if="item.applicant!=null">
                            <td>
                             <strong> {{ item.applicant!=null?item.applicant.lastname:"" }},  {{ item.applicant!=null?item.applicant.firstname:"" }}</strong>
                              <br /><span class="text-info">Applying for {{ item.title}}</span>
                              <br /><em class="text-warning">{{ $moment(item.applied_dt).fromNow()}}</em>
                            </td>
                          </template>
                        </tr>
                        </tbody>
                    </template>
                    </v-data-table>
               </v-card-text>
             </v-card>
          </v-col>
      </v-row>
      

      <va-job-form :show="jobform" :data="post" :post_state="state" @DialogEvent="formEv"/>
      <va-application-list :show="show_applicants" :job="job" @DialogEvent="listEv"/>  
      <!-- <va-job-show :show="JobFormShow" :data="post" :post_state="state"  @DialogEvent="formEv1"/> -->
    </v-container>
  </template>
  <script>
import Toolbar from '@/components/core/Toolbar.vue';
/* eslint-disable */
  import {
    mapMutations
  } from 'vuex'
    export default {
  components: { Toolbar },
      name:'EmployeerPage',
      data: () => ({
      status: "Open Contract", 
      state:"new",
      show_applicants: false,
      job: {},
      post:{},
      search: "",
      posts:[],
      applicants: [],
      isMobile: false,
      headers: [

        { text: 'Positin Title', value: 'title' },
        { text: 'Salary', value: 'post_meta.salary'  , hideOnMobile: true   },
        { text: 'Nature of Work', value: 'post_meta.classificationofwork' , hideOnMobile: true  },
        { text: 'Vacancy Count', value: 'post_meta.vacancycount' , align: 'center' , hideOnMobile: true },
        // { text: 'Status',  align: 'right' , hideOnMobile: true },

      ],
    
  
      switch1:true,

     jobform: false, 
       JobFormShow:false, 
      }),



      computed: {
        getTableHeaders() {
      if (this.isMobile) {
        // Remove the headers you don't want to display in mobile view
        return this.tableHeaders.filter(header => !header.hideOnMobile);
      }
      return this.tableHeaders;
    },

      },

      created() {
        if (this.$session.exists()) {
            this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
            this.setLoggedIn(true)
            this.setAppBar(true)
            this.myJobs()
            this.getLatestApplicants()
          } 
       
      },
      mounted() {
    // Check if the screen size is mobile
    this.isMobile = window.innerWidth <= 600;
    // Update the isMobile value when the screen size changes
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 600;
    });
  },



  methods: {
        ...mapMutations(['setLoggedIn', 'setAppBar', 'setMonthDailySales']),

        imageUrl(data) {
          this.company.medias.logo= data
        },
        listEv() {
          this.show_applicants = false
        },
        formEv() {
          this.jobform=false
        },

        formEv1() {
          this.JobFormShow=false
          this.myJobs()
        }, 
        
        getLatestApplicants() {
          this.$http.get('get_latest_applicants').then(response => {  
            response.data.status?this.applicants = response.data.applicants:this.applicants=[]
           }).catch(e => {
           console.log(e)
           })

     

           .catch((error) => {
          console.error(error);
          this.isLoading = false;
        });

        },

        myJobs() {
          this.$http.post('post/my_post', {type:'job'}).then(response => {  
            response.data.status?this.posts = response.data.posts:this.posts=[]
           }).catch(e => {
           console.log(e)
           })

     

           .catch((error) => {
          console.error(error);
          this.isLoading = false;
        });

        },

      },
    }
    
  </script>

<style scoped>

.custom-table {
  border: 1px solid #1B5E20; 
}




</style>