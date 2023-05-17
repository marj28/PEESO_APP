<template>
    <v-container>
     
  
      <v-row>
        <v-col cols="12" md="12">
          <v-card>
            <v-toolbar
            elevation="0"
          >
          <div class="text-h6">{{post.title}}</div>
          <v-spacer />
            <v-btn color="success" v-if="post.type=='job'">Apply Now</v-btn>
          </v-toolbar>
            <v-card-text style="min-height: 130px;">
                <div style="float: left; width:100px; margin-right: 12px;">
                    
                    <v-img :src="company.medias.logo"/>
                </div>
                
                <div class="font-weight-bold">{{post.post_meta.company}}</div>
                <div>{{post.post_meta.company_address}}</div>
                <div>{{post.post_meta.salary}}</div>
                <div class="text-info"><em>POSTED ON {{$moment(post.created_td).format('MMM DD, YYYY')}}</em></div>
            </v-card-text>
          </v-card>

          <v-card class="mt-4">
            <v-toolbar
            dense
            elevation="0"
          >
          <div class="text-h6">{{HEADERTEXT}} DETAILS</div>
          </v-toolbar>
            <v-card-text>
                <div v-html="post.content" id="post"></div>
            </v-card-text>
          </v-card>
        </v-col>
        <!-- <v-col cols="12" md="4">
          <div class="mb-4">
              <widget-training-widget></widget-training-widget>
          </div>
          <widget-program-widget></widget-program-widget>
        
        </v-col> -->
      </v-row>
    </v-container>
  </template>
  <script>
  import {
    mapMutations
  } from 'vuex'
    export default {
        name: 'PostPage',
      data: () => ({
        post: {post_meta:{}},
        company: {medias:{}},
        trainings: [
       
       {
         avatar: 'https://www.sei.dost.gov.ph/templates/gwt-joomla/images/transparency-seal.png',
         title: 'STEM Teach: Learning the Basics of GeoGebra as a Tool in Teaching Mathematics',
         subtitle: `<span class="text--primary">27 April 2023</span> &mdash; In partnership with the University of the Philippines - National Institute for Science and Mathematics Education Development (UP NISMED), the Department of Science and Technology – Science Education Institute held its third face-to-face training for science teachers this year in Panglao, Bohol, focusing on the basics of GeoGebra, an interactive geometry, algebra, statistics and calculus application used for teaching Mathematics`,
       },
       { divider: true, inset: true },
       
      ],
        programs: [
       
       {
         avatar: 'https://image-service-cdn.seek.com.au/d1c627a5352a1bff446757186007f79f838186dc/ee4dce1061f3f616224767ad58cb2fc751b8d2dc',
         title: 'IT Consultant',
         subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
       },
       
       
     ],
      }),
      computed: {
        HEADERTEXT() {
           return this.post.type.toUpperCase()
        }
      },
      created() {
        this.setLoggedIn(true)
        this.setAppBar(true)
        this.getpost(this.$route.params.id) 
      },
      methods: {
        ...mapMutations(['setLoggedIn', 'setAppBar', 'setMonthDailySales']),
        getpost(id) {
            this.$http.post('post/get', {id:this.$IsNum(id)}).then(response => {  
                console.log( response.data)
              response.data.status?this.post = response.data.post:this.post={}
              response.data.status?this.company = response.data.company:this.company={}
             }).catch(e => {
             console.log(e)
             })
          }
      },
    }
  </script>