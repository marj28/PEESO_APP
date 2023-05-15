<template>
  <!--  eslint-disable  -->
    <v-container>
      
      <v-row>
          <v-col cols="12">
            JOB LIST
            
          </v-col>
       </v-row> 
      <v-row>

        <v-col cols="4">
          <v-card color="info" dark>
              <v-card-text class="text-center" @click="jobform = true, state='new', post={}" style="height: 80px;">
                    <div style="margin-top: 10px;"><v-icon large left>mdi-plus-circle</v-icon> POST A JOB</div>
              </v-card-text>
          </v-card>
        </v-col> 

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
        
      <!--   <v-data-table  :headers="headers" :items="posts"  >
          <template v-for="(item,index) in posts">

          </template>  
        </v-data-table> -->

          <table class="datatable" style="width:100%">
            <thead>
                <th>Position Title</th>
                <th>Salary</th>
                <th>Nature of Work</th>
                <th class="text-center">Vacancy Count</th>
                <th class="text-center">Job Post status</th>
                <th class="text-center">Actions</th>
            </thead>
            <tbody>

          <tr height="10px" v-for="(item,index) in posts" :key="index + 'post'"> 
           <td >{{item.title}}</td>
            <td>{{item.post_meta.salary}}</td>
            <td>{{ item.post_meta.classificationofwork }}</td>
            <td class="text-center">{{ item.post_meta.vacancycount }}</td>
            <td class="text-center" > 
              <v-switch v-model="switch1"  style="height: 10px;"  class="ml-12 mt-n4"   dense/>
            </td>
  
            <td  class="text-center">
                 <v-icon small class="mr-2" @click="JobFormShow = true, state='update', post=item" color="success">
                 mdi-eye  
                </v-icon>
              <v-btn text x-small color="warning" @click="jobform = true, state='update', post=item"><v-icon left small>mdi-pencil</v-icon> Edit</v-btn>
              <v-icon @click="deleteItem(item)" color="error" small> mdi-delete </v-icon>

            </td>

           
        </tr>
       
         </tbody>
        </table>


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
      posts:[],
    
      switch1: true,

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
        }
      },
    }
    
  </script>

<style scoped>
.datatable {
  width: 100%;
  border-collapse: collapse;
  border: 2px solid black;
}

.datatable th, .datatable td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.datatable th {
  background-color: #f2f2f2;
  font-weight: bold;
}

th {
  height: 30px;
}
td{
height:-20px;
}

.datatable tr:hover {
  background-color: #f5f5f5;
}
</style>