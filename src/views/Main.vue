<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <div style="float: left" class="mr-8">
              <img :src="$store.state.systemlogo" width="110px" />
            </div>
            <div style="min-height: 100px">
              <div class="text-h5 font-weight-bold text-primary">Welcome</div>
              <div>Welcome to Tagum City - PEESO Program</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" md="4">
        <v-card
          color="primary"
          dark
          @click="$router.push({ path: 'jobview' })"
        >
          <v-card-text>
            <v-row>
              <v-col cols="4" class="text-center">
                <img :src="$store.state.img_dir + 'job.png'" width="48" />
              </v-col>
              <v-col cols="8">
                <div class="text-h6" >{{ jobs.length }}</div>
                Job Posts
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="6" md="4">
        <v-card
          color="primary"
          dark
          @click="$router.push({ path: 'trainingview' })"
        >
          <v-card-text>
            <v-row>
              <v-col cols="4" class="text-center">
                <img :src="$store.state.img_dir + 'training.png'" width="48" />
              </v-col>
              <v-col cols="8">
                <div class="text-h6" >0</div>
                Trainings
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card color="primary"
          dark @click="$router.push({ path: 'programview' })">
          <v-card-text>
            <v-row>
              <v-col cols="4" class="text-center">
                <img :src="$store.state.img_dir + 'program.png'" width="48" />
              </v-col>
              <v-col cols="8">
                <div class="text-h6" >0</div>
                Programs
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="12">
        <v-row no-gutters><div class="text-h6 text-primary" >Latest Job Posts</div></v-row>
        <v-row>
        <template v-for="(item,index) in loadJobs">
          <v-col cols="3"  :key="index+'-'+item.id">
          <v-card class="jo-card" flat>
                    <v-toolbar dense elevation="0"  > 
                      <a @click="$router.push('/post/'+ item.id).catch((err) => {})">{{ item.title }}</a>
                    
                    </v-toolbar>
                      <v-card-text>
                      
                        <v-img
                        class="mb-2"
                      width="64"
                      height="64"
                      :src=" item.medias.logo != '' ? item.medias.logo : $store.state.noImage"
                    />
                       <div> Salary: {{ item.post_meta.salary }}</div>
                       <div> Nature of Work: {{ item.post_meta.classificationofvacancy }}</div>
                       <div> Date Posted: <em class="text-warning">{{ $moment(item.created_dt).fromNow()  }}</em></div>
                      </v-card-text>
                     
                  </v-card>
                </v-col>
        </template>
        <v-col cols="12" class="text-center"><v-btn small text tile @click="page+=12">Show More >></v-btn></v-col>
      </v-row>
                 
       
      </v-col>
      <v-col cols="12" md="12">
          <div class="mb-4">
            <widget-training-widget></widget-training-widget>
          </div>
         <widget-program-widget></widget-program-widget>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data: () => ({
    noImage: "",
    page: 12,
    jobs: [],
    trainings: [],
    programs: [],
  }),
  computed: {
    loadJobs() {
      if(this.jobs.length>12) {
        return this.jobs.slice(0,this.page)
      } else {
       return this.jobs
      }
    }
  },
  created() {
    // this.setLoggedIn(true)
    this.setAppBar(true);
    this.jobposts();
    //this.trainingposts()
    this.programposts();
  },
  methods: {
    ...mapMutations(["setLoggedIn", "setAppBar", "setMonthDailySales"]),
    jobposts() {
      this.jobs = []
      this.$http
        .post("post/list", { type: "job" })
        .then((response) => {
          response.data.status?this.jobs = response.data.posts:this.jobs = []
            console.log(response.data.posts)
        })
        .catch((e) => {
          console.log(e);
        });
    },
    trainingposts() {
      this.$http
        .post("post/list", { type: "training" })
        .then((response) => {
          response.data.status
            ? (this.trainings = response.data.posts)
            : (this.trainings = []);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    programposts() {
      this.$http
        .post("post/list", { type: "program" })
        .then((response) => {
          response.data.status
            ? (this.programs = response.data.posts)
            : (this.programs = []);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>