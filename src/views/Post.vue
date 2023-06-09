<template>
  <v-container>


    <v-row>
      <v-col cols="12" md="12">
        <v-card>
          <v-toolbar elevation="0">
            <div class="text-h6">{{ post.title }}</div>
            <v-spacer />
            <template v-if="can_apply">
              <v-btn color="success" v-if="post.type == 'job'" @click="loading = true, applyJob()">Apply Now</v-btn>
            </template>
            <template v-else>
              <v-btn color="warning" :disabled="true" v-if="post.type == 'job'"
                @click="loading = true, applyJob()">Applied</v-btn>
            </template>

          </v-toolbar>
          <v-card-text style="min-height: 130px;">
            <div style="float: left; width:100px; margin-right: 12px;">

              <v-img :src="company.medias.logo" />
            </div>

            <div class="font-weight-bold">{{ post.post_meta.company }}</div>
            <div>{{ post.post_meta.company_address }}</div>
            <div>{{ post.post_meta.salary }}</div>
            <div class="text-info"><em>POSTED ON {{ $moment(post.created_td).format('MMM DD, YYYY') }}</em></div>
          </v-card-text>
        </v-card>

        <v-card class="mt-4">
          <v-toolbar dense elevation="0">
            <div class="text-h6">{{ HEADERTEXT }} DETAILS</div>
          </v-toolbar>
          <v-card-text>
            <div v-html="post.content" id="post"></div>
            <!-- Post meta section -->
            <div class="mt-8">
              <p class="font-weight-bold">ADDITIONAL INFORMATION:</p>
              <v-row>
                <v-col cols="6">
                  <p>Education Level <br /><span class="font-weight-bold">{{ post.post_meta.educationallevel }}</span></p>
                  <p>Preferred Course<br /><span class="font-weight-bold"> {{ post.post_meta.courserequirements }}</span>
                  </p>
                  <p>Vacancies <br /><span class="font-weight-bold">{{ post.post_meta.vacancycount }}</span> </p>
                  <p>Purpose of Vacancy <br /><span class="font-weight-bold"> {{ post.post_meta.purposeofvacancy }}</span>
                  </p>
                </v-col>
                <v-col cols="6">
                  <p>Classification of Work <br /><span
                      class="font-weight-bold">{{ post.post_meta.classificationofwork }}</span> </p>
                  <p>Classification of Vacancy <br /><span class="font-weight-bold">
                      {{ post.post_meta.classificationofvacancy }}</span></p>
                  <p>Expected Salary <br /><span class="font-weight-bold"> {{ post.post_meta.salary }}</span></p>
                </v-col>
              </v-row>

            </div>
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
    <v-dialog v-model="dialog" max-width="300" persistent>
      <v-card>
        <v-card-title class="text-h5">
          Application Submitted!
        </v-card-title>
        <v-card-text>
          Your application has been submitted to the employer, please regularly monitor your inbox for updates.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Okay
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
        this.dialog=true
        // response.data.status ? this.VA_ALERT('success', response.data.message) : this.VA_ALERT('error', response.data.message)
        this.checkAppplied(this.$route.params.id)
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