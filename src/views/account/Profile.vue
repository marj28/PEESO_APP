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

          <v-navigation-drawer permanent>
            <v-list-item
              link
              @click="
                (personalInformation = true),
                  (employmentStatus = true),
                  (educationalBackground = true),
                  (clientsClassification = true),
                  (technicalTraining = true),
                  (eligibilityLicense = true),
                  (otherSkills = true),
                  (jobRequirements = true),
                  (personalInformationForm = false),
                  (employmentStatusForm = false),
                  (educationalBackgroundForm = false),
                  (clientsClassificationForm = false),
                  (technicalTrainingForm = false),
                  (eligibilityLicenseForm = false),
                  (otherSkillsForm = false),
                  (jobRequirementsForm = false)
              "
              ><v-icon left small>mdi-briefcase-variant</v-icon
              >View</v-list-item
            >
            <v-list-item
              link
              @click="
                (personalInformation = true),
                  (employmentStatus = false),
                  (educationalBackground = false),
                  (clientsClassification = false),
                  (technicalTraining = false),
                  (eligibilityLicense = false),
                  (otherSkills = false),
                  (jobRequirements = false),
                  (employmentStatusForm = false),
                  (educationalBackgroundForm = false),
                  (clientsClassificationForm = false),
                  (technicalTrainingForm = false),
                  (eligibilityLicenseForm = false),
                  (otherSkillsForm = false),
                  (jobRequirementsForm = false)
              "
              ><v-icon left small>mdi-briefcase-variant</v-icon>Personal
              Information</v-list-item
            >
            <v-list-item
              link
              @click="
                (personalInformation = false),
                  (employmentStatus = true),
                  (educationalBackground = false),
                  (clientsClassification = false),
                  (technicalTraining = false),
                  (eligibilityLicense = false),
                  (otherSkills = false),
                  (jobRequirements = false),
                  (personalInformationForm = false),
                  (educationalBackgroundForm = false),
                  (clientsClassificationForm = false),
                  (technicalTrainingForm = false),
                  (eligibilityLicenseForm = false),
                  (otherSkillsForm = false),
                  (jobRequirementsForm = false)
              "
              ><v-icon left small>mdi-folder-information</v-icon>Employment
              Status</v-list-item
            >
            <v-list-item
              link
              @click="
                (personalInformation = false),
                  (employmentStatus = false),
                  (educationalBackground = true),
                  (clientsClassification = false),
                  (technicalTraining = false),
                  (eligibilityLicense = false),
                  (otherSkills = false),
                  (jobRequirements = false),
                  (personalInformationForm = false),
                  (employmentStatusForm = false),
                  (clientsClassificationForm = false),
                  (technicalTrainingForm = false),
                  (eligibilityLicenseForm = false),
                  (otherSkillsForm = false),
                  (jobRequirementsForm = false)
              "
              ><v-icon left small>mdi-school-outline</v-icon>Educational
              Background</v-list-item
            >
            <v-list-item
              link
              @click="
                (personalInformation = false),
                  (employmentStatus = false),
                  (educationalBackground = false),
                  (clientsClassification = true),
                  (technicalTraining = false),
                  (eligibilityLicense = false),
                  (otherSkills = false),
                  (jobRequirements = false),
                  (personalInformationForm = false),
                  (employmentStatusForm = false),
                  (educationalBackgroundForm = false),
                  (technicalTrainingForm = false),
                  (eligibilityLicenseForm = false),
                  (otherSkillsForm = false),
                  (jobRequirementsForm = false)
              "
              ><v-icon left small>mdi-translate-variant</v-icon>Client's
              Classification</v-list-item
            >
            <v-list-item
              link
              @click="
                (personalInformation = false),
                  (employmentStatus = false),
                  (educationalBackground = false),
                  (clientsClassification = false),
                  (technicalTraining = true),
                  (eligibilityLicense = false),
                  (otherSkills = false),
                  (jobRequirements = false),
                  (personalInformationForm = false),
                  (employmentStatusForm = false),
                  (educationalBackgroundForm = false),
                  (clientsClassificationForm = false),
                  (eligibilityLicenseForm = false),
                  (otherSkillsForm = false),
                  (jobRequirementsForm = false)
              "
              ><v-icon left small>mdi-card-account-details-outline</v-icon
              >Technical / Vocational and Other Training</v-list-item
            >
            <v-list-item
              link
              @click="
                (personalInformation = false),
                  (employmentStatus = false),
                  (educationalBackground = false),
                  (clientsClassification = false),
                  (technicalTraining = false),
                  (eligibilityLicense = true),
                  (otherSkills = false),
                  (jobRequirements = false),
                  (personalInformationForm = false),
                  (employmentStatusForm = false),
                  (educationalBackgroundForm = false),
                  (clientsClassificationForm = false),
                  (technicalTrainingForm = false),
                  (otherSkillsForm = false),
                  (jobRequirementsForm = false)
              "
              ><v-icon left small>mdi-cog</v-icon>Eligibility/Professional
              License</v-list-item
            >
            <v-list-item
              link
              @click="
                (personalInformation = false),
                  (employmentStatus = false),
                  (educationalBackground = false),
                  (clientsClassification = false),
                  (technicalTraining = false),
                  (eligibilityLicense = false),
                  (otherSkills = true),
                  (jobRequirements = false),
                  (personalInformationForm = false),
                  (employmentStatusForm = false),
                  (educationalBackgroundForm = false),
                  (clientsClassificationForm = false),
                  (technicalTrainingForm = false),
                  (eligibilityLicenseForm = false),
                  (jobRequirementsForm = false)
              "
              ><v-icon left small>mdi-card-account-details-outline</v-icon>Other
              Skills</v-list-item
            >
            <v-list-item
              link
              @click="
                (personalInformation = false),
                  (employmentStatus = false),
                  (educationalBackground = false),
                  (clientsClassification = false),
                  (technicalTraining = false),
                  (eligibilityLicense = false),
                  (otherSkills = false),
                  (jobRequirements = true),
                  (personalInformationForm = false),
                  (employmentStatusForm = false),
                  (educationalBackgroundForm = false),
                  (clientsClassificationForm = false),
                  (technicalTrainingForm = false),
                  (eligibilityLicenseForm = false),
                  (otherSkillsForm = false)
              "
              ><v-icon left small>mdi-cog</v-icon>Job Preference /
              Requirements</v-list-item
            >
          </v-navigation-drawer>
        </v-card>
      </v-col>
      <v-col cols="9">
        <v-card v-show="personalInformation">
          <v-toolbar dense elevation="1"
            ><v-icon left small>mdi-briefcase-variant</v-icon>Personal
            Information
            <v-icon
              v-if="!employmentStatus"
              right
              small
              color="orange"
              @click="personalInformationForm = true"
              >mdi-pencil</v-icon
            ></v-toolbar
          >
          <v-card-text>
            <pi-personal-information
              v-bind:personalInformations="!personalInformationForm"
              v-bind:personalInformationForms="personalInformationForm"
            />

            </v-card-text
          >
        </v-card>
        <v-card v-show="employmentStatus">
          <v-toolbar dense elevation="1"
            ><v-icon left small>mdi-briefcase-variant</v-icon>Employment Status
            <v-icon
              v-if="!personalInformation"
              right
              small
              color="orange"
              @click="employmentStatusForm = true"
              >mdi-pencil</v-icon
            ></v-toolbar
          >
          <v-card-text>
            <pi-employment-status
              v-bind:employmentStatuss="!employmentStatusForm"
              v-bind:employmentStatusForms="employmentStatusForm"
            />
            
          </v-card-text>
        </v-card>
        <v-card v-show="educationalBackground">
          <v-toolbar dense elevation="1"
            ><v-icon left small>mdi-briefcase-variant</v-icon>Educational
            Background<v-icon
              v-if="!personalInformation"
              right
              small
              color="orange"
              @click="educationalBackgroundForm = true"
              >mdi-pencil</v-icon
            ></v-toolbar
          >
          <v-card-text>
            <pi-educational-background
              v-bind:educationalBackgrounds="!educationalBackgroundForm"
              v-bind:educationalBackgroundForms="educationalBackgroundForm"
            />
            
          </v-card-text>
        </v-card>
        <v-card v-if="clientsClassification === true">
          <v-toolbar dense elevation="1"
            ><v-icon left small>mdi-briefcase-variant</v-icon>Client's
            Classification
            <v-icon
              v-if="!personalInformation"
              right
              small
              color="orange"
              @click="clientsClassificationForm = true"
              >mdi-pencil</v-icon
            ></v-toolbar
          >
          <v-card-text>
            <pi-client-classification
              v-bind:clientsClassifications="!clientsClassificationForm"
              v-bind:clientsClassificationForms="clientsClassificationForm"
          />
          </v-card-text>
        </v-card>
        <v-card v-if="technicalTraining">
          <v-toolbar dense elevation="1"
            ><v-icon left small>mdi-briefcase-variant</v-icon>Technical /
            Vocational and Other Training<v-icon
              v-if="!personalInformation"
              right
              small
              color="orange"
              @click="technicalTrainingForm = true"
              >mdi-pencil</v-icon
            ></v-toolbar
          >
          <v-card-text>
            <pi-technical-training
              v-bind:technicalTrainings="!technicalTrainingForm"
              v-bind:technicalTrainingForms="technicalTrainingForm"
            />
            
          </v-card-text>
        </v-card>
        <v-card v-if="eligibilityLicense">
          <v-toolbar dense elevation="1"
            ><v-icon left small>mdi-briefcase-variant</v-icon
            >Eligibility/Professional License<v-icon
              v-if="!personalInformation"
              right
              small
              color="orange"
              @click="eligibilityLicenseForm = true"
              >mdi-pencil</v-icon
            ></v-toolbar
          >
          <v-card-text>
            <pi-eligibility-license
              v-bind:eligibilityLicenses="!eligibilityLicenseForm"
              v-bind:eligibilityLicenseForms="eligibilityLicenseForm"
            />
            
          </v-card-text>
        </v-card>
        <v-card v-if="otherSkills">
          <v-toolbar dense elevation="1"
            ><v-icon left small>mdi-briefcase-variant</v-icon>Other
            Skills<v-icon
              v-if="!personalInformation"
              right
              small
              color="orange"
              @click="otherSkillsForm = true"
              >mdi-pencil</v-icon
            ></v-toolbar
          >
          <v-card-text>
            <pi-other-skills
              v-bind:otherSkillss="!otherSkillsForm"
              v-bind:otherSkillsForms="otherSkillsForm"
            />
          </v-card-text>
        </v-card>
        <v-card v-if="jobRequirements">
          <v-toolbar dense elevation="1"
            ><v-icon left small>mdi-briefcase-variant</v-icon>Job Preference /
            Requirements<v-icon
              v-if="!personalInformation"
              right
              small
              color="orange"
              @click="jobRequirementsForm = true"
              >mdi-pencil</v-icon
            ></v-toolbar
          >
          <v-card-text
            ><pi-job-requirements
              v-bind:jobRequirementss="!jobRequirementsForm"
              v-bind:jobRequirementsForms="jobRequirementsForm"
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
  name: "JobsPage",
  data: () => ({
    personalInformation: true,
    personalInformationForm: false,
    employmentStatus: true,
    employmentStatusForm: false,
    educationalBackground: true,
    educationalBackgroundForm: false,
    clientsClassification: true,
    clientsClassificationForm: false,
    technicalTraining: true,
    technicalTrainingForm: false,
    eligibilityLicense: true,
    eligibilityLicenseForm: false,
    otherSkills: true,
    otherSkillsForm: false,
    jobRequirements: true,
    jobRequirementsForm: false,
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
  },
};
</script>