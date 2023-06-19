<template>
  <!-- eslint-disable  -->
  <v-container>
    <v-row v-show="personalInformations">
      <v-col cols="12" md="6">
        <p>Fullname: </p>
        <p>Date of Birth:</p>
        <p>Citizenship:</p>
        <p>Contact Details:</p>
        <p>Email Address:</p>
        <p>Present Address:</p>
        <p>Permanent Address:</p>
      </v-col>
      <v-col cols="12" md="6" sm="6">
        <p>Last School Year Attended:</p>
        <p>Grade Level Last Attended:</p>
        <p>Current Status of Parents:</p>
        <h4>Guardian's Details</h4>
        <p class="mt-1">Name:</p>
        <p>Contact Number:</p>
        <p>Occupation:</p>
      </v-col>
    </v-row>
    <v-row v-show="personalInformationForms" class="mt-2">
      <v-col>
        <v-form ref="forms" v-model="valid" lazy-validation class="mb-12">
          <v-row class="mb-n12">
            <v-col cols="12" sm="12" md="6" class="mt-n6">
              <v-text-field
              v-model="post.post_meta.surname"
              :rules="[rules.required]"
                label="Surname"
                required
                dense
                outlined
                autofocus
                color="success"
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="6" class="mt-n6">
              <v-text-field
              v-model="post.post_meta.firstname"
              :rules="[rules.required]"
                label="First Name"
                outlined
                dense
                color="success"
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="6" class="mt-n6">
              <v-text-field
              v-model="post.post_meta.middlename"
                label="Middle Name"
                required
                dense
                outlined
                color="success"
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="6" class="mt-n6">
              <v-text-field
              v-model="post.post_meta.dateofbirth"
                label="Date of Birth"
                type="date"
                required
                dense
                outlined
                color="success"
                clearable
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="6" class="mt-n6">
              <v-text-field
              v-model="post.post_meta.citizenship"
                label="Citizenship"
                required
                outlined
                dense
                color="success"
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="3" class="mt-n6">
              <v-text-field
              v-model="post.post_meta.contactno"
                label="Contact Details / Mobile No."
                type="number"
                required
                dense
                outlined
                color="success"
                clearable
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="3" class="mt-n6">
              <v-text-field
              v-model="post.post_meta.email"
                label="Email Address"
                required
                outlined
                dense
                color="success"
                clearable
                type="email"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="6" class="mt-n6">
              <v-text-field
              v-model="post.post_meta.presentaddress"
                label="Present Address"
                required
                outlined
                dense
                color="success"
                clearable
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="6" class="mt-n6">
              <v-text-field
              v-model="post.post_meta.permanentaddress"
                label="Permanent Address"
                required
                outlined
                dense
                color="success"
                clearable
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="3" class="mt-n6">
              <v-text-field
              v-model="post.post_meta.lsya"
                label="Last School Year Attended"
                required
                outlined
                dense
                color="success"
                clearable
                type="number"
               
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="3" class="mt-n6">
              <v-text-field
              v-model="post.post_meta.glla"
                label="Grade Level Last Attended"
                required
                dense
                outlined
                color="success"
                clearable
                
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="mt-n6">
              <v-select
              v-model="post.post_meta.parentstatus"
                :items="parentsStatus"
                label="Current Status of Parents"
                outlined
                dense
                multiple
                small-chips
                color="success"
                :rules="[rules.required]"
              >
              </v-select>
            </v-col>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-col cols="12" sm="12" md="6" class="mt-n6">
              <v-text-field
              v-model="post.post_meta.fathersname"
                label="Father's Full Name"
                outlined
                dense
                color="success"
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3" class="mt-n6">
              <v-text-field
              v-model="post.post_meta.fcontactno"
                label="Contact No."
                outlined
                dense
                color="success"
                clearable
                type="number"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3" class="mt-n6">
              <v-text-field
              v-model="post.post_meta.foccupation"
                label="Occupation"
                outlined
                dense
                color="success"
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="6" class="mt-n6">
              <v-text-field
              v-model="post.post_meta.mothersname"
                label="Mother's Full Name"
                outlined
                dense
                color="success"
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3" class="mt-n6">
              <v-text-field
              v-model="post.post_meta.mcontactno"
                label="Contact No."
                outlined
                dense
                color="success"
                clearable
                type="number"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3" class="mt-n6">
              <v-text-field
              v-model="post.post_meta.moccupation"
                label="Occupation"
                required
                outlined
                dense
                color="success"
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="6" class="mt-n6">
              <v-text-field
              v-model="post.post_meta.guardiansname"
                label="Guardian's Full Name"
                required
                outlined
                dense
                color="success"
                clearable
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3" class="mt-n6">
              <v-text-field
              v-model="post.post_meta.gcontactno"
                label="Contact No."
                required
                outlined
                dense
                color="success"
                clearable
                type="number"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3" class="mt-n6">
              <v-text-field
              v-model="post.post_meta.goccupation"
                label="Occupation"
                required
                outlined
                dense
                color="success"
                clearable
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
        <v-btn color="success" class="mr-2" @click="validate()">Save </v-btn>
        <v-btn
          color="warning"
          @click="
            (personalInformationForms = false), (personalInformations = true)
          "
        >
          Cancel
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
 <script>
/* eslint-disable */

export default {
  name: "PersonalInformation",
  props: {
    personalInformations: false,
    personalInformationForms: false,
  },
  data: () => ({
    post: { post_meta: {} },
    rules: {
      required: (v) => !!v || "Required",
    },
  }),
  methods: {
    validate() {
      this.$refs.forms.validate();
      let v = this.$refs.forms.validate();
      if (v) {
        (this.personalInformations = true),
          (this.personalInformationForms = false);
      }
    },
  },
};
</script>