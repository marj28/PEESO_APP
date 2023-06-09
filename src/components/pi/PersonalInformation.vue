<template>
   <!-- eslint-disable  -->
  <v-container>
    <v-row v-show="personalInformations">
      <v-col cols="12" md="6">
        <p>Fullname: {{fullname}}</p>
        <p>Date of Birth: {{personal_info.dateofbirth}}</p>
        <p>Age: {{personal_info.age}}</p>
        <p>Civil Status: {{personal_info.age}}</p>
        <p>Sex: {{personal_info.gender}}</p>
        <p>Religion: {{personal_info.religion}}</p>
        <p>Disability: {{personal_info.disability}}</p>
      </v-col>
      <v-col cols="12" md="6" sm="6">
        <p>Ethnic Group: {{personal_info.ethnic_group}}</p>
        <p>Address: {{personal_info.address.street}},  {{personal_info.address.brgy}},  {{personal_info.address.city}}, {{personal_info.address.province}}, {{personal_info.address.region}}</p>
        <p>Contact No.: {{personal_info.contactno}}</p>
        <p>Email: {{personal_info.email}}</p>
        <p>Type of ID: {{personal_info.idtype}}</p>
        <p>SSS: {{personal_info.sss_no}}</p>
        <p>TIN: {{personal_info.tin}}</p>
      </v-col>
    </v-row>
    <v-row v-show="personalInformationForms" class="mt-2">
      <v-col>
         <v-form ref="forms" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12" sm="6" md="6" class="mt-n6">
              <v-text-field
                v-model="personal_info.lastname"
                :rules="[rules.required]"
                label="Surname"
                outlined
                dense
                color="success"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="mt-n6">
              <v-text-field
                v-model="personal_info.firstname"
                :rules="[rules.required]"
                label="First Name"
                outlined
                dense
                color="success"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="mt-n6">
              <v-text-field
                v-model="personal_info.middlename"
                :rules="[rules.required]"
                label="Middle Name"
                outlined
                dense
                color="success"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="mt-n6">
              <v-combobox
                v-model="personal_info.suffix"
                label="Suffix"
                outlined
                dense
                color="success"
              >
              </v-combobox>
            </v-col>

            <v-col cols="12" sm="6" md="6" class="mt-n6">
              <v-text-field
                v-model="personal_info.dateofbirth"
                label="Date of Birth"
                outlined
                type="date"
                dense
                color="success"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="mt-n6">
              <v-text-field
                v-model="personal_info.age"
                label="Age"
                dense
                outlined
                color="success"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" md="6" sm="6" class="mt-n6">
              <v-combobox
                v-model="personal_info.civil_status"
                :items="['Single','Married']"
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
                v-model="personal_info.gender"
                :items="['Male','Female']"
                label="Gender"
                outlined
                dense
                color="success"
              >
              </v-combobox>
            </v-col>
            <v-col cols="12" md="4" sm="6" class="mt-n6">
              <v-combobox
                v-model="personal_info.religion"
                label="Religion"
                outlined
                dense
                color="success"
              >
              </v-combobox>
            </v-col>
            <v-col cols="12" md="4" sm="6" class="mt-n6">
              <v-combobox
                v-model="personal_info.disability"
                label="Disability"
                outlined
                dense
                color="success"
              >
              </v-combobox>
            </v-col>
            <v-col cols=" 12" md="4" sm="6" class="mt-n6">
              <v-combobox
                v-model="personal_info.ethnic_group"
                label="Ethnic Group"
                outlined
                dense
                color="success"
              >
              </v-combobox>
            </v-col>
            <v-col cols=" 12" md="6" sm="6" class="mt-n6">
              <v-combobox
                
                v-model="personal_info.idtype"
                label="Type of ID"
                outlined
                dense
                color="success"
              >
              </v-combobox>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="mt-n6">
              <v-file-input
               
                v-model="personal_info.id"
                label="Attach ID here"
                accept="image/x-png,image/gif,image/jpeg"
                outlined
                append-icon="mdi-camera"
                dense
                color="success"
              ></v-file-input>
            </v-col>
            <v-col cols="12" md="12" sm="12">
              <p class="font-weight-bold">
                Home Address
              </p>
            </v-col>
            <v-col cols="12" md="6" sm="12">
                                      
                                      <v-combobox
                                        v-model="region"
                                        :items="regions"
                                        item-text="name"
                                        item-value="name"
                                        class="mb-n6"
                                        outlined
                                        dense
                                        color="success"
                                        label="Region"
                                        return-object
                                        @change="setProvinces(region.key)"
                                        :rules="[rules.required]"
                                      >
                                      </v-combobox>
                                    </v-col>

                                    <v-col cols="12" md="6" sm="12">
                                      <v-combobox
                                        v-model="personal_info.address.province"
                                        :items="provinces"
                                        outlined
                                        dense
                                        color="success"
                                        class="mb-n6"
                                        label="Province"
                                        @change="setMunicipalities(personal_info.address.province)"
                                        :rules="[rules.required]"
                                      >
                                      </v-combobox>
                                    </v-col>
                                    <v-col cols="12" md="6" sm="12">
                                      <v-combobox
                                        v-model="personal_info.address.city"
                                        outlined
                                        :items="municipalities"
                                        dense
                                        label="Municipality / City"
                                        @change="setBarrangays(personal_info.address.city)"
                                        return-object
                                        class="mb-n6"
                                        color="success"
                                        :rules="[rules.required]"
                                      >
                                      </v-combobox>
                                    </v-col>
                                    
                                    <v-col cols="12" md="6" sm="12">
                                      <v-combobox
                                        v-model="personal_info.address.baranggay"
                                        label="Baranggay"
                                        :items="barrangays"
                                        outlined
                                        dense
                                        color="success"
                                        class="mb-n6"
                                        :rules="[rules.required]"
                                      ></v-combobox>
                                    </v-col>
                                    

                                    <v-col cols="12" md="12" sm="12">
                                      <v-text-field
                                        v-model="personal_info.address.house"
                                        label="House No. / Street / Village"
                                        required
                                        outlined
                                        dense
                                        color="success"
                                        :rules="[rules.required]"
                                      ></v-text-field>
                                    </v-col>

            <v-col cols="12" md="6" sm="12" class="mt-n6">
              <v-text-field
                v-model="personal_info.contactno"
                label="Contact Number"
                outlined
                dense
                color="success"
                hide-spin-buttons
                maxlength="11"
                oninput="this.value=this.value.slice(0,this.maxLength)"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" sm="12" class="mt-n6">
              <v-text-field
                v-model="personal_info.email"
                label="E-mail"
                outlined
                dense
                color="success"
                type="email"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" sm="6" class="mt-n6">
              <v-text-field
                v-model="personal_info.sss_no"
                label="SSS"
                outlined
                dense
                color="success"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" sm="6" class="mt-n6">
              <v-text-field
                v-model="personal_info.tin"
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
    account:{},
  },
  data: () => ({
    valid: true,
    region:"",
    province:"",
    municipality:"",
    barrangay:"",
    philippines: [],
    regions:[],
    provinces:[],
    municipalities:[],
    barrangays:[],
    post: { post_meta: {} },
    personal_info:{
        firstname:"",
        lastname:"",
        suffix:"",
        dateofbirth:"",
        age:"",
        civil_status:"",
        gender:"",
        religion:"",
        disability:"",
        gender:"",
        religion:"",
        ethnic_group:"",
        contactno:"",
        email:"",
        idtype:"",
        sss_no:"",
        tin: "",
        address:{
          region:"",
          province:"",
          city:"",
          brgy:"",
          street:""
        },
    },
    rules: {
      required: (v) => !!v || "Required",
    },
  }),
  created() {
    this.getAddress()
    this.getPersonalInfo()
  },
  computed: {
    user() {
      if (this.$session.exists()) {
        return this.$session.get("user");
      }
      return null;
    },
    fullname() {
      return this.personal_info.lastname + ", " + this.personal_info.firstname
    }
  },
  methods: {
    initRegions() {
      var items = []
      var entries = Object.entries(this.philippines);
      entries.forEach(([key, value]) => {
        items.push({key:key, name:value.region_name});
      });
      this.regions = items
    },
    setProvinces(region_key) {
      this.personal_info.address.region = this.region.name
      var items = []
      var obj = this.philippines
      var objData= obj[region_key].province_list
      var entries = Object.entries(objData);
      entries.forEach(([key, value]) => {
        items.push(key);
      });
      console.log(items)
      this.provinces = items
    },
    setMunicipalities(provincename) {
      var items = []
      var obj = this.philippines
      var objData= obj[this.region.key].province_list
      var entries = Object.entries(objData[provincename].municipality_list);
      entries.forEach(([key, value]) => {
        items.push(key);
      });
      this.municipalities = items
    },
    setBarrangays(municipalnanme) {
      var obj = this.philippines
      var objData= obj[this.region.key].province_list
      this.barrangays = objData[this.personal_info.address.province].municipality_list[municipalnanme].barangay_list
    },
    getAddress() {
      this.$httplocal.get('philippines.json').then(response => {
          this.philippines = response.data
          this.initRegions()
      }).catch(e => {
        console.log(e)
      })
    },
    getPersonalInfo() {
      console.log("getPersonalInfo")
      this.$http.post('user/details', {id: this.$IsNum(this.user.id)}).then(response => {  
          console.log(response.data.account.profile)
            if(response.data.status) {
              if(response.data.account.profile.personal != null) {
                this.personal_info =  response.data.account.profile.personal
              }
            }  
            
           }).catch(e => {
             console.log(e)
        });
    },
    validate() {
      let v = this.$refs.forms.validate();
      console.log(this.personal_info)
      if (v) {
        this.SaveInfo()
      }
    },
    SaveInfo() {
      console.log(this.user.id)
        this.$http.post('account/update', {type:'personal', user_id: this.$IsNum(this.user.id), data: this.personal_info}).then(response => {  
            console.log(response.data)
            response.data.status?this.VA_ALERT("success", "Your Account has been Updated!"):this.VA_ALERT("error", response.data.message)
           }).catch(e => {
             console.log(e)
             
        });
       
    }
  },
};
</script>