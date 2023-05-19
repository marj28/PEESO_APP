<template>
  <v-app>
    <!-- <core-student-toolbar /> -->
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
            @click="$router.push({ path: 'programview' })"
          >
            <v-card-text>
              <v-row>
                <v-col cols="4" class="text-center">
                  <img :src="$store.state.img_dir + 'program.png'" width="48" />
                </v-col>
                <v-col cols="8">
                  <div class="text-h6">{{ programs.length }}</div>
                  Programs
                </v-col>
              </v-row>
            </v-card-text>
            <v-card
              height="70"
              width="100%"
              class="pa-2"
              align="right"
              style="background: white; color: green"
              @click="$router.push({ path: 'ScholarshipApplied' })"
            >
              <h4 class="ma-1">
                <v-icon style="color: green" right size="20">
                  mdi-post-outline
                </v-icon>
                224
              </h4>
              <p class="ma-2">Applied Program</p>
            </v-card>
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
                  <img
                    :src="$store.state.img_dir + 'training.png'"
                    width="48"
                  />
                </v-col>
                <v-col cols="8">
                  <div class="text-h6">{{ trainings.length }}</div>
                  Trainings
                </v-col>
              </v-row>
            </v-card-text>
            <v-card
              height="70"
              width="100%"
              class="pa-2"
              align="right"
              style="background: white; color: green"
              @click="$router.push({ path: 'ScholarshipApplied' })"
            >
              <h4 class="ma-1">
                <v-icon style="color: green" right size="20">
                  mdi-post-outline
                </v-icon>
                224
              </h4>
              <p class="ma-2">Applied Training</p>
            </v-card>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
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
                  <div class="text-h6">{{ jobs.length }}</div>
                  Job Posts
                </v-col>
              </v-row>
            </v-card-text>
            <v-card
              height="70"
              width="100%"
              class="pa-2"
              align="right"
              style="background: white; color: green"
              @click="$router.push({ path: 'ScholarshipApplied' })"
            >
              <h4 class="ma-1">
                <v-icon style="color: green" right size="20">
                  mdi-post-outline
                </v-icon>
                224
              </h4>
              <p class="ma-2">Applied Jobs</p>
            </v-card>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="8">
          <v-card>
            <v-card class="mb-4">
              <v-card-title>
                <span class="text-primary">LATEST PROGRAM</span>
              </v-card-title>
              <v-card-text>
                <v-list three-line>
                  <template v-for="(item, index) in programs">
                    <v-list-item :key="index + '-programs'">
                      <v-list-item-avatar tile size="62">
                        <v-img
                          :src="
                            item.medias != null ? item.medias.logo : noImage
                          "
                        />
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title
                          ><a
                            @click="
                              $router.push('post/' + item.id).catch((err) => {})
                            "
                            >{{ item.title }}</a
                          >
                          <span class="text-caption">{{ item.status }}</span>
                        </v-list-item-title>
                        <v-list-item-subtitle v-html="item.subtitle" />
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list>
              </v-card-text>
            </v-card>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <div class="mb-4">
            <widget-training-widget></widget-training-widget>
          </div>
          <v-card>
            <v-toolbar dense elevation="0">
              <span class="text-primary">LATEST JOBS</span>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-list three-line>
                <template v-for="(item, index) in jobs">
                  <v-list-item :key="index + '-job'" v-if="index <= 4">
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
      </v-row>
    </v-container>
  </v-app>
</template>
  <script>
import { mapMutations } from "vuex";
export default {
  name: "StudentPage",
  data: () => ({
    state: "new",
    overview: "",
    company: { medias: { logo: "" } },
    jobs: [],
    trainings: [],
    programs: [],

    // programs: [
    //   {
    //     avatar:
    //       "https://image-service-cdn.seek.com.au/d1c627a5352a1bff446757186007f79f838186dc/ee4dce1061f3f616224767ad58cb2fc751b8d2dc",
    //     title: "IT Consultant",
    //     subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
    //   },
    //   { divider: true, inset: true },
    // ],
  }),
  computed: {},
  created() {
    this.jobposts();
    this.programposts();
    this.trainingposts();
    if (this.$session.exists()) {
      this.$http.defaults.headers.common["Authorization"] =
        "Bearer " + this.$session.get("jwt");
      this.setLoggedIn(true);
      this.setAppBar(true);
      this.myCompany();
      this.myJobs();
    }
  },
  methods: {
    ...mapMutations(["setLoggedIn", "setAppBar", "setMonthDailySales"]),
    jobposts() {
      this.$http
        .post("post/list", { type: "job" })
        .then((response) => {
          response.data.status
            ? (this.jobs = response.data.posts)
            : (this.jobs = []);
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
    imageUrl(data) {
      this.company.medias.logo = data;
    },
    myJobs() {
      this.$http
        .post("post/my_post", { type: "job" })
        .then((response) => {
          response.data.status
            ? (this.jobs = response.data.posts)
            : (this.jobs = []);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    saveCompany() {
      console.log(this.company);
      let method = "company/register";
      if (this.state == "exist") {
        method = "company/update";
      }
      this.$http
        .post(method, this.company)
        .then((response) => {
          console.log(response.data);
          response.data.status
            ? this.VA_ALERT("success", response.data.message)
            : this.VA_ALERT("error", response.data.message);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    myCompany() {
      this.$http
        .get("company/my_company")
        .then((response) => {
          if (response.data.status) {
            this.company = response.data.company;
            this.state = "exist";
            console.log(this.company);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>