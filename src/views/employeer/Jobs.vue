<template>
  <!--  eslint-disable  -->
  <v-container>

    <v-row>
      <v-col cols="8">
        <v-card>
          <v-toolbar elevation="1" dense>
            <v-icon left color="primary">mdi-briefcase</v-icon> Jobs
            <v-spacer />
            <span style="width: 290px;">
              <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line dense outlined
                hide-details></v-text-field>
            </span>
            <v-divider vertical inset class="ml-5 mr-2" />
            <v-btn text small color="success" @click="post = {}, state = 'new', jobform = true"><v-icon small left
                color="success">mdi-plus</v-icon> Post a Job</v-btn>
          </v-toolbar>
          <v-card-text>
            <v-data-table dense :headers="headers" :search="search" :items="posts">
              <template v-slot:body="{ items }">
                <tbody>
                  <tr v-for="(item, index) in items" :key="index">
                    <td>
                      <!-- <v-icon  small left color="warning" @click="post=item, state='update', jobform=true" >mdi-pencil</v-icon> -->
                      <v-icon small left color="warning"
                        @click="post = item, state = 'update', jobform = true">mdi-open-in-new</v-icon>
                      {{ item.title }}
                    </td>
                    <td  @click="
                      $router.push('job-details/' + item.id).catch((err) => { })
                      ">{{ item.post_meta.salary }}</td>
                    <td  @click="
                      $router.push('job-details/' + item.id).catch((err) => { })
                      ">{{ item.post_meta.classificationofvacancy }} </td>
                    <td class="text-center" @click="
                      $router.push('job-details/' + item.id).catch((err) => { })
                      " >{{ item.post_meta.vacancycount
                    }}</td>
                    <!-- <td class="text-right">{{ item.status }}</td> -->
                  </tr>
                </tbody>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card flat>
          <v-toolbar elevation="1" dense>
            <v-icon left color="success">mdi-file-account</v-icon> Applicants
            <v-spacer />

          </v-toolbar>
          <v-card-text>
            <v-data-table dense hide-default-header :search="search" :items="applicants">
              <template v-slot:body="{ items }">
                <tbody>
                  <tr v-for="(item, index) in items" :key="index">
                    <td>
                      <strong> {{ item.applicant.lastname }}, {{ item.applicant.firstname }}</strong>
                      <br /><span class="text-info">Applying for {{ item.title }}</span>
                      <br /><em class="text-warning">{{ $moment(item.applied_dt).fromNow() }}</em>
                    </td>

                  </tr>
                </tbody>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>


    <va-job-form :show="jobform" :data="post" :post_state="state" @DialogEvent="formEv" />
    <!-- <va-job-show :show="JobFormShow" :data="post" :post_state="state"  @DialogEvent="formEv1"/> -->
  </v-container>
</template>
<script>
/* eslint-disable */
import {
  mapMutations
} from 'vuex'
export default {
  name: 'EmployeerPage',
  data: () => ({
    status: "Open Contract",
    state: "new",
    post: {},
    search: "",
    posts: [],
    applicants: [],
    isMobile: false,
    headers: [

      { text: 'Positin Title', value: 'title' },
      { text: 'Salary', value: 'post_meta.salary', hideOnMobile: true },
      { text: 'Nature of Work', value: 'post_meta.classificationofwork', hideOnMobile: true },
      { text: 'Vacancy Count', value: 'post_meta.vacancycount', align: 'center', hideOnMobile: true },
      // { text: 'Status',  align: 'right' , hideOnMobile: true },

    ],


    switch1: true,

    jobform: false,
    JobFormShow: false,
  }),



  computed: {
    getTableHeaders() {
      if (this.isMobile) {
        // Remove the headers you don't want to display in mobile view
        return this.tableHeaders.filter((header) => !header.hideOnMobile);
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
      this.getApplicants()
    }

  },


  mounted() {
    // Check if the screen size is mobile
    this.isMobile = window.innerWidth <= 600;
    // Update the isMobile value when the screen size changes
    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth <= 600;
    });
  },

  methods: {
    ...mapMutations(['setLoggedIn', 'setAppBar', 'setMonthDailySales']),

    imageUrl(data) {
      this.company.medias.logo = data
    },

    formEv() {
      this.jobform = false
      /*  this.JobFormShow=false */
      this.myJobs()
    },

    formEv1() {
      this.JobFormShow = false
      this.myJobs()
    },

    getApplicants() {
      this.$http.get('get_applicants').then(response => {
        response.data.status ? this.applicants = response.data.applicants : this.applicants = []
      }).catch(e => {
        console.log(e)
      })



        .catch((error) => {
          console.error(error);
          this.isLoading = false;
        });

    },

    myJobs() {
      this.$http.post('post/my_post', { type: 'job' }).then(response => {
        response.data.status ? this.posts = response.data.posts : this.posts = []
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