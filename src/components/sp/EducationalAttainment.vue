<template>
  <!-- eslint-disable  -->
  <v-container>
    <v-row v-show="educationalBackgrounds">
      <v-col cols="12" md="12" class="mt-n3">
        <h4>Elementary</h4>
        <v-row>
          <v-col cols="12" md="4">
            <p>School:</p>
          </v-col>
          <v-col cols="12" md="4">
            <p>Year / Level:</p>
          </v-col>
          <v-col cols="12" md="4">
            <p>Date of Attendance:</p>
          </v-col>
        </v-row>
        <h4>Junior High School</h4>
        <v-row>
          <v-col cols="12" md="4">
            <p>School:</p>
          </v-col>
          <v-col cols="12" md="4">
            <p>Year / Level:</p>
          </v-col>
          <v-col cols="12" md="4">
            <p>Date of Attendance:</p>
          </v-col>
        </v-row>
        <h4>Senior High School</h4>
        <v-row>
          <v-col cols="12" md="4">
            <p>School:</p>
          </v-col>
          <v-col cols="12" md="4">
            <p>Year / Level:</p>
          </v-col>
          <v-col cols="12" md="4">
            <p>Date of Attendance:</p>
          </v-col>
        </v-row>
        <h4>College</h4>
        <v-row>
          <v-col cols="12" md="4">
            <p>School:</p>
          </v-col>
          <v-col cols="12" md="4">
            <p>Year / Level:</p>
          </v-col>
          <v-col cols="12" md="4">
            <p>Date of Attendance:</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="mt-n6" v-show="educationalBackgroundForms">
      <v-col>
        <v-form ref="forms" v-model="valid" lazy-validation class="mb-6">
          <v-row>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <p
                  class="font-weight-bold green--text"
                  style="margin-top: -20px"
                  autofocus
                >
                  ELEMENTARY
                </p>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="12" sm="4" md="4" class="mt-n6">
                <v-text-field
                v-model="post.post_meta.elemschool"
                  outlined
                  autofocus
                  dense
                  color="success"
                  clearable
                  label="Name of School"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4" class="mt-n6">
                <v-select
                v-model="post.post_meta.elemlevel"
                  :items="elementary"
                  outlined
                  dense
                  label="Year / Level"
                  color="success"
                  clearable
                >
                </v-select>
              </v-col>
              <v-col cols="12" sm="4" md="4" class="mt-n6">
                <v-text-field
                v-model="post.post_meta.elemdate"
                  outlined
                  dense
                  color="success"
                  clearable
                  label="Date of Attendance"
                  type="date"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <p
                  class="font-weight-bold green--text"
                  style="margin-top: -20px"
                  autofocus
                >
                  JUNIOR HIGH SCHOOL
                </p>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="12" sm="4" md="4" class="mt-n6">
                <v-text-field
                v-model="post.post_meta.jschool"
                  outlined
                  dense
                  color="success"
                  clearable
                  label="Name of School"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4" class="mt-n6">
                <v-select
                v-model="post.post_meta.jlevel"
                  :items="junior"
                  outlined
                  dense
                  label="Year / Level"
                  color="success"
                  clearable
                >
                </v-select>
              </v-col>
              <v-col cols="12" sm="4" md="4" class="mt-n6">
                <v-text-field
                v-model="post.post_meta.jdate"
                  outlined
                  dense
                  color="success"
                  clearable
                  label="Date of Attendance"
                  type="date"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <p
                  class="font-weight-bold green--text"
                  style="margin-top: -20px"
                >
                  SENIOR HIGH SCHOOL
                </p>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="12" sm="4" md="4" class="mt-n6">
                <v-text-field
                v-model="post.post_meta.sschool"
                  outlined
                  dense
                  color="success"
                  clearable
                  label="Name of School"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4" class="mt-n6">
                <v-select
                v-model="post.post_meta.slevel"
                  :items="senior"
                  outlined
                  dense
                  label="Year / Level"
                  color="success"
                  clearable
                >
                </v-select>
              </v-col>
              <v-col cols="12" sm="4" md="4" class="mt-n6">
                <v-text-field
                v-model="post.post_meta.sdate"
                  outlined
                  dense
                  color="success"
                  clearable
                  label="Date of Attendance"
                  type="date"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <p
                  class="font-weight-bold green--text"
                  style="margin-top: -20px"
                >
                  COLLEGE
                </p>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="12" sm="4" md="4" class="mt-n6">
                <v-text-field
                v-model="post.post_meta.cschool"
                  outlined
                  dense
                  color="success"
                  clearable
                  label="Name of School"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4" class="mt-n6">
                <v-select
                v-model="post.post_meta.clevel"
                  :items="college"
                  outlined
                  dense
                  label="Year / Level"
                  color="success"
                  clearable
                >
                </v-select>
              </v-col>
              <v-col cols="12" sm="4" md="4" class="mt-n6">
                <v-text-field
                v-model="post.post_meta.cdate"
                  outlined
                  dense
                  color="success"
                  clearable
                  label="Date of Attendance"
                  type="date"
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-row>
        </v-form>
        <v-btn color="success" class="mr-2" @click="validate()">Save </v-btn>
        <v-btn
          color="warning"
          class="mr-2"
          @click="
            (educationalBackgroundForms = false),
              (educationalBackgrounds = true)
          "
          >Cancel
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
  <script>
/* eslint-disable */
export default {
  name: "EducationalBackground",
  props: {
    educationalBackgrounds: true,
    educationalBackgroundForms: false,
  },
  data: () => ({
    post: { post_meta: {} },
    levelreachedElem: [],
    non_K: [],
    K: [],
    strand: [],
    levelreachedSec: [],
    course: [],
    levelreachedTer: [],
    courseGraduateStudies: [],

    mathematical_operation: false,
    elementarylvl: true,
    graduate: false,
    undergraduate: false,
    secondarylvl: true,
    sec_graduate: false,
    sec_undergraduate: false,
    tertiarylvl: true,
    ter_graduate: false,
    ter_undergraduate: false,
    graduatelvl: true,
    post_graduates: false,
    post_undergraduate: false,
  }),
  methods: {
    validate() {
      this.$refs.forms.validate();
      let v = this.$refs.forms.validate();
      if (v) {
        (this.educationalBackgrounds = true),
          (this.educationalBackgroundForms = false);
      }
    },
    //schooling
    clear_elem_graduate() {
      this.elem_undergrad_level = "";
      this.elem_undergrad_year = "";
      this.elem_undergrad_school = "";
      this.graduate = true;
      this.undergraduate = false;
      this.secondarylvl = true;
      this.tertiarylvl = false;
      this.graduatelvl = false;
    },
    clear_elem_undergraduate() {
      this.elem_grad_year = "";
      this.elem_grad_school = "";
      this.graduate = false;
      this.undergraduate = true;
      this.secondarylvl = false;
      this.tertiarylvl = false;
      this.graduatelvl = false;
      this.sec_details = "";
      this.sec = "";
    },
    clear_sec_graduate() {
      this.sec_undergrad_level = "";
      this.sec_undergrad_school = "";
      this.sec_undergrad_year = "";
      this.sec_graduate = true;
      this.sec_undergraduate = false;
      this.elementarylvl = true;
      this.tertiarylvl = true;
      this.graduatelvl = false;
    },
    clear_sec_undergraduate() {
      this.sec_details = "";
      this.sec_grad_strand = "";
      this.sec_grad_school = "";
      this.sec_grad_year = "";
      this.sec_grad_school_K = "";
      this.sec_grad_year_K = "";
      this.sec_graduate = false;
      this.sec_undergraduate = true;
      this.elementarylvl = true;
      this.tertiarylvl = false;
      this.graduatelvl = false;
      this.ter = "";
    },
    clear_sec_non_K() {
      this.sec_grad_strand = "";
      this.sec_grad_year_K = "";
      this.sec_grad_school_K = "";
      this.non_K = true;
      this.K = false;
    },
    clear_sec_K() {
      this.sec_grad_year = "";
      this.sec_grad_school = "";
      this.non_K = false;
      this.K = true;
    },
    clear_ter_graduate() {
      this.ter_undergrad_level = "";
      this.ter_undergrad_year = "";
      this.ter_undergrad_school = "";
      this.ter_graduate = true;
      this.ter_undergraduate = false;
      this.secondarylvl = true;
      this.elementarylvl = true;
      this.graduatelvl = true;
    },
    clear_ter_undergraduate() {
      this.ter_grad_school = "";
      this.ter_grad_course = "";
      this.ter_grad_year = "";
      this.ter_graduate = false;
      this.ter_undergraduate = true;
      this.secondarylvl = true;
      this.elementarylvl = true;
      this.graduatelvl = false;
      this.post = "";
    },
    clear_post_graduate() {
      this.post_undergrad_course = "";
      this.post_undergrad_school = "";
      this.post_undergrad_year = "";
      this.post_graduates = true;
      this.post_undergraduate = false;
      this.elementarylvl = true;
      this.tertiarylvl = true;
      this.secondarylvl = true;
    },
    clear_post_undergraduate() {
      this.post_grad_course = "";
      this.post_grad_school = "";
      this.post_grad_year = "";
      this.post_graduates = false;
      this.post_undergraduate = true;
      this.elementarylvl = true;
      this.tertiarylvl = true;
      this.secondarylvl = true;
    },
  },
};
</script>