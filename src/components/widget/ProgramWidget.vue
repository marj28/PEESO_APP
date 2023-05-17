<template>
    <div>
      <v-card>
            <v-card-title>
              <span
                class="text-primary
          "
              >LATEST PROGRAM</span>
            </v-card-title>
            <v-card-text>
              <v-list three-line>
                <template v-for="(item, index) in programs">
                  <v-list-item
                    :key="index + '-t'"
                  >
                  <v-list-item-avatar tile  size="62">
                      <v-img :src="item.medias.logo" />
                    </v-list-item-avatar>
  
                    <v-list-item-content>
                      <v-list-item-title><a  @click="$router.push('post/' + item.id).catch(err => {})">{{item.title}}</a></v-list-item-title>
                      <v-list-item-subtitle>{{item.post_meta.venue}}</v-list-item-subtitle>
                      <v-list-item-subtitle><em class="text-accent">{{$moment(item.post_meta.date).format("MMM DD, YYYY")}}</em></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list>
            </v-card-text>
          </v-card>
    </div>
  </template>
  <script>
  import {
    mapMutations
  } from 'vuex'
    export default {
      data: () => ({
        programs: [],
      }),
      computed: {
       
      },
      created() {
        this.trainingposts()
      },
      methods: {
        ...mapMutations(['setLoggedIn', 'setAppBar', 'setMonthDailySales']),
        trainingposts() {
            this.$http.post('post/list', {type:'program'}).then(response => {  
              response.data.status?this.programs = response.data.posts:this.programs=[]
             }).catch(e => {
             console.log(e)
             })
        },
  
      },
    }
  </script>