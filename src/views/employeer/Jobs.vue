<template>
    <v-container>
      <v-row>
          <v-col cols="12">
            JOB LIST
          </v-col>
       </v-row> 
      <v-row>
        <v-col cols="4">
          <v-card color="info" dark>
              <v-card-text class="text-center" @click="jobform = true, state='new', post={}" style="height: 138px;">
                    <div style="margin-top: 37px;"><v-icon large left>mdi-plus-circle</v-icon> POST A JOB</div>
              </v-card-text>
          </v-card>
        </v-col>
        <template v-for="(item,index) in posts">
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
        </template>  
      </v-row>
      <va-job-form :show="jobform" :data="post" :post_state="state" @DialogEvent="formEv"/>
    </v-container>
  </template>
  <script>
  import {
    mapMutations
  } from 'vuex'
    export default {
      name:'EmployeerPage',
      data: () => ({
      state:"new",
      post:{},
      posts:[],
      jobform: false,
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
        ...mapMutations(['setLoggedIn', 'setAppBar', 'setMonthDailySales']),
        imageUrl(data) {
          this.company.medias.logo= data
        },
        formEv() {
          this.jobform=false
          this.myJobs()
        },
       
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