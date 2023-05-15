<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
<<<<<<< HEAD
            <div style="float:left;" class="mr-8">
              <img :src="$store.state.systemlogo" width="110px">
=======
            <div style="float: left" class="mr-8">
              <img :src="$store.state.systemlogo" width="110px" />
>>>>>>> 13d9a20 (adding rules in student profile)
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
      <v-col cols="4">
        <v-card @click="$router.push({ path: 'program-page' })">
          <v-card-text>
            <v-row>
              <v-col cols="4" class="text-center">
<<<<<<< HEAD
                <img :src="$store.state.img_dir + 'program.png'" width="48">
=======
                <img :src="$store.state.img_dir + 'program.png'" width="48" />
>>>>>>> 13d9a20 (adding rules in student profile)
              </v-col>
              <v-col cols="8">
                <div class="text-h6">2</div>
                Programs
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card color="primary" dark>
          <v-card-text>
            <v-row>
              <v-col cols="4" class="text-center">
<<<<<<< HEAD
                <img :src="$store.state.img_dir + 'job.png'" width="48">
=======
                <img :src="$store.state.img_dir + 'job.png'" width="48" />
>>>>>>> 13d9a20 (adding rules in student profile)
              </v-col>
              <v-col cols="8">
                <div class="text-h6">1,440</div>
                Job Posts
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card  @click="$router.push({ path: 'training-details' })">
          <v-card-text>
            <v-row>
              <v-col cols="4" class="text-center">
                <img :src="$store.state.img_dir + 'training.png'" width="48" />
              </v-col>
              <v-col cols="8">
                <div class="text-h6">888</div>
                Trainings
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="8">
        <v-card>
          <v-toolbar dense elevation="1">
            <span class="text-primary">
              <v-icon left color="success">mdi-domain</v-icon> Company
              Profile</span
            >
            <v-spacer />
            <v-btn small color="success" @click="saveCompany()"
              ><v-icon left>mdi-domain</v-icon>Save</v-btn
            >
          </v-toolbar>
          <v-card-text>
            <v-row>
              <v-col cols="4">
                <va-file-upload
                  :preset="company.medias.logo"
                  @UploadEvent="imageUrl"
                />
              </v-col>
              <v-col cols="8">
                <v-text-field
                  outlined
                  v-model="company.name"
                  class=""
                  prepend-inner-icon="mdi-rename-outline"
                  dense
                  label="Company Name"
                />
                <v-text-field
                  outlined
                  v-model="company.address"
                  class=""
                  prepend-inner-icon="mdi-office-building-marker-outline"
                  dense
                  label="Address"
                />
                <v-text-field
                  outlined
                  v-model="company.email"
                  class=""
                  prepend-inner-icon="mdi-email"
                  dense
                  label="Email Address"
                />
                <v-text-field
                  outlined
                  v-model="company.contact_number"
                  class=""
                  prepend-inner-icon="mdi-phone"
                  dense
                  label="Contact Number"
                />
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      outlined
                      v-model="company.contact_number"
                      class="mb-n6"
                      prepend-inner-icon="mdi-phone"
                      dense
                      label="Contact Number"
                    />
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      outlined
                      v-model="company.contact_number"
                      class=""
                      prepend-inner-icon="mdi-phone"
                      dense
                      label="Contact Number"
                    />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <p>
              <v-icon left color="success">mdi-domain</v-icon> Company Overview
            </p>
            <div>
              <v-tiptap v-model="company.overview" />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card class="mb-4">
          <v-toolbar dense>
            <span class="text-primary">YOUR JOB POSTS</span>
            <v-spacer />
            <v-btn
              x-small
              color="info"
              @click="$router.push('/job-post').catch((err) => {})"
              >See all...</v-btn
            >
          </v-toolbar>
          <v-card-text>
            <v-list three-line>
              <template v-for="(item, index) in jobs">
                <v-list-item :key="index + '-jobs'">
                  <!-- <v-list-item-avatar>
                    <v-img :src="item.avatar" />
                  </v-list-item-avatar> -->
                  <v-list-item-content>
                    <v-list-item-title
                      ><a
                        @click="
                          $router.push('post/' + item.id).catch((err) => {})
                        "
                        >{{ item.title }}</a
                      >
                      -
                      <span class="text-caption">{{
                        item.status
                      }}</span></v-list-item-title
                    >
                    <v-list-item-subtitle>
                      <em class="text-info">{{
                        $moment(item.created_dt).startOf("hour").fromNow()
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

        <v-card class="mb-4">
          <v-card-title>
            <span class="text-primary">Latest Programs</span>
          </v-card-title>
          <v-card-text>
            <v-list three-line>
              <template v-for="(item, index) in programs">
                <v-subheader v-if="item.header" :key="item.header" v-text="item.header" />

                <v-divider v-else-if="item.divider" :key="index" :inset="item.inset" />

                <v-list-item v-else :key="item.title">
                  <v-list-item-avatar>
                    <v-img :src="item.avatar" />
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-html="item.title" />
                    <v-list-item-subtitle v-html="item.subtitle" />
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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