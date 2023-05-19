<!-- <template>
  <v-app>
    <employer-navbar />
    <v-main>
      <v-row class="pa-3">
        <v-col>
          <v-card outlined color="#FFFFFF">
            <v-card-title class="d-flex flex-column justify-space-between align-center">
              <v-avatar size="150">
                <img src="@/assets/profileicon.png" />
              </v-avatar>
            </v-card-title>
            <v-card-text class="d-flex flex-column justify-space-between align-center"
              style="color: black; border-style: solid; border-width: 1px;border-color: green;">
              <p class="Employer-name">Employer Name</p>
              <p class="Employer-position">Employer Position</p>
              <p class="Company-name-address">Company Name and Address</p>
            </v-card-text>
            <v-col cols="12" sm="12" md="12" lg="12">
              <v-dialog v-model="dialog2" width="400" persistent>
                <v-card flat>
                  <v-card-title class="text-h6 green darken-2 white--text">
                    Establishment Type
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="success" text
                      @click="dialog2 = false, profilecard_private = true, profilecard_government = false">
                      PRIVATE
                    </v-btn>
                    <v-btn color="warning" text
                      @click="dialog2 = false, profilecard_private = false, profilecard_government = true">
                      PUBLIC
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-show="profilecard_private">
        <v-col style="margin-top: -45px;">
          <ProfileCardPrivate />
        </v-col>
      </v-row>
      <v-row v-show="profilecard_government">
        <v-col style="margin-top: -45px;">
          <ProfileCardGovernment />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {

  },
  data: () => ({
    profilecard_government: false,
    profilecard_private: true,
    dialog2: true,
  })
};
</script>
<style>
.Employer-name {
  margin-top: 5px;
  font-size: 20px;
  font-weight: 700;
}

.Employer-position {
  margin-top: -9px;
  font-size: 15px;
  font-weight: 500;
}

.Company-name-address {
  margin-top: -9px;
  font-size: 15px;
  font-weight: 500;
}
</style> -->








<!-- <template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <div style="float:left;" class="mr-8">
              <img :src="$store.state.systemlogo" width="110px">
            </div>
            <div style="min-height: 100px;">
              <div class="text-h5 font-weight-bold text-primary">
                Welcome
              </div>
              <div>Welcome to Tagum City - PEESO Program</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>



    <v-row>
      <v-col cols="8" style="margin-left: 15%;">
        <v-card>
          <v-toolbar dense elevation="1">
            <span class="text-primary"> <v-icon left color="success">mdi-domain</v-icon> Company Profile</span>
            <v-spacer />
            <v-btn small color="success" @click="saveCompany()"><v-icon left>mdi-domain</v-icon>Save</v-btn>
          </v-toolbar>
          <v-card-text>
            <v-row>
              <v-col cols="4">
                <va-file-upload :preset="company.medias.logo" @UploadEvent="imageUrl" class="profile" />
              </v-col>
              <v-col cols="8" style="margin-top: 5%; ">
                <v-text-field v-model="company.name" class="mb-2" prepend-inner-icon="mdi-rename-outline" dense
                  label="Company Name" />
                <v-text-field v-model="company.address" class="mb-2"
                  prepend-inner-icon="mdi-office-building-marker-outline" dense label="Address" />
                <v-text-field v-model="company.email" class="mb-2" prepend-inner-icon="mdi-email" dense
                  label="Contact Email Address" />
                <v-text-field v-model="company.contact_number" class="mb-2" prepend-inner-icon="mdi-phone" dense
                  label="Contact Number" />
                <v-select label="Select company type" class="mb-2" prepend-inner-icon="mdi-hospital-building" dense
                  v-model="company.company_type" style="width: 60%; margin-top: 2%;"
                  :items="['Private', 'Governement',]"></v-select>
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
    </v-row>
  </v-container>
</template>
<script>
import {
  mapMutations
} from 'vuex'
export default {
  name: 'JobsPage',
  data: () => ({
    state: "new",
    overview: '',
    company: { medias: { logo: "" } },
    jobs: [],
    programs: [
      {
        avatar: 'https://image-service-cdn.seek.com.au/d1c627a5352a1bff446757186007f79f838186dc/ee4dce1061f3f616224767ad58cb2fc751b8d2dc',
        title: 'IT Consultant',
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
    ],
  }),
  computed: {
  },
  created() {
    if (this.$session.exists()) {
      this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      this.setLoggedIn(true)
      this.setAppBar(true)
      this.myCompany()
      this.myJobs()
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
      console.log(this.company)
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
          console.log(this.company)
        }
      }).catch(e => {
        console.log(e)
      })
    }
  },
}
</script>

<style>
.profile {
  cursor: pointer;
}

.profile:hover {
  opacity: .5;
}

.profile:active {
  opacity: 100%;
}
</style> -->




<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <div style="float:left;" class="mr-8">
              <img :src="$store.state.systemlogo" width="110px">
            </div>
            <div style="min-height: 100px;">
              <div class="text-h5 font-weight-bold text-primary">
                Welcome
              </div>
              <div>Welcome to Tagum City - PEESO Program</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>



    <v-row>
      <v-col cols="12">
        <v-card>
          <v-toolbar dense elevation="1">
            <span class="text-primary"> <v-icon left color="success">mdi-domain</v-icon> Company Profile</span>
            <v-spacer />
            <v-btn small color="success" @click="saveCompany()"><v-icon left>mdi-domain</v-icon>Save</v-btn>
          </v-toolbar>
          <v-card-text>
            <v-row>
              <v-col cols="3">
                <va-file-upload :preset="company.medias.logo" @UploadEvent="imageUrl" class="profile" />
              </v-col>
              <!-- <v-col cols="8" style="margin-top: 5%; ">
                  <v-text-field v-model="company.name" class="mb-2" prepend-inner-icon="mdi-rename-outline" dense
                    label="Company Name" />
                  <v-text-field v-model="company.address" class="mb-2"
                    prepend-inner-icon="mdi-office-building-marker-outline" dense label="Address" />
                  <v-text-field v-model="company.email" class="mb-2" prepend-inner-icon="mdi-email" dense
                    label="Contact Email Address" />
                  <v-text-field v-model="company.contact_number" class="mb-2" prepend-inner-icon="mdi-phone" dense
                    label="Contact Number" />
                  <v-select label="Select company type" class="mb-2" prepend-inner-icon="mdi-hospital-building" dense
                    v-model="company.company_type" style="width: 60%; margin-top: 2%;"
                    :items="['Private', 'Governement',]"></v-select>
                </v-col> -->
              <v-stepper v-model="e1" style="width: 75%;">
                <v-stepper-header>
                  <v-stepper-step :complete="e1 > 1" step="1">
                    Agency Details
                  </v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step :complete="e1 > 2" step="2">
                    Agency Contact Details
                  </v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step step="3">
                    Requirements
                  </v-stepper-step>
                </v-stepper-header>

                <v-stepper-items>
                  <v-stepper-content step="1">
                    <v-card class="mb-12" height="100%">
                      <v-row>
                        <v-col cols="12" sm="12" md="8">
                          <v-text-field v-model="company.agency_name" label="Agency Name" :rules="[rules.required]"
                            required outlined dense color="green"></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="12" md="4">
                          <v-text-field v-model="company.acronym" label="Acronym / Abbreviation" required outlined dense
                            color="green" :rules="[rules.required]"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-select v-model="company.agency_type" :items="agency_type" label="Agency Type" outlined dense
                            color="green">
                          </v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-select v-model="company.total_work_force" :items="totalworkforce" label="Total Work Force"
                            outlined dense color="green">
                          </v-select>
                        </v-col>
                        <v-col cols="12" md="3" sm="12">
                          <v-combobox v-model="company.region" :items="address" item-text="region_name" outlined dense
                            color="success" label="Region" @change="formattype('REGION')" return-object single-line
                            :rules="[rules.required]">
                          </v-combobox>

                        </v-col>
                        <v-col cols="12" md="3" sm="12">
                          <v-combobox v-model="company.province" :items="provincename"
                            :disabled="region == '' ? true : false" outlined dense color="success" label="Province"
                            @change="formattype('PROVINCE')" return-object single-line :rules="[rules.required]">

                          </v-combobox>
                        </v-col>
                        <v-col cols="12" md="3" sm="12">
                          <v-combobox v-model="company.city" :items="cityname" :disabled="province == '' ? true : false"
                            outlined dense label="Municipality / City" @change="formattype('CITY')" return-object
                            color="success" :rules="[rules.required]" single-line>

                          </v-combobox>
                        </v-col>
                        <v-col cols="12" md="3" sm="12">
                          <v-combobox v-model="company.baranggay" label="Baranggay" :disabled="city == '' ? true : false"
                            outlined dense color="success" :items="brgyname" :rules="[rules.required]"></v-combobox>
                        </v-col>
                        <v-col cols="12" md="12" sm="12">
                          <v-text-field v-model="company.house" label="House No. / Street / Village" required outlined
                            dense color="success" :rules="[rules.required]"></v-text-field>
                        </v-col>
                      </v-row>
                    </v-card>

                    <v-btn color="primary" @click="e1 = 2">
                      Continue
                    </v-btn>

                    <!-- <v-btn text>
                        Cancel
                      </v-btn> -->
                  </v-stepper-content>

                  <v-stepper-content step="2">
                    <v-card class="mb-12" color="grey lighten-1" height="200px">
                      <v-card>
                        <v-card-text>
                          <v-container fluid>
                            <v-row>
                              <v-col cols="12" sm="2" md="2">
                                <v-select v-model="company.title" :items="title" label="Title" outlined dense multiple
                                  small-chips color="green" :rules="[rules.required]">
                                </v-select>
                              </v-col>
                              <v-col cols="12" sm="10" md="10">
                                <v-text-field v-model="company.contact_person" label="Contact Person (Full Name)" required
                                  outlined dense :rules="[rules.required]" color="green"></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="3" md="3">
                                <v-text-field v-model="company.position" label="Position" required outlined dense
                                  color="green" :rules="[rules.required]"></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="3" md="3">
                                <v-text-field v-model="company.tel_num" label="Telephone Number" required type="number"
                                  outlined dense :rules="[rules.required]" color="green" hide-spin-buttons></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="3" md="3">
                                <v-text-field v-model="company.mobile_num" label="Mobile Number" required outlined dense
                                  type="number" :rules="[rules.required]" color="green" hide-spin-buttons></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="3" md="3">
                                <v-text-field v-model="company.e_mail_address" label="E-mail Address" required outlined
                                  dense type="email" :rules=[rules.email] color="green"></v-text-field>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-text>
                      </v-card>
                    </v-card>

                    <v-btn color="primary" @click="e1 = 3">
                      Continue
                    </v-btn>

                    <v-btn text @click="e1 = 1">
                      Cancel
                    </v-btn>
                  </v-stepper-content>

                  <v-stepper-content step="3">
                    <v-card class="mb-12" height="100%">

                      <v-card-text>
                        <v-container fluid>
                          <v-row>
                            <v-col cols="12" sm="12" md="6">
                              <v-file-input v-model="company.files" color="green accent-4" counter
                                label="Business License" multiple dense placeholder="Select your files"
                                prepend-icon="mdi-paperclip" outlined :show-size="1000" :rules=rules>
                              </v-file-input>
                            </v-col>
                            <v-col cols="12" sm="12" md="6">
                              <v-file-input v-model="company.files_permit" color="green accent-4" counter
                                label="Business Permit" multiple dense placeholder="Select your files"
                                prepend-icon="mdi-paperclip" outlined :show-size="1000" :rules=rules>
                              </v-file-input>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>

                    </v-card>

                    <!-- <v-btn color="primary" @click="e1 = 1">
                        Continue
                      </v-btn> -->

                    <v-btn text @click="e1 = 2">
                      Cancel
                    </v-btn>
                  </v-stepper-content>
                </v-stepper-items>
              </v-stepper>
            </v-row>
            <p style="margin-top: %;">
              <v-icon left color="success">mdi-domain</v-icon> Company Overview
            </p>
            <div>
              <v-tiptap v-model="company.overview" />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>




  </v-container>
</template>
  
<script>
import {
  mapMutations
} from 'vuex'
export default {
  name: 'JobsPage',

  data: () => ({
    e1: 1,
    state: "new",
    overview: '',
    company: { medias: { logo: "" } },
    jobs: [],
    programs: [
      {
        avatar: 'https://image-service-cdn.seek.com.au/d1c627a5352a1bff446757186007f79f838186dc/ee4dce1061f3f616224767ad58cb2fc751b8d2dc',
        title: 'IT Consultant',
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
    ],
    rules: {
      required: v => !!v || 'Required',
      email: v => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(v) || 'Invalid e-mail.'
      },
      counter: v => v.length <= 11 || 'Max 11 digits',
    },
  }),

  computed: {
  },
  created() {
    if (this.$session.exists()) {
      this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      this.setLoggedIn(true)
      this.setAppBar(true)
      this.myCompany()
      this.myJobs()
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
      console.log(this.company)
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
          console.log(this.company)
        }
      }).catch(e => {
        console.log(e)
      })
    }
  },
}
</script>
  
<style>
.profile {
  cursor: pointer;
}

.profile:hover {
  opacity: .5;
}

.profile:active {
  opacity: 100%;
}
</style>