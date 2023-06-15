

<template>
  <v-container>
    <v-row>
      <v-col cols="12">

        <v-toolbar dense flat>
          <span class="text-primary">
            <v-icon left color="success">mdi-domain</v-icon> Company
            Profile</span>
          <v-spacer />
          <v-btn small color="success" @click="saveCompany()"><v-icon left>mdi-domain</v-icon>Save</v-btn>
        </v-toolbar>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="3">

              <va-file-upload :preset="company.medias.logo" @UploadEvent="imageUrl" class="profile" />
            </v-col>
            <v-col cols="12" md="9">

              <v-toolbar flat dense>

                <v-tabs v-model="tab" align-with-title>
                  <v-tabs-slider color="yellow"></v-tabs-slider>
                  <v-tab>Details</v-tab>
                  <v-tab>Contact Information</v-tab>
                  <v-tab>License And Permits</v-tab>
                </v-tabs>
              </v-toolbar>
              <v-card class="pa-4" tile elevation="1">

                <div style="min-height: 350px;">
                  <v-tabs-items v-model="tab">
                    <v-tab-item>
                      <v-row class="mb-4 pt-2">
                        <v-col cols="12" sm="12" md="8">
                          <v-text-field v-model="company.name" label="Agency Name" :rules="[rules.required]" required
                            outlined dense color="green" class="mb-n6"></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="12" md="4">
                          <v-text-field v-model="info.acronym" label="Acronym / Abbreviation" required outlined dense
                            color="green" :rules="[rules.required]" class="mb-n6"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-select v-model="info.agency_type" :items="agency_type" label="Agency Type" outlined dense
                            color="green" class="mb-n6">
                          </v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-select v-model="info.total_work_force" :items="totalworkforce" label="Total Work Force"
                            outlined dense color="green" class="mb-n6">
                          </v-select>
                        </v-col>
                        <v-col cols="12" md="6" sm="12">

                          <v-combobox v-model="region" :items="regions" item-text="name" item-value="name" class="mb-n6"
                            outlined dense color="success" label="Region" return-object @change="setProvinces(region.key)"
                            :rules="[rules.required]">
                          </v-combobox>
                        </v-col>

                        <v-col cols="12" md="6" sm="12">
                          <v-combobox v-model="info.address.province" :items="provinces" outlined dense color="success"
                            class="mb-n6" label="Province" @change="setMunicipalities(info.address.province)"
                            :rules="[rules.required]">
                          </v-combobox>
                        </v-col>
                        <v-col cols="12" md="6" sm="12">
                          <v-combobox v-model="info.address.city" outlined :items="municipalities" dense
                            label="Municipality / City" @change="setBarrangays(info.address.city)" return-object
                            class="mb-n6" color="success" :rules="[rules.required]">
                          </v-combobox>
                        </v-col>

                        <v-col cols="12" md="6" sm="12">
                          <v-combobox v-model="info.address.baranggay" label="Baranggay" :items="barrangays" outlined
                            dense color="success" class="mb-n6" :rules="[rules.required]"></v-combobox>
                        </v-col>


                        <v-col cols="12" md="12" sm="12">
                          <v-text-field v-model="info.address.house" label="House No. / Street / Village" required
                            outlined dense color="success" class="mb-n6" :rules="[rules.required]"></v-text-field>
                        </v-col>

                      </v-row>


                    </v-tab-item>
                    <v-tab-item>
                      <v-row>
                        <v-col cols="12" sm="3" md="3">
                          <v-select v-model="contact_info.title" :items="['Mr.', 'Ms.', 'Mrs.']" label="Title" outlined
                            dense color="green" class="mb-n6">
                          </v-select>
                        </v-col>
                        <v-col cols="12" sm="9" md="9">
                          <v-text-field v-model="contact_info.fullname" label="Contact Person (Full Name)" required
                            outlined dense :rules="[rules.required]" color="green" class="mb-n6"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field v-model="contact_info.position" label="Position" required outlined dense
                            color="green" :rules="[rules.required]" class="mb-n6"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field v-model="contact_info.tel_no" label="Telephone Number" required type="number"
                            outlined dense :rules="[rules.required]" color="green" hide-spin-buttons
                            class="mb-n6"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field v-model="contact_info.mobile_no" label="Mobile Number" maxlength="11"
                            oninput="this.value=this.value.slice(0,this.maxLength)" required outlined dense type="number"
                            :rules="[rules.required]" color="green" hide-spin-buttons class="mb-n6"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field v-model="contact_info.email" label="E-mail Address" required outlined dense
                            type="email" :rules="[rules.email]" color="green" class="mb-n6"></v-text-field>
                        </v-col>
                      </v-row>
                    </v-tab-item>
                    <v-tab-item>
                      <v-row>
                        <v-col cols="12" sm="12" md="6">
                          <v-file-input v-model="info.files" color="green accent-4" counter label="Business License"
                            multiple dense placeholder="Select your files" prepend-icon="mdi-paperclip" outlined
                            :show-size="1000" :rules="rules" class="mb-n6">
                          </v-file-input>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                          <v-file-input v-model="info.files_permit" color="green accent-4" counter label="Business Permit"
                            multiple dense placeholder="Select your files" prepend-icon="mdi-paperclip" outlined
                            :show-size="1000" :rules="rules">
                          </v-file-input>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                              <v-file-input
                              class="mt-n6"
                                v-model="files_permit"
                                color="green accent-4"
                                counter
                                label="BIR"
                                multiple
                                dense
                                placeholder="Select your files"
                                prepend-icon="mdi-paperclip"
                                outlined
                                accept=".pdf, .docx"
                                :show-size="1000"
                                :rules="[rules.required]"
                              >
                              </v-file-input>
                            </v-col>
                      </v-row>
                    </v-tab-item>
                  </v-tabs-items>
                </div>
                <!-- <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" @click="saveCompany()"> Save </v-btn>
                    </v-card-actions>  -->
              </v-card>

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
    tab: null,
    state: "new",
    overview: "",
    region: "",
    province: "",
    municipality: "",
    barrangay: "",
    philippines: [],
    regions: [],
    provinces: [],
    municipalities: [],
    barrangays: [],
    company: { medias: { logo: "" } },
    contact_info: {
      title: "",
      fullname: "",
      position: "",
      tel_no: "",
      mobile_no: "",
      email: ""
    },
    info: {
      acronym: "",
      agency_type: "",
      total_work_force: "",
      address: {
        region: "",
        province: "",
        city: "",
        brgy: "",
        street: ""
      },
    },
    jobs: [],
    totalworkforce: [
      "Less Than 10", "10-20", "20-50", "Above 50"
    ],
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

  computed: {
    user() {
      if (this.$session.exists()) {
        return this.$session.get("user");
      }
      return null;
    },
  },
  created() {
    if (this.$session.exists()) {
      this.$http.defaults.headers.common["Authorization"] =
        "Bearer " + this.$session.get("jwt");
      this.setLoggedIn(true);
      this.setAppBar(true);
      this.getAddress();
      this.myCompany();

    }
  },
  methods: {
    ...mapMutations(['setLoggedIn', 'setAppBar', 'setMonthDailySales']),
    imageUrl(data) {
      this.company.medias.logo = data
    },
    initRegions() {
      var items = []
      var entries = Object.entries(this.philippines);
      entries.forEach(([key, value]) => {
        items.push({ key: key, name: value.region_name });
      });
      this.regions = items
    },
    setProvinces(region_key) {
      this.info.address.region = this.region.name
      var items = []
      var obj = this.philippines
      var objData = obj[region_key].province_list
      var entries = Object.entries(objData);
      entries.forEach(([key, value]) => {
        items.push(key);
      });
      console.log(items)
      this.provinces = items
    },
    setMunicipalities(provincename) {
      var items = []
      var obj = this.philippines
      var objData = obj[this.region.key].province_list
      var entries = Object.entries(objData[provincename].municipality_list);
      entries.forEach(([key, value]) => {
        items.push(key);
      });
      this.municipalities = items
    },
    setBarrangays(municipalnanme) {
      var obj = this.philippines
      var objData = obj[this.region.key].province_list
      this.barrangays = objData[this.info.address.province].municipality_list[municipalnanme].barangay_list
    },
    getAddress() {
      this.$httplocal.get('philippines.json').then(response => {
        this.philippines = response.data
        this.initRegions()
      }).catch(e => {
        console.log(e)
      })
    },
    myJobs() {
      this.$http.post('post/my_post', { type: 'job' }).then(response => {
        response.data.status ? this.jobs = response.data.posts : this.jobs = []
      }).catch(e => {
        console.log(e)
      })
    },

    saveCompany() {
      console.log("save=", this.company)
      let method = 'company/register'
      if (this.state == 'exist') {
        method = 'company/update'
        this.company.profile = { details: this.info, contact_info: this.contact_info }
      }
      this.$http.post(method, this.company).then(response => {
        console.log(response.data)
        response.data.status ? this.VA_ALERT('success', response.data.message) : this.VA_ALERT('error', response.data.message)
        this.myCompany()
      }).catch(e => {
        console.log(e)
      })
    },
    myCompany() {
      this.$http.get('company/my_company').then(response => {

        if (response.data.status) {
          this.company = response.data.company
          if (this.company.id == 0) {
            this.company = { medias: { logo: "" } }
          } else {
            this.state = 'exist'
          }

          if (this.company.profile.details != null) {
            this.info = this.company.profile.details
            if (this.info.address.region) {
              var region = this.regions.reduce((res, item) => {
                if (item.name == this.info.address.region) {
                  res = item
                  this.region = item
                  return res
                }
              }, {})
            }
          }
          if (this.company.profile.contact_info != null) {
            this.contact_info = this.company.profile.contact_info
          }

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