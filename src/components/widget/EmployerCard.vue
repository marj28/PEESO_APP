<template>
  <div>
    <v-row class="mt-2">
      <v-col cols="6" md="4">
        <v-card
          color="primary"
          dark
          @click="$router.push({ path: 'job-post' })" 
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
        </v-card>
      </v-col>

      <v-col cols="6" md="4">
        <v-card
          color="primary"
          dark
          @click="$router.push({ path: 'applicantlist' })"
        >
          <v-card-text>
            <v-row>
              <v-col cols="4" class="text-center">
                <img :src="$store.state.img_dir + 'training.png'" width="48" />
              </v-col>
              <v-col cols="8">
                <div class="text-h6">888</div>
                Applicant
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card
          color="primary"
          dark
          @click="$router.push({ path: 'hiredapplicant' })"
        >
          <v-card-text>
            <v-row>
              <v-col cols="4" class="text-center">
                <img :src="$store.state.img_dir + 'training.png'" width="48" />
              </v-col>
              <v-col cols="8">
                <div class="text-h6">888</div>
                Hired Applicant List
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
  <script>
import { mapMutations } from "vuex";
export default {
  name: "JobsPage",
  data: () => ({
    state: "new",
    overview: "",
    company: { medias: { logo: "" } },
    jobs: [],

    programs: [
      {
        avatar:
          "https://image-service-cdn.seek.com.au/d1c627a5352a1bff446757186007f79f838186dc/ee4dce1061f3f616224767ad58cb2fc751b8d2dc",
        title: "IT Consultant",
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
    ],
  }),
  computed: {},
  created() {
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