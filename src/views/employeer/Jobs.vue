<template>
  <!--  eslint-disable  -->
    <v-container>
      
      <v-row>
          <v-col cols="12">
            JOB LIST
            
          </v-col>
       </v-row>

      <v-row>

        <v-col cols="12" md="4" sm="4"> 

          <v-card color="#1B5E20" dark>
              <v-card-text class="text-center" @click="jobform = true, state='new', post={}" style="height: 80px;">
                    <div style="margin-top: 10px;"><v-icon large left>mdi-plus-circle</v-icon> POST A JOB</div>
              </v-card-text>

          </v-card>
        </v-col> 

      </v-row>

       <!--  <template v-for="(item,index) in posts">

          <v-col cols="4" :key="index + 'post'">

            <v-card>
              
                <v-card-text class="text-center">
                     <span class="font-weight-bold text-h6">{{item.title}}</span>
                     <p>SALARY: {{item.post_meta.salary}}</p>
              </v-card-text>
              <v-card-actions dense>
                <span class="text-caption text-info">{{item.status}}</span>
                <v-spacer></v-spacer>
                <v-btn text x-small color="warning" @click="jobform = true, state='update', post=item"><v-icon left small>mdi-pencil</v-icon> Edit</v-btn>
              </v-card-actions>

          </v-card>
          </v-col>
          
        </template>   -->

        <v-row>

      <v-col cols="12" md="12" lg="12" sm="12">
        
        <v-data-table class="custom-table"  :headers="headers" :items="posts" :search="search"   >

          <template v-slot:top>
      <v-toolbar flat dark color="#1B5E20">
        <v-toolbar-title>JOB POSTING || Open Contract <span style="font-size: 15px;">{{ status }} </span></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details outlined rounded
          dense></v-text-field>
        <v-divider vertical class="mx-2" inset></v-divider>
      </v-toolbar>
      </template>


    <template  slot="item.switch1" slot-scope="{ item }">
      <v-switch class="px-5 mt-n1" v-model="item.switch1" color="success" dense></v-switch>
    </template>


    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="JobFormShow = true, state='update', post=item" color="success">
      mdi-eye  
      </v-icon>

      <v-btn text x-small color="warning" @click="jobform = true, state='update', post=item"><v-icon left small>mdi-pencil</v-icon> Edit</v-btn>
      <v-icon @click="deleteItem(item)" color="error" small> mdi-delete </v-icon>
    </template>


        </v-data-table> 

        </v-col>
      </v-row>


     
      <va-job-form :show="jobform" :data="post" :post_state="state" @DialogEvent="formEv"/> 
      <va-job-show :show="JobFormShow" :data="post" :post_state="state"  @DialogEvent="formEv"/>
    </v-container>
  </template>
  <script>
/* eslint-disable */
  import {
    mapMutations
  } from 'vuex'
    export default {
      name:'EmployeerPage',
      data: () => ({
      state:"new",
      post:{},
      search: "",
      posts:[],

      headers: [
        { text: 'Positin Title', value: 'title' },
        { text: 'Salary', value: 'post_meta.salary' },
        { text: 'Nature of Work', value: 'post_meta.classificationofwork' },
        { text: 'Vacancy Count', value: 'post_meta.vacancycount' },
        { text: 'Job post Status', value: 'switch1' },
        { text: 'Actions', value: 'actions' },
      ],
    
  
      switch1:true,

     jobform: false, 
       JobFormShow:false, 
      }),

      computed: {
      

      },


      created() {
        if (this.$session.exists()) {
            this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
            this.setLoggedIn(true)
            this.setAppBar(true)
            this.myJobs()
          } 
       
      },

      methods: {
      /*   goToJobposting(item) {
      this.$router.push(`/JobPostingId/${item.id}/${this.admin}`);
    }, */
  
        ...mapMutations(['setLoggedIn', 'setAppBar', 'setMonthDailySales']),

        imageUrl(data) {
          this.company.medias.logo= data
        },

        formEv() {
          this.jobform=false
          this.JobFormShow=true
          this.myJobs()
        },

       /*  formEv1() {
          this.JobFormShow=false
          this.myJobs()
        }, */
        

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