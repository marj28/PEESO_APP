<template>
  <!-- eslint-disable  -->
  <v-container>
    <v-row v-show="employmentStatuss">
      <v-col cols="12" md="6" sm="12">
        <p>Employment Status:</p>
        <p>Employment Type:</p>
        <p>PESLA Attendee:</p>
      </v-col>
      <v-col cols="12" md="6" sm="6">
        <p>Former OFW:</p>
        <p>4ps Beneficiary:</p>
        <p>First Time Job Seeker:</p>
      </v-col>
    </v-row>
    <v-row v-show="employmentStatusForms">
      <v-col>
        <v-form ref="forms" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12" sm="6" md="6" id="step2">
              <v-radio-group v-model="post.post_meta.employmentstatus" row>
                <v-radio
                  label="Employed"
                  color="success"
                  value="Employed"
                  hide-details
                  @change="(employed = true), (unemployed = false)"
                >
                </v-radio>
                <v-radio
                  label="Unemployed"
                  color="success"
                  value="Unemployed"
                  hide-details
                  style=""
                  @change="(unemployed = true), (employed = false)"
                >
                </v-radio>

                <v-container v-show="employed">
                  <v-radio-group row v-model="post.post_meta.employedstatus">
                    <v-radio
                      class="ma-2 pa-2"
                      label="Wage Employed"
                      color="success"
                      value="Wage Employed"
                      hide-details
                      @change="(wage_employed = true), (self_employed = false)"
                    ></v-radio>
                    <v-radio
                      class="ma-2 pa-2"
                      label="Self-Employed"
                      color="success"
                      value="Self-Employed"
                      style="margin-top: -30px"
                      hide-details
                      @change="(wage_employed = false), (self_employed = true)"
                    ></v-radio>
                    <v-container v-show="wage_employed">
                      <v-text-field
                        v-model="post.post_meta.companyname"
                        class="pa-2"
                        style="margin-top: -10px; margin-left: "
                        outlined
                        label="Name of Company"
                        dense
                        color="success"
                      ></v-text-field>
                      <v-text-field
                        v-model="post.post_meta.companyaddress"
                        class="pa-2"
                        style="margin-top: -30px; margin-left: "
                        outlined
                        label="Company Address"
                        dense
                        color="success"
                      ></v-text-field>
                      <v-text-field
                        v-model="post.post_meta.occupation"
                        class="pa-2"
                        style="margin-top: -30px; margin-left: "
                        outlined
                        label="Occupation"
                        dense
                        color="success"
                      ></v-text-field>
                    </v-container>

                    <v-container v-show="self_employed">
                      <v-select
                        v-model="post.post_meta.selfemployed"
                        class="pa-2"
                        style="margin-left: "
                        dense
                        color="success"
                        multiple
                        small-chips
                        :items="selfemployed"
                        label="Please Specify"
                        required
                        outlined
                      >
                      </v-select>
                    </v-container>
                  </v-radio-group>
                </v-container>

                <v-container v-show="unemployed">
                  <v-checkbox
                    v-model="post.post_meta.freshgraduate"
                    class="ma-2 pa-2"
                    label="Fresh Graduate"
                    color="success"
                    value="Fresh Graduate"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="post.post_meta.finishedcontract"
                    class="ma-2 pa-2"
                    label="Finished Contract"
                    color="success"
                    value="Finished Contract"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="post.post_meta.resigned"
                    class="ma-2 pa-2"
                    label="Resigned"
                    color="success"
                    value="Resigned"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="post.post_meta.terminated"
                    class="ma-2 pa-2"
                    label="Terminated"
                    color="success"
                    value="Terminated"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="post.post_meta.retiree"
                    class="ma-2 pa-2"
                    label="Retiree"
                    color="success"
                    value="Retiree"
                    hide-details
                  ></v-checkbox>
                  <v-text-field
                    v-model="post.post_meta.others"
                    label="Others: "
                    class="ma-2 pa-2"
                    outlined
                    dense
                    color="success"
                  >
                  </v-text-field>
                </v-container>
              </v-radio-group>
            </v-col>

            <v-col cols="12" sm="12" md="6">
              <p class="">
                Have you attended Pre-Employment Seminar for Local Applicants
                (PESLA)?
              </p>
              <v-radio-group row v-model="post.post_meta.pesla">
                <v-radio
                  label="Yes"
                  value="yes"
                  @click="pesla = false"
                  class="ma-2 pa-2"
                  color="success"
                ></v-radio>

                <v-radio
                  label="No"
                  value="no"
                  @click="pesla = true"
                  class="ma-2 pa-2"
                  color="success"
                ></v-radio>
                <v-container v-show="pesla">
                  <p class="">PESLA DETAILS</p>
                  <p>
                    We encourage you to attend PESLA. PEESO conducts free PESLA
                    every Frida, 1pm at Pagbabago Hall, 2nd Floor, Center for
                    Justice and Transformation Building (Old SP Building), Tagum
                    City. For more information, message PEESO Tagum City
                    Facebook page.
                  </p>
                  <p class="">Willing to attend PESLA?</p>
                  <v-radio-group row v-model="post.post_meta.attendpesla">
                    <v-radio label="Yes" value="yes" color="success"> </v-radio>
                    <v-radio label="No" value="no" color="success"> </v-radio>
                  </v-radio-group>
                </v-container>
              </v-radio-group>
            </v-col>

            <v-col cols="12" sm="12" md="6">
              <v-row>
                <v-col>
                  <!-- <p class="font-weight-bold">Are you an OFW?</p>
                            <v-radio-group row>
                              <v-radio label="Yes" value="yes" @click="specify_country = true" class="ma-2 pa-2"
                                color="success"></v-radio>
                              <v-radio label="No" value="no" @click="specify_country = false" style="margin-top: -15px"
                                class="ma-2 pa-2" color="success"></v-radio>
                              <v-container v-show="specify_country">
                                <v-text-field label="Specify Country: " outlined color="success" dense></v-text-field>
                              </v-container>
                            </v-radio-group> -->
                  <p style="" class="">Are you a former OFW?</p>
                  <v-radio-group row v-model="post.post_meta.formerofw">
                    <v-radio
                      label="Yes"
                      value="yes"
                      @click="former_ofw = true"
                      class="ma-2 pa-2"
                      color="success"
                    ></v-radio>
                    <v-radio
                      label="No"
                      value="no"
                      style="margin-top: -15px"
                      class="ma-2 pa-2"
                      @click="former_ofw = false"
                      color="success"
                    ></v-radio>
                    <v-container v-show="former_ofw">
                      <v-text-field
                        v-model="post.post_meta.lcd"
                        label="Latest Country of Deployment: "
                        outlined
                        dense
                        color="success"
                      ></v-text-field>
                      <v-text-field
                        v-model="post.post_meta.myrp"
                        label="Month and Year of Return to Philippines: "
                        outlined
                        dense
                        color="success"
                        type="date"
                      ></v-text-field>
                    </v-container>
                  </v-radio-group>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12" sm="12" md="6">
              <p class="">Are you a 4Ps beneficiary?</p>
              <v-radio-group row v-model="post.post_meta.fourps">
                <v-radio
                  label="Yes"
                  value="yes"
                  @click="fourPs_beneficiary = true"
                  color="success"
                  class="ma-2 pa-2"
                ></v-radio>
                <v-radio
                  label="No"
                  value="no"
                  style="margin-top: -15px"
                  @click="fourPs_beneficiary = false"
                  color="success"
                  class="ma-2 pa-2"
                ></v-radio>
                <v-container v-show="fourPs_beneficiary">
                  <v-text-field
                    v-model="post.post_meta.householdid"
                    label="Household ID No. "
                    outlined
                    dense
                    color="success"
                  ></v-text-field>
                </v-container>
              </v-radio-group>
              <v-spacer></v-spacer>
            </v-col>
            <v-col cols="12" md="6">
              <p class="">First Time Job Seeker?</p>
              <v-radio-group row v-model="post.post_meta.ftjs">
                <v-radio
                  label="Yes"
                  value="yes"
                  color="success"
                  class="ma-2 pa-2"
                ></v-radio>
                <v-radio
                  label="No"
                  value="no"
                  color="success"
                  class="ma-2 pa-2"
                ></v-radio>
              </v-radio-group>
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
          class="mr-2"
          @click="(employmentStatusForms = false), (employmentStatuss = true)"
          >Cancel
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
/* eslint-disable */
export default {
  // name: "Employment Status",
  props: {
    employmentStatuss: false,
    employmentStatusForms: false,
  },
  data: () => ({
    post: { post_meta: {} },
    employed: false,
    unemployed: false,
    wage_employed: false,
    self_employed: false,
    pesla: false,
    former_ofw: false,
    fourPs_beneficiary: false,
    selfemployed: [],
  }),
  methods: {
    validate() {
      this.$refs.forms.validate();
      let v = this.$refs.forms.validate();
      if (v) {
        this.employmentStatuss = true,
        this.employmentStatusForms = false
        
      }
    },
  },
};
</script>