

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
          <v-toolbar dense flat>
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
              <v-col cols="12" md="3">
                <va-file-upload
                  :preset="company.medias.logo"
                  @UploadEvent="imageUrl"
                  class="profile"
                />
              </v-col>
              <v-col cols="12" md="9">
                <v-stepper v-model="e1">
                  <v-stepper-header>
                    <v-stepper-step :complete="e1 > 1" step="1">
                      Agency Details
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step :complete="e1 > 2" step="2">
                      Agency Contact Details
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step step="3"> Requirements </v-stepper-step>
                  </v-stepper-header>

                  <v-stepper-items>
                    <v-stepper-content step="1">
                      <v-row>
                        <v-col cols="12" sm="12" md="8">
                          <v-text-field
                            v-model="company.name"
                            label="Agency Name"
                            :rules="[rules.required]"
                            required
                            outlined
                            dense
                            color="green"
                            class="mb-n6"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="12" md="4">
                          <v-text-field
                            v-model="company.acronym"
                            label="Acronym / Abbreviation"
                            required
                            outlined
                            dense
                            color="green"
                            :rules="[rules.required]"
                            class="mb-n6"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-select
                            v-model="company.agency_type"
                            :items="agency_type"
                            label="Agency Type"
                            outlined
                            dense
                            color="green"
                            class="mb-n6"
                          >
                          </v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-select
                            v-model="company.total_work_force"
                            :items="totalworkforce"
                            label="Total Work Force"
                            outlined
                            dense
                            color="green"
                            class="mb-n6"
                          >
                          </v-select>
                        </v-col>
                        <v-col cols="12" md="3" sm="12">
                          <v-combobox
                            v-model="company.region"
                            :items="address"
                            item-text="region_name"
                            outlined
                            dense
                            color="success"
                            label="Region"
                            @change="formattype('REGION')"
                            return-object
                            single-line
                            :rules="[rules.required]"
                            class="mb-n6"
                          >
                          </v-combobox>
                        </v-col>
                        <v-col cols="12" md="3" sm="12">
                          <v-combobox
                            v-model="company.province"
                            :items="provincename"
                            :disabled="region == '' ? true : false"
                            outlined
                            dense
                            color="success"
                            label="Province"
                            @change="formattype('PROVINCE')"
                            return-object
                            single-line
                            :rules="[rules.required]"
                            class="mb-n6"
                          >
                          </v-combobox>
                        </v-col>
                        <v-col cols="12" md="3" sm="12">
                          <v-combobox
                            v-model="company.city"
                            :items="cityname"
                            :disabled="province == '' ? true : false"
                            outlined
                            dense
                            label="Municipality / City"
                            @change="formattype('CITY')"
                            return-object
                            color="success"
                            :rules="[rules.required]"
                            single-line
                            class="mb-n6"
                          >
                          </v-combobox>
                        </v-col>
                        <v-col cols="12" md="3" sm="12">
                          <v-combobox
                            v-model="company.baranggay"
                            label="Baranggay"
                            :disabled="city == '' ? true : false"
                            outlined
                            dense
                            color="success"
                            :items="brgyname"
                            :rules="[rules.required]"
                            class="mb-n6"
                          ></v-combobox>
                        </v-col>
                        <v-col cols="12" md="12" sm="12">
                          <v-text-field
                            v-model="company.house"
                            label="House No. / Street / Village"
                            required
                            outlined
                            dense
                            color="success"
                            :rules="[rules.required]"
                          ></v-text-field>
                        </v-col>
                      </v-row>

                      <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>

                      <!-- <v-btn text>
                        Cancel
                      </v-btn> -->
                    </v-stepper-content>

                    <v-stepper-content step="2">
                     
                            <v-container fluid>
                              <v-row>
                                <v-col cols="12" sm="2" md="2">
                                  <v-select
                                    v-model="company.title"
                                    :items="title"
                                    label="Title"
                                    outlined
                                    dense
                                    multiple
                                    small-chips
                                    color="green"
                                    :rules="[rules.required]"
                                    class="mb-n6"
                                  >
                                  </v-select>
                                </v-col>
                                <v-col cols="12" sm="10" md="10">
                                  <v-text-field
                                    v-model="company.contact_person"
                                    label="Contact Person (Full Name)"
                                    required
                                    outlined
                                    dense
                                    :rules="[rules.required]"
                                    color="green"
                                    class="mb-n6"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="3" md="3">
                                  <v-text-field
                                    v-model="company.position"
                                    label="Position"
                                    required
                                    outlined
                                    dense
                                    color="green"
                                    :rules="[rules.required]"
                                    class="mb-n6"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="3" md="3">
                                  <v-text-field
                                    v-model="company.tel_num"
                                    label="Telephone Number"
                                    required
                                    type="number"
                                    outlined
                                    dense
                                    :rules="[rules.required]"
                                    color="green"
                                    hide-spin-buttons
                                    class="mb-n6"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="3" md="3">
                                  <v-text-field
                                    v-model="company.contact_no"
                                    label="Mobile Number"
                                    required
                                    outlined
                                    dense
                                    type="number"
                                    :rules="[rules.required]"
                                    color="green"
                                    hide-spin-buttons
                                    class="mb-n6"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="3" md="3">
                                  <v-text-field
                                    v-model="company.email"
                                    label="E-mail Address"
                                    required
                                    outlined
                                    dense
                                    type="email"
                                    :rules="[rules.email]"
                                    color="green"
                                    class="mb-n6"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                            </v-container>

                      <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

                      <v-btn color="warning" text @click="e1 = 1"> Cancel </v-btn>
                    </v-stepper-content>

                    <v-stepper-content step="3">
                          <v-container fluid>
                            <v-row>
                              <v-col cols="12" sm="12" md="6">
                                <v-file-input
                                  v-model="company.files"
                                  color="green accent-4"
                                  counter
                                  label="Business License"
                                  multiple
                                  dense
                                  placeholder="Select your files"
                                  prepend-icon="mdi-paperclip"
                                  outlined
                                  :show-size="1000"
                                  :rules="rules"
                                  class="mb-n6"
                                >
                                </v-file-input>
                              </v-col>
                              <v-col cols="12" sm="12" md="6">
                                <v-file-input
                                  v-model="company.files_permit"
                                  color="green accent-4"
                                  counter
                                  label="Business Permit"
                                  multiple
                                  dense
                                  placeholder="Select your files"
                                  prepend-icon="mdi-paperclip"
                                  outlined
                                  :show-size="1000"
                                  :rules="rules"
                                >
                                </v-file-input>
                              </v-col>
                            </v-row>
                          </v-container>

                      <!-- <v-btn color="primary" @click="e1 = 1">
                        Continue
                      </v-btn> -->

                      <v-btn color="warning" @click="e1 = 2"> Cancel </v-btn>
                    </v-stepper-content>
                  </v-stepper-items>
                </v-stepper>
              </v-col>
            </v-row>
            <p class="mt-6">
              <v-icon left color="success">mdi-domain</v-icon> Company Overview
            </p>
            <div>
              <v-tiptap v-model="company.overview" />
            </div>
          </v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
import { mapMutations } from "vuex";
export default {
  name: "JobsPage",

  data: () => ({
    e1: 1,
    state: "new",
    overview: "",
    company: { medias: { logo: "" } },
    jobs: [],
    agency_type: [
      "State/Local University or College",
      "National Agency",
      "Government Office",
      "Government-owned and Controlled Corporation",
      "Government Financial Institution",
      "Infrastructure and Utilities Group",
    ],
    programs: [
      {
        avatar:
          "https://image-service-cdn.seek.com.au/d1c627a5352a1bff446757186007f79f838186dc/ee4dce1061f3f616224767ad58cb2fc751b8d2dc",
        title: "IT Consultant",
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
    ],
    rules: {
      required: (v) => !!v || "Required",
      email: (v) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(v) || "Invalid e-mail.";
      },
      counter: (v) => v.length <= 11 || "Max 11 digits",
    },
  }),

  computed: {},
  created() {
    if (this.$session.exists()) {
      this.$http.defaults.headers.common["Authorization"] =
        "Bearer " + this.$session.get("jwt");
      this.setLoggedIn(true);
      this.setAppBar(true);
      this.myCompany();
      // this.myJobs();
    }
  },
  methods: {
    ...mapMutations(['setLoggedIn', 'setAppBar', 'setMonthDailySales']),
    imageUrl(data) {
      this.company.medias.logo = data
    },
    myJobs() {
      this.$http.post('post/my_post', { type: 'job' }).then(response => {
        response.data.status ? this.jobs = response.data.posts : this.jobs = []
      }).catch(e => {
        console.log(e)
      })
    },
    saveCompany() {
      console.log("save=",this.company)
      let method = 'company/register'
      if (this.state == 'exist') {
        method = 'company/update'
      }
      this.$http.post(method, this.company).then(response => {
        console.log(response.data)
        response.data.status ? this.VA_ALERT('success', response.data.message) : this.VA_ALERT('error', response.data.message)
      }).catch(e => {
        console.log(e)
      })
    },
    myCompany() {
      this.$http.get('company/my_company').then(response => {
        if (response.data.status) {
          this.company = response.data.company
          this.state = 'exist'
          console.log("this company=",this.company)
        }
      }).catch(e => {
        console.log(e)
      })
    }
  },
};
</script>
  
<style>
.profile {
  cursor: pointer;
}

.profile:hover {
  opacity: 0.5;
}

.profile:active {
  opacity: 100%;
}
</style>