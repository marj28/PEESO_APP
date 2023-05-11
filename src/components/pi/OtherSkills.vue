<template>
  <!-- eslint-disable  -->
  <v-container>
    <v-row v-show="otherSkillss">
      <p>Other Skills Acquired without Certificate:</p>
    </v-row>
    <v-row v-show="otherSkillsForms">
      <v-col>
        <v-form ref="forms" v-model="valid" lazy-validation>
          <v-row>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-checkbox
                  v-model="post.post_meta.automechanic"
                  label="Auto Mechanic"
                  color="success"
                ></v-checkbox>
                <v-checkbox
                  v-model="post.post_meta.beautician"
                  label="Beautician"
                  style="margin-top: -10px"
                  color="success"
                ></v-checkbox>
                <v-checkbox
                  v-model="post.post_meta.carpentry"
                  label="Carpentry Work"
                  style="margin-top: -10px"
                  color="success"
                ></v-checkbox>
                <v-checkbox
                  v-model="post.post_meta.computerl"
                  label="Computer Literate"
                  style="margin-top: -10px"
                  color="success"
                ></v-checkbox>
                <v-checkbox
                  v-model="post.post_meta.domesticc"
                  label="Domestic Chores"
                  style="margin-top: -10px"
                  color="success"
                ></v-checkbox>
                <v-checkbox
                  v-model="post.post_meta.driver"
                  label="Driver"
                  style="margin-top: -10px"
                  color="success"
                ></v-checkbox>
                <v-checkbox
                  v-model="post.post_meta.welder"
                  label="Welder"
                  style="margin-top: -10px"
                  color="success"
                ></v-checkbox>
                <v-checkbox
                  v-model="post.post_meta.electrician"
                  style="margin-top: -10px"
                  label="Electrician"
                  color="success"
                ></v-checkbox>
                <v-checkbox
                  v-model="post.post_meta.embroidery"
                  label="Embroidery"
                  style="margin-top: -10px"
                  color="success"
                ></v-checkbox>
                <v-checkbox
                  v-model="post.post_meta.gardening"
                  label="Gardening"
                  style="margin-top: -10px"
                  color="success"
                  class="mb-n12"
                ></v-checkbox>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-checkbox
                  v-model="post.post_meta.masonry"
                  label="Masonry"
                  color="success"
                ></v-checkbox>
                <v-checkbox
                  v-model="post.post_meta.painter"
                  label="Painter/Artist"
                  style="margin-top: -10px"
                  color="success"
                ></v-checkbox>
                <v-checkbox
                  v-model="post.post_meta.painting"
                  label="Painting Jobs"
                  style="margin-top: -10px"
                  color="success"
                ></v-checkbox>
                <v-checkbox
                  v-model="post.post_meta.massaget"
                  label="Massage Therapist"
                  style="margin-top: -10px"
                  color="success"
                ></v-checkbox>
                <v-checkbox
                  v-model="post.post_meta.photography"
                  style="margin-top: -10px"
                  label="Photography"
                  color="success"
                ></v-checkbox>
                <v-checkbox
                  v-model="post.post_meta.plumbing"
                  label="Plumbing"
                  style="margin-top: -10px"
                  color="success"
                ></v-checkbox>
                <v-checkbox
                  v-model="post.post_meta.sewingdresses"
                  label="Sewing Dresses"
                  style="margin-top: -10px"
                  color="success"
                ></v-checkbox>
                <v-checkbox
                  v-model="post.post_meta.stenography"
                  label="Stenography"
                  style="margin-top: -10px"
                  color="success"
                ></v-checkbox>
                <v-checkbox
                  v-model="post.post_meta.tailoring"
                  label="Tailoring"
                  style="margin-top: -10px"
                  color="success"
                ></v-checkbox>
                <v-checkbox
                  v-model="post.post_meta.nailtechnician"
                  label="Nail Technician"
                  style="margin-top: -10px"
                  color="success"
                ></v-checkbox>
                <v-text-field
                  v-model="post.post_meta.otherS"
                  label="Others"
                  outlined
                  dense
                  color="success"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4"> </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6" sm="6">
                <v-select
                  v-model="post.post_meta.employabilityskills_best"
                  :items="employability_skills"
                  label="Employability Skills (Top 3 skills that you possess)"
                  required
                  outlined
                  dense
                  multiple
                  color="success"
                  v-on:input="limiter"
                >
                </v-select>
              </v-col>
              <v-col cols="12" md="6" sm="6">
                <v-select
                  v-model="post.post_meta.employabilityskills_least"
                  :items="employability_skills"
                  label="Employability Skills (Top 3 skills you don't have/least possess)"
                  required
                  outlined
                  dense
                  multiple
                  color="success"
                  v-on:="limiter"
                >
                </v-select>
              </v-col>
            </v-row>
          </v-row>
        </v-form>
        <v-btn
          color="success"
          class="mr-2"
          @click="validate()"
          >Save
        </v-btn>
        <v-btn
          color="warning"
          class="mr-2"
          @click="(otherSkillsForms = false), (otherSkillss = true)"
          >Cancel
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
/* eslint-disable */
export default {
  props: {
    otherSkillss: true,
    otherSkillsForms: false,
  },
  data: () => ({
    post: { post_meta: {} },
    employability_skills: [],
  }),
  methods: {
    validate() {
      this.$refs.forms.validate();
      let v = this.$refs.forms.validate();
      if (v) {
        this.otherSkillss = true,
        this.otherSkillsForms = false
      }
    },
  },
};
</script>