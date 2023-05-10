<template>
    <v-container>
      <v-row>
          <v-col cols="12">
            TRAININGS LIST
          </v-col>
       </v-row> 
      <v-row>
        <v-col cols="4">
          <v-card color="tertiary" dark>
              <v-card-text class="text-center" @click="popupform = true, state='new', post={}" style="height: 100px;">
                    <div style="margin-top: 20px;"><v-icon large left>mdi-plus-circle</v-icon> POST TRAINING</div>
              </v-card-text>
          </v-card>
        </v-col>
        <template v-for="(item,index) in posts">
          <v-col cols="4" :key="index + 'post'">
            <v-card>
              <v-card-text class="text-center">
                     <span class="font-weight-bold text-h6">{{item.title}}</span>
                     <!-- <p>SALARY: {{item.post_meta.salary}}</p> -->
              </v-card-text>
              <v-card-actions dense>
                <span class="text-caption text-info">{{item.status}}</span>
                <v-spacer></v-spacer>
                <v-btn text x-small color="warning" @click="popupform = true, state='update', post=item"><v-icon left small>mdi-pencil</v-icon> Edit</v-btn>
              </v-card-actions>
          </v-card>
          </v-col>
        </template>  
      </v-row>
      <va-training-form :show="popupform" :data="post" :post_state="state" @DialogEvent="formEv"/>
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
      popupform: false,
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
          this.popupform=false
          this.myJobs()
        },
       
        myJobs() {
          this.$http.post('post/my_post', {type:'training'}).then(response => {  
            response.data.status?this.posts = response.data.posts:this.posts=[]
           }).catch(e => {
           console.log(e)
           })
        }
      },
    }
  </script>