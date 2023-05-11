<template>
  <v-container>
    <v-row v-show="eligibilityLicenses">
      <v-col cols="12" md="12">
        <h4>ELIGIBILITY</h4>
      </v-col>
      <v-col cols="12" md="3" class="mt-n6">
        <p>Eligibility Name:</p>
        <p>Date Taken:</p>
      </v-col>
      <v-col cols="12" md="12">
        <h4>LICENSE</h4>
      </v-col>
      <v-col cols="12" md="3" class="mt-n6">
        <p>License Name:</p>
        <p>License Number:</p>
        <p>Valid Until:</p>
      </v-col>
    </v-row>
    <v-row v-show="eligibilityLicenseForms">
      <v-col cols="12" md="12" sm="12">
        <h4 class="green--text">Eligibility</h4>
        <v-form ref="formsEligibility" v-model="valid" lazy-validation>
          <div v-for="(item, index) in forms" :key="item">
            <v-row>
              <v-col cols="12" md="5">
                <v-combobox
                  :items="eligibilitylist"
                  label="Eligibility Name"
                  required
                  outlined
                  dense
                  color="success"
                  autofocus
                  class="mb-n6"
                >
                </v-combobox>
              </v-col>
              <v-col cols="12" md="3">
                <v-file-input
                  label="Attach Picture"
                  accept="image/x-png,image/gif,image/jpeg"
                  outlined
                  prepend-icon="mdi-camera"
                  dense
                  color="success"
                  class="mb-n6"
                ></v-file-input>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  outlined
                  label="Date Taken"
                  type="date"
                  dense
                  color="success"
                  v-model="item.Elgbtdate_taken"
                   class="mb-n6"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="1">
                <v-btn color="error" icon @click="ElgbtRemoveRow(index)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-divider color="green" class="mb-6 mt-6"></v-divider>
          </div>
        </v-form>
        <v-btn color="warning" @click="validateroweligibility">
          <v-icon>mdi-plus</v-icon>Add
        </v-btn>
      </v-col>
      <v-col cols="12" md="12" sm="12">
        <h4 class="green--text">License</h4>
        <v-form ref="formsProfessional" v-model="valid" lazy-validation>
          <div v-for="(item, index) in forms2" :key="item">
            <v-row>
              <v-col cols="12" md="6">
                <v-combobox
                  :items="licenselist"
                  label="License Name"
                  required
                  outlined
                  dense
                  color="success"
                  class="mb-n6"
                >
                </v-combobox>
              </v-col>
              <v-col cols="12" md="6">
                <v-file-input
                  label="Attach Picture"
                  accept="image/x-png,image/gif,image/jpeg"
                  outlined
                  prepend-icon="mdi-camera"
                  dense
                  color="success"
                ></v-file-input>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  outlined
                  label="License Number"
                  type=""
                  dense
                  color="success"
                  class="mt-n6"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="5">
                <v-text-field
                  outlined
                  label="Valid Until"
                  type="date"
                  dense
                  color="success"
                  v-model="item.PLdate_taken"
                  preppend-icon
                  class="mt-n6"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="1">
                <v-btn icon color="error" @click="PLRemoveRow(index)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-divider color="green" class="mb-6"></v-divider>
          </div>
        </v-form>
        <v-btn color="warning" @click="validaterowprofessional" class="mb-3">
          <v-icon>mdi-plus</v-icon> Add
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
/* eslint-disable */
import { reactive } from "vue";
export default {
  props: {
    eligibilityLicenses: true,
    eligibilityLicenseForms: false,
  },
  components: {
    reactive,
    // ref
  },
  setup() {
    const form = reactive([
      {
        training_course: "",
        hours_training: "",
        training_institution: "",
        skills_acquired: "",
        certificate_acquired: "",
      },
    ]);
    const VocationalTrainingAddRow = () => {

      form.push({
        training_course: "",
        hours_training: "",
        training_institution: "",
        skills_acquired: "",
        certificate_acquired: "",
      });



    };
    const VocationalTrainingRemoveRow = (index) => {
      if (form.length > 1) {
        form.splice(index, 1);
      }
    };
    const forms = reactive([{ eligibility: "", date_taken: "" }]);
    const ElgbtAddRow = () => {
      forms.push({ eligibility: "", Elgbtdate_taken: "" });
    };
    const ElgbtRemoveRow = (index) => {
      if (forms.length > 1) {
        forms.splice(index, 1);
      }
    };
    const forms2 = reactive([{ professional: "", date_taken: "" }]);
    const PLAddRow = () => {
      forms2.push({ professional: "", PLdate_taken: "" });
    };
    const PLRemoveRow = (index) => {
      if (forms2.length > 1) {
        forms2.splice(index, 1);
      }
    };
    return {
      form,
      forms,
      forms2,
      VocationalTrainingAddRow,
      VocationalTrainingRemoveRow,
      PLAddRow,
      PLRemoveRow,
      ElgbtAddRow,
      ElgbtRemoveRow,
    };
  },
  data: () => ({}),
  methods:{
    validateroweligibility() {
      this.$refs.formsEligibility.validate();
      let v = this.$refs.formsEligibility.validate();
      if (v) {
        this.forms.push({
          eligibility: "", date_taken: ""
        });
      }
    },
    validaterowprofessional() {
      this.$refs.formsProfessional.validate();
      let v = this.$refs.formsProfessional.validate();
      if (v) {
        this.forms2.push({
          professional: "", PLdate_taken: ""
        });
      }
    },
  }
};
</script>