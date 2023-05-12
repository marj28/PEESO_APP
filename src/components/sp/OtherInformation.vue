<template>
  <!-- eslint-disable  -->
  <v-container>
    <v-row v-show="otherInformations">
      <v-col cols="12" md="6" sm="12">
        <p>Siblings enjoying the same Scholarship:</p>
        <p>School ID:</p>
      </v-col>
      <v-col cols="12" md="6" sm="6"> </v-col>
    </v-row>
    <v-row v-show="otherInformationForms">
      <v-col>
        <v-form ref="forms" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12" sm="12" md="6">
              <p>
                Do you have brother's & sister's enjoying the same scholarship
                program?
              </p>
              <v-radio-group mandatory  v-model="post.post_meta.enjoyscholar">
                <v-radio label="Yes" value="Yes" color="success"></v-radio>
                <v-radio label="No" value="No" color="success"></v-radio>
              </v-radio-group>
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <p>If yes, kindly state their name(s):</p>
              <v-text-field
              v-model="post.post_meta.sname"
                hint="Names here"
                outlined
                dense
                color="success"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <p class="text-subtitle-2 text-center green--text">
                We hereby certify the correctness of the above information.
              </p>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="12" sm="12" md="4">
              <v-file-input
              v-model="post.post_meta.schoolid"
                label="Attached ID here"
                dense
                color="success"
                outlined
                prepend-icon="mdi-camera"
              ></v-file-input>
            </v-col>
          </v-row>
        </v-form>
        <v-btn color="success" class="mr-2" @click="validate()">Save </v-btn>
        <v-btn
          color="warning"
          class="mr-2"
          @click="(otherInformationForms = false), (otherInformations = true)"
          >Cancel
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
  <script>
/* eslint-disable */
export default {
  name: "Other Information",
  props: {
    otherInformations: false,
    otherInformationForms: false,
  },
  data: () => ({
    post: { post_meta: {} },
  }),
  methods: {
    validate() {
      this.$refs.forms.validate();
      let v = this.$refs.forms.validate();
      if (v) {
        (this.otherInformations = true), (this.otherInformationForms = false);
      }
    },
  },
};
</script>