<template>
  <v-container>
    <v-row v-show="clientsClassifications">
        <p>Client's Classification:</p>
    </v-row>
    <v-row v-show="clientsClassificationForms" class="mt-n6">
      <!-- <p class="font-weight-bold green--text">Client's Classification</p> -->
      <v-col cols="12" sm="12" md="3" class="ma-2 ">
        <v-checkbox label="Senior Citizen" color="success"></v-checkbox>
        <v-checkbox
          label="Solo-Parent"
          style="margin-top: -10px"
          color="success"
        ></v-checkbox>
        <v-checkbox
          label="IP / Muslim"
          style="margin-top: -10px"
          color="success"
        ></v-checkbox>
        <v-checkbox
          label="OFW Returnee"
          style="margin-top: -10px"
          color="success"
        ></v-checkbox>
      </v-col>
      <v-col cols="12" sm="12" md="3" class="ma-2">
        <v-checkbox
          label="Parent w/ malnourished children"
          color="success"
        ></v-checkbox>
        <v-checkbox
          label="Person Deprived with Liberty (PDL)"
          style="margin-top: -10px"
          color="success"
        ></v-checkbox>
        <v-checkbox
          label="Former PDL"
          style="margin-top: -10px"
          color="success"
        ></v-checkbox>
        <v-checkbox
          label="Rebel Returnee"
          style="margin-top: -10px"
          color="success"
        ></v-checkbox>
      </v-col>
      <v-col cols="12" sm="12" md="3" class="ma-2">
        <v-checkbox
          label="Enumerated as Child Laborer"
          color="success"
        ></v-checkbox>
        <v-checkbox
          label="Child Laborer Parent"
          style="margin-top: -10px"
          color="success"
        ></v-checkbox>
        <v-checkbox
          label="Agrarian Reform Beneficiaries (ARB)"
          style="margin-top: -10px"
          color="success"
        ></v-checkbox>
        <v-checkbox
          label="4Ps"
          style="margin-top: -10px"
          color="success"
        ></v-checkbox>
        <v-text-field
          label="Others"
          outlined
          color="success"
          dense
        ></v-text-field>
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
  data: () => ({}),
};
</script>