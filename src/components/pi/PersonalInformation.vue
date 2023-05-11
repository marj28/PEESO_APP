<template>
   <!-- eslint-disable  -->
  <v-container>
    <v-row v-show="personalInformations">
      <v-col cols="12" md="6">
        <p>Fullname:</p>
        <p>Date of Birth:</p>
        <p>Age:</p>
        <p>Civil Status:</p>
        <p>Sex</p>
        <p>Religion:</p>
        <p>Disability:</p>
      </v-col>
      <v-col cols="12" md="6" sm="6">
        <p>Ethnic Group:</p>
        <p>Address:</p>
        <p>Contact No.:</p>
        <p>Email:</p>
        <p>Type of ID:</p>
        <p>SSS</p>
        <p>TIN</p>
      </v-col>
    </v-row>
    <v-row v-show="personalInformationForms" class="mt-2">
      <v-col>
        <v-form ref="forms" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12" sm="6" md="6" class="mt-n6">
              <v-text-field
                v-model="post.post_meta.surname"
                :rules="[rules.required]"
                label="Surname"
                outlined
                dense
                color="success"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="mt-n6">
              <v-text-field
                v-model="post.post_meta.firstname"
                :rules="[rules.required]"
                label="First Name"
                outlined
                dense
                color="success"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="mt-n6">
              <v-text-field
                v-model="post.post_meta.middlename"
                :rules="[rules.required]"
                label="Middle Name"
                outlined
                dense
                color="success"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="mt-n6">
              <v-combobox
                v-model="post.post_meta.suffix"
                :rules="[rules.required]"
                :items="suffix"
                label="Suffix"
                outlined
                dense
                color="success"
              >
              </v-combobox>
            </v-col>

            <v-col cols="12" sm="6" md="6" class="mt-n6">
              <v-text-field
                v-model="post.post_meta.dateofbirth"
                :rules="[rules.required]"
                label="Date of Birth"
                outlined
                type="date"
                dense
                color="success"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="mt-n6">
              <v-text-field
                v-model="post.post_meta.age"
                :rules="[rules.required]"
                label="Age"
                dense
                outlined
                color="success"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" md="6" sm="6" class="mt-n6">
              <v-combobox
                v-model="post.post_meta.civilstatus"
                :rules="[rules.required]"
                :items="civilstatus"
                label="Civil Status"
                outlined
                dense
                color="success"
              >
              </v-combobox>
            </v-col>
            <v-col cols="12" md="6" sm="6" class="mt-n6">
              <v-combobox
                :rules="[rules.required]"
                v-model="post.post_meta.sex"
                :items="sex"
                label="Sex"
                outlined
                dense
                color="success"
              >
              </v-combobox>
            </v-col>
            <v-col cols="12" md="4" sm="6" class="mt-n6">
              <v-combobox
                v-model="post.post_meta.religion"
                :items="religion"
                label="Religion"
                outlined
                dense
                color="success"
              >
              </v-combobox>
            </v-col>
            <v-col cols="12" md="4" sm="6" class="mt-n6">
              <v-combobox
                v-model="post.post_meta.disabilities"
                :items="disabilities"
                label="Disability"
                outlined
                dense
                color="success"
              >
              </v-combobox>
            </v-col>
            <v-col cols=" 12" md="4" sm="6" class="mt-n6">
              <v-combobox
                v-model="post.post_meta.ethnicity"
                :items="ethnicity"
                label="Ethnic Group"
                outlined
                dense
                color="success"
              >
              </v-combobox>
            </v-col>
            <v-col cols=" 12" md="6" sm="6" class="mt-n6">
              <v-combobox
                :rules="[rules.required]"
                v-model="post.post_meta.idtype"
                :items="idtype"
                label="Type of ID"
                outlined
                dense
                color="success"
              >
              </v-combobox>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="mt-n6">
              <v-file-input
                :rules="[rules.required]"
                v-model="post.post_meta.id"
                label="Attach ID here"
                accept="image/x-png,image/gif,image/jpeg"
                outlined
                append-icon="mdi-camera"
                dense
                color="success"
              ></v-file-input>
            </v-col>
            <v-col cols="12" md="12" sm="12">
              <p class="font-weight-bold" style="margin-top: -35px">
                Home Address
              </p>
            </v-col>
            <v-col cols="12" md="6" sm="12" class="mt-n6">
              <v-combobox
                :rules="[rules.required]"
                v-model="post.post_meta.region"
                :items="address"
                item-text="region_name"
                outlined
                dense
                color="success"
                label="Region"
                return-object
                single-line
              >
              </v-combobox>
            </v-col>
            <v-col cols="12" md="6" sm="12" class="mt-n6">
              <v-combobox
                :rules="[rules.required]"
                v-model="post.post_meta.province"
                :items="provincename"
                outlined
                dense
                color="success"
                label="Province"
                return-object
                single-line
              >
              </v-combobox>
            </v-col>
            <v-col cols="12" md="6" sm="12" class="mt-n6">
              <v-combobox
                :rules="[rules.required]"
                v-model="post.post_meta.city"
                :items="cityname"
                outlined
                dense
                label="Municipality / City"
                return-object
                color="success"
                single-line
              >
              </v-combobox>
            </v-col>
            <v-col cols="12" md="6" sm="12" class="mt-n6">
              <v-combobox
                :rules="[rules.required]"
                v-model="post.post_meta.brgy"
                label="Baranggay"
                outlined
                dense
                color="success"
                :items="brgyname"
              ></v-combobox>
            </v-col>
            <v-col cols="12" md="12" sm="12" class="mt-n6">
              <v-text-field
                :rules="[rules.required]"
                v-model="post.post_meta.street"
                label="House No. / Street / Village"
                outlined
                dense
                color="success"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6" sm="12" class="mt-n6">
              <v-text-field
                :rules="[rules.required]"
                v-model="post.post_meta.contactno"
                label="Contact Number"
                outlined
                dense
                color="success"
                type="number"
                hide-spin-buttons
                maxlength="11"
                oninput="this.value=this.value.slice(0,this.maxLength)"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" sm="12" class="mt-n6">
              <v-text-field
                :rules="[rules.required]"
                v-model="post.post_meta.email"
                label="E-mail"
                outlined
                dense
                color="success"
                type="email"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" sm="6" class="mt-n6">
              <v-text-field
                v-model="post.post_meta.sss"
                label="SSS"
                outlined
                dense
                color="success"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" sm="6" class="mt-n6">
              <v-text-field
                v-model="post.post_meta.tin"
                label="TIN"
                outlined
                dense
                color="success"
              ></v-text-field>
            </v-col>
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
        this.personalInformations = true,
        this.personalInformationForms = false
      }
    },
  },
};
</script>