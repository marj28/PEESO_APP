<template>
  <v-container>
    <v-row v-show="educationalBackgrounds">
        <v-col cols="12" md="12" sm="12">
          <p>Literacy Indicator:</p>
        </v-col>
        <v-col cols="12" md="12" class="mt-n3">
          <p class="font-weight-bold">Educational Information</p>
          <p>Elementary:</p>
          <p>Secondary:</p>
          <p>Tertiary:</p>
          <p>Graduate Studies/Post Graduate:</p>
        </v-col>
    </v-row>
    <v-row class="mt-n6" v-show="educationalBackgroundForms">
      <v-col cols="12" sm="12" md="6">
        <h4 class="">Literacy Indicators:</h4>

        <v-checkbox label="Can Read?" color="success"></v-checkbox>
        <v-checkbox label="Can Write?" color="success"></v-checkbox>
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <v-checkbox
          label="Can Perform Mathematical Operation?"
          color="success"
          @click="mathematical_operation = true"
        ></v-checkbox>
        <v-container v-show="mathematical_operation" style="margin-top: -35px">
          <v-checkbox
            label="Addition"
            value="a"
            color="success"
            style="margin-top: -10px"
          ></v-checkbox>
          <v-checkbox
            label="Multiplication"
            value="m"
            color="success"
            style="margin-top: -10px"
          ></v-checkbox>
          <v-checkbox
            label="Subtraction"
            value="s"
            color="success"
            style="margin-top: -10px"
          ></v-checkbox>
        </v-container>
      </v-col>
      <!-- Elementary -->
      <v-col cols="12" sm="12" md="6" v-show="elementarylvl">
        <p class="font-weight-bold green--text" style="margin-top: 0px">
          Elementary
        </p>

        <v-spacer></v-spacer>
        <v-radio-group row v-model="elem">
          <v-radio
            label="Graduate"
            @click="clear_elem_graduate()"
            color="success"
            value="graduate"
          >
          </v-radio>
          <v-radio
            label="Undergraduate"
            @click="clear_elem_undergraduate()"
            color="success"
            value="undergraduate"
          >
          </v-radio>
          <v-container v-show="graduate">
            <v-row>
              <v-col cols="12" md="12" sm="12" lg="12">
                <v-text-field
                  outlined
                  label="Year Graduated"
                  dense
                  color="success"
                  type="number"
                  hide-spin-buttons
                  v-model="elem_grad_year"
                ></v-text-field>
                <v-text-field
                  v-model="elem_grad_school"
                  outlined
                  label="School Graduated"
                  dense
                  color="success"
                  type="text"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <v-container v-show="undergraduate">
            <v-select
              :items="levelreachedElem"
              label="Level reached"
              required
              outlined
              dense
              color="success"
              v-model="elem_undergrad_level"
            >
            </v-select>
            <v-text-field
              hide-spin-buttons
              outlined
              label="Year Last Attended"
              dense
              color="success"
              type="number"
              v-model="elem_undergrad_year"
            >
            </v-text-field>
            <v-text-field
              outlined
              label="School Graduated"
              dense
              color="success"
              type="text"
              v-model="elem_undergrad_school"
            ></v-text-field>
          </v-container>
        </v-radio-group>
      </v-col>

      <!-- Secondary -->
      <v-col cols="12" sm="12" md="6" lg="6" v-show="secondarylvl">
        <p class="font-weight-bold green--text" id="move">Secondary</p>

        <v-spacer></v-spacer>
        <v-radio-group row v-model="sec">
          <v-radio
            label="Graduate"
            color="success"
            @click="clear_sec_graduate()"
            value="sec_graduate"
          >
          </v-radio>
          <v-radio
            label="Undergraduate"
            color="success"
            @click="clear_sec_undergraduate()"
            value="sec_ungraduate"
          >
          </v-radio>
          <v-container v-show="sec_graduate">
            <v-radio-group v-model="sec_details">
              <v-radio
                label="Secondary (Non-K12)"
                id="move"
                value="non_K"
                color="success"
                @click="clear_sec_non_K()"
              ></v-radio>
              <v-radio
                label="Secondary (K12)"
                value="K"
                color="success"
                @click="clear_sec_K()"
              ></v-radio>
              <div v-show="non_K">
                <v-text-field
                  hide-spin-buttons
                  outlined
                  label="Year Graduated"
                  dense
                  color="success"
                  type="number"
                  v-model="sec_grad_year"
                ></v-text-field>
                <v-text-field
                  outlined
                  label="School Graduated"
                  dense
                  color="success"
                  type="text"
                  v-model="sec_grad_school"
                ></v-text-field>
              </div>
              <div v-show="K">
                <v-select
                  :items="strand"
                  label="SHS Strand"
                  required
                  outlined
                  dense
                  color="success"
                  v-model="sec_grad_strand"
                >
                </v-select>
                <v-text-field
                  hide-spin-buttons
                  outlined
                  label="Year Graduated"
                  dense
                  color="success"
                  type="number"
                  v-model="sec_grad_year_K"
                >
                </v-text-field>
                <v-text-field
                  outlined
                  label="School Graduated"
                  dense
                  color="success"
                  type="text"
                  v-model="sec_grad_school_K"
                ></v-text-field>
              </div>
            </v-radio-group>
          </v-container>
          <v-container v-show="sec_undergraduate">
            <v-select
              :items="levelreachedSec"
              label="Level Reached"
              required
              outlined
              dense
              color="success"
              v-model="sec_undergrad_level"
            >
            </v-select>
            <v-text-field
              hide-spin-buttons
              outlined
              label="Year Last Attended"
              dense
              color="success"
              type="number"
              v-model="sec_undergrad_year"
            >
            </v-text-field>
            <v-text-field
              outlined
              label="School Graduated"
              dense
              color="success"
              type="text"
              v-model="sec_undergrad_school"
            ></v-text-field>
          </v-container>
        </v-radio-group>
      </v-col>

      <!-- Tertiary -->
      <v-col cols="12" sm="12" md="6" lg="6" v-show="tertiarylvl">
        <p class="font-weight-bold green--text">Tertiary</p>

        <v-spacer></v-spacer>

        <v-radio-group row v-model="ter">
          <v-radio
            label="Graduate"
            color="success"
            @click="clear_ter_graduate()"
            value="ter_graduate"
          >
          </v-radio>
          <v-radio
            label="Undergraduate"
            color="success"
            @click="clear_ter_undergraduate()"
            value="ter_undergraduate"
          >
          </v-radio>
          <v-container v-show="ter_graduate">
            <v-combobox
              :items="course"
              label="Course"
              required
              outlined
              dense
              color="success"
              v-model="ter_grad_course"
            >
            </v-combobox>
            <v-text-field
              outlined
              hide-spin-buttons
              label="Year Graduated"
              dense
              color="success"
              type="number"
              v-model="ter_grad_year"
            >
            </v-text-field>
            <v-text-field
              outlined
              label="School Graduated"
              dense
              color="success"
              type="text"
              v-model="ter_grad_school"
            ></v-text-field>
          </v-container>
          <v-container v-show="ter_undergraduate">
            <v-select
              :items="levelreachedTer"
              label="Level Reached"
              required
              outlined
              dense
              color="success"
              v-model="ter_undergrad_level"
            >
            </v-select>
            <v-text-field
              outlined
              hide-spin-buttons
              label="Year Last Attended"
              dense
              color="success"
              type="number"
              v-model="ter_undergrad_year"
            >
            </v-text-field>
            <v-text-field
              outlined
              label="School Graduated"
              dense
              color="success"
              type="text"
              v-model="ter_undergrad_school"
            ></v-text-field>
          </v-container>
        </v-radio-group>
      </v-col>

      <!-- Post-Graduate -->
      <v-col cols="12" sm="12" md="6" lg="6" v-show="graduatelvl">
        <p class="font-weight-bold green--text">
          Graduate Studies/Post-Graduate
        </p>
        <v-spacer></v-spacer>
        <v-radio-group row v-model="post">
          <v-radio
            label="Graduate"
            color="success"
            @click="clear_post_graduate()"
            value="post_graduates"
          >
          </v-radio>
          <v-radio
            label="Undergraduate"
            color="success"
            @click="clear_post_undergraduate()"
            value="post_graduate"
          >
          </v-radio>
          <v-container v-show="post_graduates">
            <v-combobox
              :items="courseGraduateStudies"
              label="Course"
              required
              outlined
              dense
              color="success"
              v-model="post_grad_course"
            >
            </v-combobox>
            <v-text-field
              outlined
              hide-spin-buttons
              label="Year Graduated"
              dense
              color="success"
              type="number"
              v-model="post_grad_year"
            ></v-text-field>
            <v-text-field
              outlined
              label="School Graduated"
              dense
              color="success"
              type="text"
              v-model="post_grad_school"
            ></v-text-field>
          </v-container>
          <v-container v-show="post_undergraduate">
            <v-combobox
              :items="courseGraduateStudies"
              label="Course"
              required
              outlined
              dense
              color="success"
              v-model="post_undergrad_course"
            >
            </v-combobox>
            <v-text-field
              outlined
              hide-spin-buttons
              label="Year Last Attended"
              dense
              color="success"
              type="number"
              v-model="post_undergrad_year"
            >
            </v-text-field>
            <v-text-field
              outlined
              label="School Graduated"
              dense
              color="success"
              type="text"
              v-model="post_undergrad_school"
            ></v-text-field>
          </v-container>
        </v-radio-group>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
/* eslint-disable */
export default {
  props: {
    educationalBackgrounds: true,
    educationalBackgroundForms: false,
  },
  data: () => ({
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
    //schooling
    clear_elem_graduate() {
      this.elem_undergrad_level = ''
      this.elem_undergrad_year = ''
      this.elem_undergrad_school = ''
      this.graduate = true
      this.undergraduate = false
      this.secondarylvl = true
      this.tertiarylvl = false
      this.graduatelvl = false
    },
    clear_elem_undergraduate() {
      this.elem_grad_year = ''
      this.elem_grad_school = ''
      this.graduate = false
      this.undergraduate = true
      this.secondarylvl = false
      this.tertiarylvl = false
      this.graduatelvl = false
      this.sec_details = ''
      this.sec = ''
    },
    clear_sec_graduate() {
      this.sec_undergrad_level = ''
      this.sec_undergrad_school = ''
      this.sec_undergrad_year = ''
      this.sec_graduate = true
      this.sec_undergraduate = false
      this.elementarylvl = true
      this.tertiarylvl = true
      this.graduatelvl = false
    },
    clear_sec_undergraduate() {
      this.sec_details = ''
      this.sec_grad_strand = ''
      this.sec_grad_school = ''
      this.sec_grad_year = ''
      this.sec_grad_school_K = ''
      this.sec_grad_year_K = ''
      this.sec_graduate = false
      this.sec_undergraduate = true
      this.elementarylvl = true
      this.tertiarylvl = false
      this.graduatelvl = false
      this.ter = ''
    },
    clear_sec_non_K() {
      this.sec_grad_strand = ''
      this.sec_grad_year_K = ''
      this.sec_grad_school_K = ''
      this.non_K = true
      this.K = false
    },
    clear_sec_K() {
      this.sec_grad_year = ''
      this.sec_grad_school = ''
      this.non_K = false
      this.K = true
    },
    clear_ter_graduate() {
      this.ter_undergrad_level = ''
      this.ter_undergrad_year = ''
      this.ter_undergrad_school = ''
      this.ter_graduate = true
      this.ter_undergraduate = false
      this.secondarylvl = true
      this.elementarylvl = true
      this.graduatelvl = true
    },
    clear_ter_undergraduate() {
      this.ter_grad_school = ''
      this.ter_grad_course = ''
      this.ter_grad_year = ''
      this.ter_graduate = false
      this.ter_undergraduate = true
      this.secondarylvl = true
      this.elementarylvl = true
      this.graduatelvl = false
      this.post = ''
    },
    clear_post_graduate() {
      this.post_undergrad_course = ''
      this.post_undergrad_school = ''
      this.post_undergrad_year = ''
      this.post_graduates = true
      this.post_undergraduate = false
      this.elementarylvl = true
      this.tertiarylvl = true
      this.secondarylvl = true
    },
    clear_post_undergraduate() {
      this.post_grad_course = ''
      this.post_grad_school = ''
      this.post_grad_year = ''
      this.post_graduates = false
      this.post_undergraduate = true
      this.elementarylvl = true
      this.tertiarylvl = true
      this.secondarylvl = true
    },
  }
};
</script>