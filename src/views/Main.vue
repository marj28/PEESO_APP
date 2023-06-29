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
    <!-- <v-row>
      <v-col cols="6" md="4">
        <v-card color="primary" dark @click="$router.push({ path: 'job-listing' })">
          <v-card-text>
            <v-row>
              <v-col cols="4" class="text-center">
                <img :src="$store.state.img_dir + 'job.png'" width="48" />
              </v-col>
              <v-col cols="8">
                <div class="text-h6"></div>
                Job Posts
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="6" md="4">
        <v-card color="primary" dark @click="$router.push({ path: 'trainingview' })">
          <v-card-text>
            <v-row>
              <v-col cols="4" class="text-center">
                <img :src="$store.state.img_dir + 'training.png'" width="48" />
              </v-col>
              <v-col cols="8">
                <div class="text-h6"></div>
                Trainings
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card color="primary" dark @click="$router.push({ path: 'programview' })">
          <v-card-text>
            <v-row>
              <v-col cols="4" class="text-center">
                <img :src="$store.state.img_dir + 'program.png'" width="48" />
              </v-col>
              <v-col cols="8">
                <div class="text-h6"></div>
                Programs
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row> -->

    <v-row>
      <!--                                                                                                          -->
    </v-row>
    <v-col cols="12">
      <div>
        <CarouselHomePage style="margin-bottom: 2%; cursor: pointer;" />
        <!-- <div>
      <img src="@/assets/opportunties.jpg" class="picture1" alt="123" style="width: 60%; margin-left: %;" />
    </div> -->
      </div>
    </v-col>

    <v-row>
      <v-col cols="4" md="4">
        <v-card color="primary" dark @click="$router.push({ path: 'coaching-and-education-facilitation' })"
          style="height: 100%;">
          <v-card-text>
            <v-row>
              <v-col cols="4" class="text-center">
                <img :src="$store.state.img_dir + 'job.png'" width="48" />
              </v-col>
              <v-col cols="8">
                <div class="text-h6"> Career Guidance and Employment Coaching and Education Facilitation Division</div>

              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="4" md="4">
        <v-card color="primary" dark @click="$router.push({ path: 'matching-and-refferal-division' })"
          style="height: 100%;">
          <v-card-text>
            <v-row>
              <v-col cols="4" class="text-center">
                <img :src="$store.state.img_dir + 'training.png'" width="48" />
              </v-col>
              <v-col cols="8">
                <div class="text-h6">Livelihood, Entrepreneurship, Skills Development And Project Monitoring And
                  Evaluation Division</div>

              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4" md="4">
        <v-card color="primary" dark @click="$router.push({ path: 'labor-market' })"
          style="height: 100%;">
          <v-card-text>
            <v-row>
              <v-col cols="4" class="text-center">
                <img :src="$store.state.img_dir + 'job.png'" width="48" />
              </v-col>
              <v-col cols="8">
                <div class="text-h6">Labor Market Information, Matching and Referral Division</div>

              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- <v-col cols="3" md="3">
        <v-card color="primary" dark @click="$router.push({ path: 'labor-market' })" style="height: 100%;">
          <v-card-text>
            <v-row>
              <v-col cols="4" class="text-center">
                <img :src="$store.state.img_dir + 'training.png'" width="48" />
              </v-col>
              <v-col cols="8">
                <div class="text-h6">Labor Market Information, Matching and Referral Division</div>

              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col> -->


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
          response.data.status ? this.jobs = response.data.posts : this.jobs = []
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