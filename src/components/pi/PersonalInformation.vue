<template>
  <v-container>
    <v-row v-if="personalInformations === true">
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
    <v-row v-if="personalInformationForms === true">
      <v-col cols="12" sm="6" md="6" class="mt-n6">
        <v-text-field
          label="Surname"
          outlined
          dense
          color="success"
          required
          autofocus
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" class="mt-n6">
        <v-text-field
          label="First Name"
          outlined
          dense
          color="success"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" class="mt-n6">
        <v-text-field
          label="Middle Name"
          outlined
          dense
          color="success"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" class="mt-n6">
        <v-select
          :items="suffix"
          label="Suffix"
          required
          outlined
          dense
          color="success"
        >
        </v-select>
      </v-col>

      <v-col cols="12" sm="6" md="6" class="mt-n6">
        <v-text-field
          label="Date of Birth"
          outlined
          type="date"
          dense
          color="success"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" class="mt-n6">
        <v-text-field label="Age" dense outlined color="success" readonly>
        </v-text-field>
      </v-col>
      <v-col cols="12" md="6" sm="6" class="mt-n6">
        <v-select
          :items="civilstatus"
          label="Civil Status"
          required
          outlined
          dense
          color="success"
        >
        </v-select>
      </v-col>
      <v-col cols="12" md="6" sm="6" class="mt-n6">
        <v-select
          :items="sex"
          label="Sex"
          required
          outlined
          dense
          color="success"
        >
        </v-select>
      </v-col>
      <v-col cols="12" md="4" sm="6" class="mt-n6">
        <v-combobox
          :items="religion"
          label="Religion"
          required
          outlined
          dense
          color="success"
        >
        </v-combobox>
      </v-col>
      <v-col cols="12" md="4" sm="6" class="mt-n6">
        <v-combobox
          :items="disabilities"
          label="Disability"
          required
          outlined
          dense
          color="success"
        >
        </v-combobox>
      </v-col>
      <v-col cols=" 12" md="4" sm="6" class="mt-n6">
        <v-combobox
          :items="ethnicity"
          label="Ethnic Group"
          required
          outlined
          dense
          color="success"
        >
        </v-combobox>
      </v-col>
      <v-col cols=" 12" md="6" sm="6" class="mt-n6">
        <v-combobox
          :items="idtype"
          label="Type of ID"
          required
          outlined
          dense
          color="success"
        >
        </v-combobox>
      </v-col>
      <v-col cols="12" sm="6" md="6" class="mt-n6">
        <v-file-input
          label="Attach ID here"
          accept="image/x-png,image/gif,image/jpeg"
          outlined
          append-icon="mdi-camera"
          dense
          color="success"
        ></v-file-input>
      </v-col>
      <v-col cols="12" md="12" sm="12">
        <p class="font-weight-bold" style="margin-top: -35px">Home Address</p>
      </v-col>
      <v-col cols="12" md="6" sm="12" class="mt-n6">
        <v-combobox
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
          label="Baranggay"
          outlined
          dense
          color="success"
          :items="brgyname"
        ></v-combobox>
      </v-col>
      <v-col cols="12" md="12" sm="12" class="mt-n6">
        <v-text-field
          label="House No. / Street / Village"
          required
          outlined
          dense
          color="success"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6" sm="12" class="mt-n6">
        <v-text-field
          label="Contact Number"
          required
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
          label="E-mail"
          required
          outlined
          dense
          color="success"
          type="email"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6" sm="6" class="mt-n6">
        <v-text-field
          label="SSS"
          required
          outlined
          dense
          color="success"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6" sm="6" class="mt-n6">
        <v-text-field
          label="TIN"
          required
          outlined
          dense
          color="success"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
 /* eslint-disable */

export default {
  name:"PersonalInformation",
  props: {
    personalInformations: false,
    personalInformationForms: false,
  },
  data: () => ({}),
  
};
</script>