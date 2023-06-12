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
          @click="$router.push({ path: 'job-listing' })"
        >
          <v-card-text>
            <v-row>
              <v-col cols="4" class="text-center">
                <img :src="$store.state.img_dir + 'job.png'" width="48" />
              </v-col>
              <v-col cols="8">
                <div class="text-h6" ></div>
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
                <div class="text-h6" ></div>
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
                <div class="text-h6" ></div>
                Programs
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="8">
        <v-card>
          <v-toolbar dense elevation="0">
            <span class="text-primary mb-n6">TOP JOB VACANCIES</span>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-list three-line v-if="jobs.length >0 ">
              <template v-for="(item, index) in jobs">
                <v-list-item :key="index + '-job'" v-if="index <=4">
                  <v-list-item-avatar tile size="62">
                    <v-img
                      :src="item.medias != null ? item.medias.logo : noImage"
                    />
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title
                      ><a
                        @click="
                          $router.push('post/' + item.id).catch((err) => {})
                        "
                        >{{ item.title }}</a
                      ></v-list-item-title
                    >
                    <v-list-item-subtitle>
                      <em class="text-info">{{
                        $moment(item.created_dt).startOf("day").fromNow()
                      }}</em>
                      - {{ item.post_meta.company }} -
                      {{ item.post_meta.company_address }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
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
    noImage: require("@/assets/no-image-icon.png"),
    jobs: [],
    trainings: [],
    programs: [],
  }),
  computed: {},
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