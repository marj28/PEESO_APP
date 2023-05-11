<template>
  <!-- eslint-disable  -->
  <v-container>
    <v-row v-show="technicalTrainings">
      <v-col cols="12" md="12">
        <h4>TRAININGS</h4>
      </v-col>
      <v-col cols="12" md="3" class="mt-n6">
        <p>Training Name:</p>
        <p>Hours of Training:</p>
        <p>Training Institution:</p>
        <p>Certificate Acquired:</p>
      </v-col>
    </v-row>
    <v-row v-show="technicalTrainingForms">
      <v-form ref="formsTech" lazy-validation>
        <div v-for="(item, index) in form" :key="item.id">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="item.training_name"
                outlined
                label="Training Name"
                dense
                color="success"
                autofocus
                class="mb-n6"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="item.hours_training"
                outlined
                label="Hours of Training"
                type="number"
                dense
                color="success"
                class=""
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="item.training_institution"
                outlined
                label="Training Institition"
                dense
                color="success"
                class="mt-n6"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="item.skills_acquired"
                outlined
                label="Skills Acquired"
                dense
                color="success"
                class="mt-n6"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="item.certificate_acquired"
                outlined
                label="Certificate Acquired"
                dense
                color="success"
                class="mt-n6"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-file-input
                v-model="item.training_pic"
                label="Attach Picture"
                accept="image/x-png,image/gif,image/jpeg"
                outlined
                dense
                color="success"
                class="mt-n6"
              ></v-file-input>
            </v-col>
            <v-col cols="12" md="2">
              <v-btn
                color="error"
                icon
                @click="VocationalTrainingRemoveRow(index)"
                class="mt-n6"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-divider color="green" class="mb-6"></v-divider>
        </div>
      </v-form>
      <v-col cols="12" md="12">
      <v-btn color="warning" @click="validaterow" class="mb-4">
        <v-icon>mdi-plus</v-icon> Add
      </v-btn>
    </v-col>
      <v-btn
        color="success"
        class="mr-2"
        @click="(technicalTrainingForms = false), (technicalTrainings = true)"
        >Save
      </v-btn>
      <v-btn
        color="warning"
        class="mr-2"
        @click="(technicalTrainingForms = false), (technicalTrainings = true)"
        >Cancel
      </v-btn>
    </v-row>
  </v-container>
</template>
<script>
/* eslint-disable */
import { reactive } from "vue";
export default {
  props: {
    technicalTrainings: true,
    technicalTrainingForms: false,
  },
  data: () => ({}),
  components: {
    reactive,
  },
  setup() {
    const form = reactive([{}]);
    const VocationalTrainingAddRow = () => {
      form.push({});
    };
    const VocationalTrainingRemoveRow = (index) => {
      if (form.length > 1) {
        form.splice(index, 1);
      }
    };

    return {
      form,
      VocationalTrainingAddRow,
      VocationalTrainingRemoveRow,
    };
  },
  data: () => ({
    post: { post_meta: {} },
  }),
  created() {},
  methods: {
    validaterow() {
      this.$refs.formsTech.validate();
      let v = this.$refs.formsTech.validate();
      if (v) {
        this.form.push({
          training_name: "",
          hours_training: "",
          training_institution: "",
          skills_acquired: "",
          certificate_acquired: "",
          training_pic: "",
        });
        console.log(this.form);
      }
    },
  },
};
</script>