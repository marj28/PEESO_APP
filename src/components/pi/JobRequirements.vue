<template>
  <v-container>
    <v-row v-show="jobRequirementss">
      <v-col cols="12" md="12">
        <p>Preferred Occupation:</p>
        <p>Preferred Work Location:</p>
      </v-col>
      <v-col>
        <h4 class="mb-2">Requirements</h4>
        <p>Resume:</p>
        <p>Application Letter:</p>
      </v-col>
    </v-row>
    <v-row v-show="jobRequirementsForms">
      <v-row class="mt-n6">
        <v-col cols="12" sm="12" md="12">
          <h4 class="green--text">Preferred Occupation</h4>
          <v-radio-group row>
            <v-radio label="Part-time" value="PartTime"></v-radio>
            <v-radio label="Full-time" value="FullTime"></v-radio>
          </v-radio-group>
          <v-text-field outlined dense color="success"></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="12">
          <h4 class="green--text">Preferred Work Location</h4>
          <v-row>
            <v-col>
              <v-checkbox
                label="Local (Specify Cities/Municipalities)"
                class="mt-n1"
                color="success"
              >
              </v-checkbox>
              <v-text-field outlined md="4" dense></v-text-field>
            </v-col>
            <v-col>
              <v-checkbox
                label="Overseas (Specify Countries)"
                class="mt-n1"
                color="success"
              >
              </v-checkbox>
              <v-text-field outlined md="4" dense></v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12">
          <h4 class="green--text">Requirements</h4>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-file-input
            color="green accent-4"
            counter
            label="Resume"
            dense
            prepend-icon="mdi-paperclip"
            outlined
            accept=".pdf, .docx"
            :show-size="1000"
            autofocus
          >
          </v-file-input>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-file-input
            color="green accent-4"
            counter
            label="Application Letter"
            dense
            prepend-icon="mdi-paperclip"
            outlined
            accept=".pdf, .docx"
            :show-size="1000"
          >
          </v-file-input>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>
<script>
/* eslint-disable */

export default {
  props: {
    jobRequirementss: false,
    jobRequirementsForms: false,
  },
  data: () => ({}),
};
</script>