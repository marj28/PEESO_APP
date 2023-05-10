<template>
  <v-container>
    <v-row v-show="otherSkillss">
        <p>Other Skills Acquired without Certificate:</p>
    </v-row>
    <v-row v-show="otherSkillsForms">
    <v-row>
      <v-col cols="12" sm="4" md="4">
        <v-checkbox label="Auto Mechanic" color="success"></v-checkbox>
        <v-checkbox
          label="Beautician"
          style="margin-top: -10px"
          color="success"
        ></v-checkbox>
        <v-checkbox
          label="Carpentry Work"
          style="margin-top: -10px"
          color="success"
        ></v-checkbox>
        <v-checkbox
          label="Computer Literate"
          style="margin-top: -10px"
          color="success"
        ></v-checkbox>
        <v-checkbox
          label="Domestic Chores"
          style="margin-top: -10px"
          color="success"
        ></v-checkbox>
        <v-checkbox
          label="Driver"
          style="margin-top: -10px"
          color="success"
        ></v-checkbox>
        <v-checkbox
          label="Welder"
          style="margin-top: -10px"
          color="success"
        ></v-checkbox>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-checkbox label="Electrician" color="success"></v-checkbox>
        <v-checkbox
          label="Embroidery"
          style="margin-top: -10px"
          color="success"
        ></v-checkbox>
        <v-checkbox
          label="Gardening"
          style="margin-top: -10px"
          color="success"
        ></v-checkbox>
        <v-checkbox
          label="Masonry"
          style="margin-top: -10px"
          color="success"
        ></v-checkbox>
        <v-checkbox
          label="Painter/Artist"
          style="margin-top: -10px"
          color="success"
        ></v-checkbox>
        <v-checkbox
          label="Painting Jobs"
          style="margin-top: -10px"
          color="success"
        ></v-checkbox>
        <v-checkbox
          label="Massage Therapist"
          style="margin-top: -10px"
          color="success"
        ></v-checkbox>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-checkbox label="Photography" color="success"></v-checkbox>
        <v-checkbox
          label="Plumbing"
          style="margin-top: -10px"
          color="success"
        ></v-checkbox>
        <v-checkbox
          label="Sewing Dresses"
          style="margin-top: -10px"
          color="success"
        ></v-checkbox>
        <v-checkbox
          label="Stenography"
          style="margin-top: -10px"
          color="success"
        ></v-checkbox>
        <v-checkbox
          label="Tailoring"
          style="margin-top: -10px"
          color="success"
        ></v-checkbox>
        <v-checkbox
          label="Nail Technician"
          style="margin-top: -10px"
          color="success"
        ></v-checkbox>
        <v-text-field
          label="Others"
          outlined
          dense
          color="success"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" sm="6">
        <v-select
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
          :items="employability_skills"
          label="Employability Skills (Top 3 skills you don't have/least possess)"
          required
          outlined
          dense
          multiple
          color="success"
          v-on:input="limiter"
        >
        </v-select>
      </v-col>
    </v-row>
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
  data: () => ({}),
};
</script>