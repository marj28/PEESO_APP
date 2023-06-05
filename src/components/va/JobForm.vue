<template>
  <div>
    <v-dialog v-model="dailog" persistent>
      <!--    eslint-disable  -->
      <v-card>
        <v-card-title class="text-h6" dense>
          <v-icon left> mdi-file-document-edit </v-icon> JOB DETAILS

          <v-spacer />
        </v-card-title>
        <v-divider />

        <v-stepper v-model="e1" alt-labels>
          <v-stepper-header style="font-size: 14px">
            <v-stepper-step
              :complete="e1 > 1"
              step="1"
              style="height="
              color="warning"
            >
              Vacancy Details
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2" color="warning">
              Preferrence & Qualification Requirements
            </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <!-- First Stepper -->
            <v-stepper-content step="1">
              <v-card-text class="mt-4">
                <p class="font-weight-bold">Company: {{ company.name }}</p>
                <p class="font-weight-bold">Address: {{ company.address }}</p>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-row>
                    <v-col cols="12" md="12">
                      <v-text-field
                        v-model="post.title"
                        outlined
                        prepend-inner-icon="mdi-office-building-marker-outline"
                        dense
                        :rules="nameRules"
                        required
                        label="Job Title"
                      />
                    </v-col>

                    <v-col cols="12" md="4" class="mt-n9">
                      <v-select
                        v-model="post.post_meta.purposeofvacancy"
                        outlined
                        class="mb-2"
                        prepend-inner-icon="mdi-office-building-marker-outline"
                        dense
                        :items="[
                          'Additional Manpower',
                          'Replacement',
                          'Expansion',
                        ]"
                        :rules="nameRules"
                        required
                        label="Purpose of Vacancy"
                      />
                    </v-col>

                    <v-col cols="12" md="4" class="mt-n9">
                      <v-select
                        v-model="post.post_meta.classificationofvacancy"
                        outlined
                        :items="[
                          'Administrative',
                          'Clerical',
                          'Managerial',
                          'Manual Labour',
                          'Supervisory',
                          'Technical',
                        ]"
                        prepend-inner-icon="mdi-office-building-marker-outline"
                        dense
                        :rules="nameRules"
                        required
                        label="Classification of Vacancy"
                      />
                    </v-col>

                    <v-col cols="12" md="4" class="mt-n9">
                      <v-text-field
                        v-model="post.post_meta.salary"
                        outlined
                        :rules="nameRules"
                        required
                        prepend-inner-icon="mdi-account-cash"
                        dense
                        label="Expected Salary"
                      />
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" md="2" class="mt-n9">
                      <v-select
                        v-model="post.post_meta.classificationofwork"
                        outlined
                        :items="[
                          'Permanent',
                          'Contractual',
                          'Part-time',
                          'Project-based',
                          'Internship/OJT',
                        ]"
                        prepend-inner-icon="mdi-office-building-marker-outline"
                        dense
                        :rules="nameRules"
                        required
                        label="Nature of Work"
                      />
                    </v-col>

                    <v-col cols="12" md="2" class="mt-n9">
                      <v-text-field
                        v-model="post.post_meta.vacancycount"
                        outlined
                        prepend-inner-icon="mdi-office-building-marker-outline"
                        dense
                        :rules="nameRules"
                        required
                        label="Vacancy Count"
                      />
                    </v-col>

                    <v-col cols="12" md="4" class="mt-n9">
                      <v-text-field
                        v-model="post.post_meta.postingdate"
                        outlined
                        type="date"
                        :rules="nameRules"
                        prepend-inner-icon="mdi-tag-search"
                        dense
                        hint="Separated by comma"
                        label="Posting Date"
                      />
                    </v-col>

                    <v-col cols="12" md="4" class="mt-n9">
                      <v-text-field
                        v-model="post.post_meta.validuntil"
                        outlined
                        type="date"
                        :rules="nameRules"
                        prepend-inner-icon="mdi-tag-search"
                        dense
                        hint="Separated by comma"
                        label="Valid Until"
                      />
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" md="12" class="mt-n9">
                      <v-text-field
                        v-model="post.post_meta.placeofwork"
                        outlined
                        prepend-inner-icon="mdi-tag-search"
                        dense
                        label="Place of Work"
                      />
                    </v-col>
                  </v-row>

                  <p class="mt-n8">
                    <v-icon left color="success">mdi-account-hard-hat</v-icon>
                    Job Description
                  </p>
                  <div class="mb-2">
                    <v-tiptap v-model="post.content" />
                  </div>

                  <v-row>
                    <v-col cols="12" md="12">
                      <v-text-field
                        v-model="post.tags"
                        outlined
                        prepend-inner-icon="mdi-tag-search"
                        dense
                        hint="Separated by comma"
                        label="Add Tags"
                      />
                    </v-col>
                  </v-row>

                  <v-row class="mt-n10"> </v-row>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn id="v-btn-c" color="success" @click="e1 = 2">
                  Continue
                </v-btn>
                <v-btn
                  @click="emitToParent('close')"
                  class="ma-2"
                  color="warning"
                  text
                >
                  Cancel
                </v-btn>
              </v-card-actions>
            </v-stepper-content>
          </v-stepper-items>

          <v-stepper-items>
            <!-- Second Stepper -->
            <v-stepper-content step="2">
              <v-row class="mb-2">
                <v-col cols="12" md="6">
                  <v-card height="480" elevation="6">
                    <h3 class="text-center">Preferrence</h3>

                    <v-row class="mt-5">
                      <v-col
                        class="ml-0 ml-lg-7 ml-md-7 ml-sm-7"
                        cols="12"
                        sm="11"
                        md="11"
                      >
                        <v-select
                          v-model="post.post_meta.educationallevel"
                          :items="[
                            'Elementary Level',
                            'Elementary Graduate',
                            'Junior High School Level',
                            'Junior High School Level Graduate',
                            'Senior High School Level',
                            'Junior High School Graduate',
                            'TechVoc Level',
                            'TechVoc Graduate',
                            'College Level',
                            'College Graduate',
                            'Graduate/Post Graduate Studies',
                          ]"
                          :rules="nameRules"
                          label="Educational Level"
                          outlined
                          dense
                          color="green"
                        >
                        </v-select>
                      </v-col>

                      <v-col
                        class="ml-0 mt-n7 ml-lg-7 mt-lg-n7 ml-sm-7 mt-sm-n7 ml-md-7 mt-md-n7"
                        cols="12"
                        sm="11"
                        md="11"
                      >
                        <v-text-field
                          v-model="post.post_meta.courserequirements"
                          label="Course Requirement"
                          required
                          outlined
                          dense
                          color="green"
                        >
                        </v-text-field>
                      </v-col>

                      <v-col class="ml-7" cols="12" sm="11" md="11">
                        <v-radio-group
                          v-model="post.post_meta.acceptspersonwithdisability"
                          label="Accepts persons with disabilities (PWD):"
                          row
                        >
                          <v-radio label="Yes" value="yes" color="green">
                          </v-radio>
                          <v-radio label="No" value="no" color="green">
                          </v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col
                        class="ml-0 mt-n7 ml-lg-7 mt-lg-n7 ml-md-7 mt-md-n7 ml-sm-7 mt-sm-n7"
                        cols="12"
                        sm="11"
                        md="11"
                      >
                        <v-select
                          v-model="post.post_meta.disability"
                          :items="[
                            'Visual',
                            'Hearing',
                            'Speech',
                            'Physical',
                            'Mental',
                            'Others',
                          ]"
                          label="If 'yes': "
                          multiple
                          dense
                          color="green"
                          outlined
                        >
                        </v-select>
                      </v-col>

                      <v-col
                        class="ml-0 mt-n7 ml-lg-7 mt-lg-n7 ml-md-7 mt-md-n7 ml-sm-7 mt-sm-n7"
                        cols="12"
                        sm="11"
                        md="11"
                      >
                        <v-select
                          :rules="nameRules"
                          v-model="post.post_meta.sexpreference"
                          :items="['N/A', 'Male', 'Female', 'Preference']"
                          label="Sex Preference"
                          outlined
                          dense
                          color="green"
                        >
                        </v-select>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>

                <v-col cols="12" md="6">
                  <v-card elevation="6">
                    <h3 class="text-center">Qualification Requirements</h3>
                    <v-card-text>
                      <v-row>
                        <v-col cols="12" sm="12" md="12" lg="12">
                          <v-radio-group
                            v-model="post.post_meta.acceptadditional"
                            label="Accepts Additional Qualification Requirements: "
                            row
                          >
                            <v-radio
                              label="Required"
                              value="required"
                              color="green"
                            >
                            </v-radio>
                            <v-radio
                              label="Optional"
                              value="optional"
                              color="green"
                            >
                            </v-radio>
                          </v-radio-group>
                        </v-col>

                        <v-col cols="12" sm="12" md="12" class="mt-n5 ml-4">
                          For each identified vacant position.
                        </v-col>

                        <v-col cols="12" sm="12" md="12" class="mt-n3 ml-3">
                          <v-text-field
                            v-model="post.post_meta.workexperience"
                            :rules="nameRules"
                            label="Work Experience (month/s): "
                            required
                            outlined
                            dense
                            color="green"
                            type="number"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" class="mt-n7 ml-3">
                          <v-text-field
                            v-model="post.post_meta.requiredlicense"
                            label="Required License: "
                            required
                            outlined
                            dense
                            color="green"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" class="mt-n7 ml-3">
                          <v-text-field
                            v-model="post.post_meta.otherqualification"
                            label="Other qualifications: "
                            required
                            outlined
                            dense
                            color="green"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" class="mt-n7 ml-3">
                          <v-select
                            v-model="post.post_meta.employabilityskills"
                            :items="[
                              'Planning and Organizing',
                              'Social Perceptiveness',
                              'Innovation',
                              'Multi-tasking',
                              'Work Standards/Ethics',
                              'Stress Tolerance',
                              'Self Motivation',
                              'Problem Sensitivity',
                              'Creative Problem Solving',
                              'Teamwork',
                              'Decision Making',
                              'Critical Thinking',
                              'Math Function Skill',
                              'English Function Skill',
                              'English Comprehension',
                            ]"
                            label="Employability Skills"
                            outlined
                            multiple
                            small-chips
                            dense
                            color="green"
                          >
                          </v-select>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" class="mt-n7 ml-4">
                          <v-radio-group
                            v-model="post.post_meta.acceptsreturningofws"
                            label="Accepts returning OFWs: "
                            row
                          >
                            <v-radio label="Yes" value="yes" color="green">
                            </v-radio>
                            <v-radio label="No" value="no" color="green">
                            </v-radio>
                          </v-radio-group>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <v-btn @click="e1 = 1" class="ma-2" color="orange" text> <v-icon>mdi-arrow-left</v-icon> </v-btn>
              <v-btn
                @click="emitToParent('close')"
                class="ma-2 ml-n2"
                color="warning"
                text

              >
                Cancel
              </v-btn>

              <v-btn
                color="success"
                :loading="loading"
                dense
                class="ma-2"
                @click="SavePost()"
              >
                {{ state == "update" ? "Save" : "Post" }}
              </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-card>
    </v-dialog>

    <!-- 
<v-dialog v-model="dialogforview" max-width="200px" >

<h1>THIS IS Dialog for view</h1>
</v-dialog> 
-->
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    post_state: {
      type: String,
      default: "New",
    },
    data: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    e1: 1,
    loading: false,
    valid: true,
    dailog: false,

    company: {},
    post: { post_meta: { salary: "" } },
    state: "new",
    nameRules: [(v) => !!v || "Field is required"],
  }),
  watch: {
    show(v) {
      v ? (this.dailog = true) : (this.dailog = false);
      if (v) {
        this.state = this.post_state;
        this.myCompany();
        if (this.state == "update") {
          this.post = this.data;
        }
      } else {
        this.post = { post_meta: { salary: "" } };
      }
    },
  },
  created() {},
  methods: {
    emitToParent(action) {
      this.$emit("DialogEvent", { action: action });
    },
    myCompany() {
      this.$http
        .get("company/my_company")
        .then((response) => {
          console.log(response.data);
          if (response.data.status) {
            this.company = response.data.companies[0];
            this.post.company_id = this.company.id;
            this.post.post_meta.company = this.company.name;
            this.post.post_meta.company_address = this.company.address;
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    SavePost() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.Post();
      }
    },
    Post() {
      console.log(this.post);
      let method = "post/new";
      if (this.state == "update") {
        method = "post/update";
      }
      this.post.type = "job";
      console.log(this.post);

      this.$http
        .post(method, this.post)
        .then((response) => {
          console.log(response.data);
          this.loading = false;
          response.data.status
            ? this.VA_ALERT("success", response.data.message)
            : this.VA_ALERT("error", response.data.message);
          this.emitToParent("close");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>