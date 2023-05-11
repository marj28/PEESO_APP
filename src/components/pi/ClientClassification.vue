<template>
  <!-- eslint-disable  -->
  <v-container>
    <v-row v-show="clientsClassifications">
      <p>Client's Classification:</p>
    </v-row>
    <v-row v-show="clientsClassificationForms" class="mt-n6">
      <!-- <p class="font-weight-bold green--text">Client's Classification</p> -->
      <v-col>
        <v-form ref="forms" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12" sm="12" md="6" class="ma-2">
              <v-checkbox
                v-model="post.post_meta.seniorcitizen"
                label="Senior Citizen"
                color="success"
              ></v-checkbox>
              <v-checkbox
                v-model="post.post_meta.soloparent"
                label="Solo-Parent"
                style="margin-top: -10px"
                color="success"
              ></v-checkbox>
              <v-checkbox
                v-model="post.post_meta.ip"
                label="IP / Muslim"
                style="margin-top: -10px"
                color="success"
              ></v-checkbox>
              <v-checkbox
                v-model="post.post_meta.ofwreturnee"
                label="OFW Returnee"
                style="margin-top: -10px"
                color="success"
              ></v-checkbox>
              <v-checkbox
                v-model="post.post_meta.pwmc"
                label="Parent w/ malnourished children"
                color="success"
                style="margin-top: -10px"
              ></v-checkbox>
              <v-checkbox
                v-model="post.post_meta.pdl"
                label="Person Deprived with Liberty (PDL)"
                style="margin-top: -10px"
                color="success"
              ></v-checkbox>
              <v-checkbox
                v-model="post.post_meta.formerpdl"
                label="Former PDL"
                style="margin-top: -10px"
                color="success"
                class="mb-n16"
              ></v-checkbox>
            </v-col>

            <v-col cols="12" sm="12" md="3" class="ma-2">
              <v-checkbox
                v-model="post.post_meta.rebelreturnee"
                label="Rebel Returnee"
                color="success"
              ></v-checkbox>
              <v-checkbox
                v-model="post.post_meta.ecl"
                label="Enumerated as Child Laborer"
                color="success"
                style="margin-top: -10px"
              ></v-checkbox>
              <v-checkbox
                v-model="post.post_meta.clp"
                label="Child Laborer Parent"
                style="margin-top: -10px"
                color="success"
              ></v-checkbox>
              <v-checkbox
                v-model="post.post_meta.arb"
                label="Agrarian Reform Beneficiaries (ARB)"
                style="margin-top: -10px"
                color="success"
              ></v-checkbox>
              <v-checkbox
                v-model="post.post_meta.fourps"
                label="4Ps"
                style="margin-top: -10px"
                color="success"
              ></v-checkbox>
              <v-text-field
                v-model="post.post_meta.otherscc"
                label="Others"
                outlined
                color="success"
                dense
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
        <v-btn
          color="success"
          class="mr-2"
          @click="validate()
            "
          >Save
        </v-btn>
        <v-btn
          color="warning"
          class="mr-2"
          @click="
            (clientsClassificationForms = false), (clientsClassifications = true)
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
  props: {
    clientsClassifications: true,
    clientsClassificationForms: false,
  },
  data: () => ({
    post: { post_meta: {} },
  }),
  methods: {
    validate() {
      this.$refs.forms.validate();
      let v = this.$refs.forms.validate();
      if (v) {
        (this.clientsClassifications = true),
          (this.clientsClassificationForms = false);
      }
    },
  },
};
</script>