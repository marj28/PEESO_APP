<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-card width="256">
          <div class="pa-3">
            <va-file-upload
              :preset="company.medias.logo"
              @UploadEvent="imageUrl"
            />
          </div>

          <v-divider></v-divider>

          <v-navigation-drawer permanent class="hidden-md-and-down">
            <v-list-item link @click="view()"
              ><v-icon left small>mdi-eye</v-icon
              >View</v-list-item
            >
            <v-list-item link @click="personalinformation()"
              ><v-icon left small>mdi-briefcase-variant</v-icon>Personal
              Information</v-list-item
            >
            <v-list-item link @click="educationalattainment()"
              ><v-icon left small>mdi-school</v-icon>Educational
              Attainment</v-list-item
            >
            <v-list-item link @click="otherinformation()"
              ><v-icon left small>mdi-folder-information</v-icon>Other
              Information</v-list-item
            >
          </v-navigation-drawer>
          <v-menu >
          <!-- Sa icon diay ibutang ang class para ma-hide -->
          <template v-slot:activator="{ on, attrs }">
            <v-icon color="primary" dark v-bind="attrs" v-on="on" class="hidden-lg-and-up">
              mdi-menu
            </v-icon>
          </template>
          <v-list>
            <v-list-item @click="view()">
              <v-list-item-title>View</v-list-item-title>
            </v-list-item>
            <v-list-item @click="personalinformation()">
              <v-list-item-title>Personal Information</v-list-item-title>
            </v-list-item>
            <v-list-item @click="educationalattainment()">
              <v-list-item-title>Educational Attainment</v-list-item-title>
            </v-list-item>
            <v-list-item @click="otherinformation()">
              <v-list-item-title>Other Information</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        </v-card>
      </v-col>
      <v-col cols="9">
        <v-card v-show="personalInformation">
          <v-toolbar dense elevation="1"
            ><v-icon left small>mdi-briefcase-variant</v-icon>Personal
            Information
            <v-icon
              v-if="!otherInformation"
              right
              small
              color="orange"
              @click="personalInformationForm = true"
              >mdi-pencil</v-icon
            ></v-toolbar
          >
          <v-card-text>
            <sp-personal-information
              v-bind:personalInformations="!personalInformationForm"
              v-bind:personalInformationForms="personalInformationForm"
            />
          </v-card-text>
        </v-card>

        <v-card v-show="educationalBackground">
          <v-toolbar dense elevation="1"
            ><v-icon left small>mdi-briefcase-variant</v-icon>Educational
            Attainment<v-icon
              v-if="!personalInformation"
              right
              small
              color="orange"
              @click="educationalBackgroundForm = true"
              >mdi-pencil</v-icon
            ></v-toolbar
          >
          <v-card-text>
            <sp-educational-attainment
              v-bind:educationalBackgrounds="!educationalBackgroundForm"
              v-bind:educationalBackgroundForms="educationalBackgroundForm"
            />
          </v-card-text>
        </v-card>
        <v-card v-show="otherInformation">
          <v-toolbar dense elevation="1"
            ><v-icon left small>mdi-briefcase-variant</v-icon>Other Information
            <v-icon
              v-if="!personalInformation"
              right
              small
              color="orange"
              @click="otherInformationForm = true"
              >mdi-pencil</v-icon
            ></v-toolbar
          >
          <v-card-text>
            <sp-other-information
              v-bind:otherInformations="!otherInformationForm"
              v-bind:otherInformationForms="otherInformationForm"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  <script>
import { mapMutations } from "vuex";
export default {
  name: "StudentProfile",
  data: () => ({
    personalInformation: true,
    personalInformationForm: false,
    otherInformation: true,
    otherInformationForm: false,
    educationalBackground: true,
    educationalBackgroundForm: false,
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
      // this.myCompany();
      // this.myJobs();
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
    view() {
      (this.personalInformation = true),
        (this.personalInformationForm = false),
        (this.otherInformation = true),
        (this.otherInformationForm = false),
        (this.educationalBackground = true),
        (this.educationalBackgroundForm = false);
    },
    personalinformation() {
      (this.personalInformation = true),
        (this.otherInformation = false),
        (this.otherInformationForm = false),
        (this.educationalBackground = false),
        (this.educationalBackgroundForm = false);
    },
    educationalattainment() {
      (this.personalInformation = false),
        (this.personalInformationForm = false),
        (this.otherInformation = false),
        (this.otherInformationForm = false),
        (this.educationalBackground = true);
    },
    otherinformation() {
      (this.personalInformation = false),
        (this.personalInformationForm = false),
        (this.otherInformation = true),
        (this.educationalBackground = false),
        (this.educationalBackgroundForm = false);
    },
  },
};
</script>