<template>
  <div>
    <v-col cols="10" md="6" class="mx-auto">
      <v-row>
        <v-col cols="12" class="text-center text-h5">  <img :src="$store.state.systemlogo" width="180px" /> </v-col>
        <v-col cols="12" class="text-center text-h5"> Create Account </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-card
            tile
            :dark="account_type == 'Jobseeker' ? true : false"
            :color="account_type == 'Jobseeker' ? 'success' : ''"
            @click="account_type = 'Jobseeker'"
          >
            <v-card-text class="text-center">
              <span
                ><v-icon left>mdi-account-hard-hat-outline</v-icon>As
                Jobseeker</span
              >
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card
            tile
            :dark="account_type == 'Employeer' ? true : false"
            :color="account_type == 'Employeer' ? 'success' : ''"
            @click="account_type = 'Employeer'"
          >
            <v-card-text class="text-center">
              <span><v-icon left>mdi-account-tie</v-icon> As Employer</span>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card
            tile
            :dark="account_type == 'Student' ? true : false"
            :color="account_type == 'Student' ? 'success' : ''"
            @click="account_type = 'Student'"
            class="align-center"
          >
            <v-card-text class="text-center">
              <span
                ><v-icon left>mdi-account-school</v-icon> As Scholarship
                Seeker</span
              >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-form
        v-if="account_type != ''"
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <!-- <v-radio-group
          row
          v-if="account_type == 'Employeer'"
          class="text-center mb-n6"
          >
          <v-spacer></v-spacer>
          <v-radio label="Public" value="1" @click="company_type = 'Public'"></v-radio>
          <v-radio label="Private" value="2" @click="company_type = 'Private'"></v-radio>
          <v-spacer></v-spacer
        ></v-radio-group> -->
        <h5 class="mb-8 green--text" style="margin-top: 20px">Information</h5>
        <v-row>
          <v-col cols="12" md="6" lg="6">
            <v-text-field
              v-model="account.firstname"
              class="textbox mt-n6"
              autofocus
              type="text"
              label="First Name"
              required
              :rules="nameRules"
              color="green"
              outlined
              dense
            />
          </v-col>
          <v-col cols="12" md="6" lg="6">
            <v-text-field
              v-model="account.lastname"
              class="textbox mt-n6"
              type="text"
              label="Last Name"
              required
              color="green"
              :rules="nameRules"
              outlined
              dense
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="account.middlename"
              class="textbox mt-n6"
              type="text"
              label="Middle Name"
              required
              color="green"
              :rules="nameRules"
              outlined
              dense
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-select
              v-model="account.title"
              :items="suffix"
              label="Suffix"
              outlined
              dense
              color="success"
              class="mt-n6"
            />
          </v-col>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="account.mobile_no"
              class="textbox mt-n6"
              maxlength="11"
              type="text"
              label="Contact Number"
              required
              color="green"
              :rules="nameRules"
              outlined
              dense
            />
          </v-col>
        </v-row>
        <v-divider />
        <h5 class="green--text pa-2">Login Credentials</h5>
        <v-text-field
          v-model="account.email"
          class="textbox mb-6"
          type="email"
          label="Email"
          :rules="emailRule"
          prepend-inner-icon="mdi mdi-account mdi-green"
          required
          color="green"
          outlined
          dense
        />
        <v-row>
          <v-col cols="12" md="6" lg="6">
            <v-text-field
              v-model="password"
              class="textbox mt-n6"
              :rules="pwdRules"
              :type="passwordShow ? 'text' : 'password'"
              label="Password"
              prepend-inner-icon="mdi-key"
              color="green"
              outlined
              dense
            />
          </v-col>
          <v-col cols="12" md="6" lg="6">
            <v-text-field
              v-model="pw2"
              class="textbox mt-n6"
              :rules="pwdConfirm"
              :type="passwordShow ? 'text' : 'password'"
              label="Confirm Password"
              prepend-inner-icon="mdi-key"
              color="green"
              outlined
              dense
            />
          </v-col>

          <v-col cols="12">
            <v-btn
              color="success"
              dark
              block
              :loading="loading"
              @click="applicantregister"
            >
              <v-icon left> mdi-account-check </v-icon>
              SIGN UP
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-col>
    <v-row>
      <v-col class="pt-4 text-center">
        <span>Already have an account</span>
        <v-btn
          text
          color="warning"
          @click="$router.push('/login').catch((err) => {})"
        >
          Login here <v-icon right> mdi-arrow-right-bold-box </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
  <script>
import { mapMutations } from "vuex";
export default {
  name: "RegistrationPage",
  data: () => ({
    suffix: ["N/A", "Jr.", "Sr.", "III."],
    loading: false,
    alertColor: "success",
    snackbar: false,
    account_type: "",
    company_type:"",
    account: {},
    nameRules: [(v) => !!v || "Field is required"],
    emailRule: [
      (v) => !!v || "Field is required",
      (v) => /.+@.+\..+/.test(v) || "Invalid email",
    ],
    passwordShow: false,
    valid: true,
    password: "",
    pw2: "",
    pwdRules: [(v) => !!v || "Password required"],
    pwdConfirm: [(v) => !!v || "Confirm password"],
  }),
  methods: {
    ...mapMutations([
      "setAlert",
      "setAlertColor",
      "setAlertText",
      "setLoggedIn",
      "setNavBar",
    ]),
    userReg() {
      this.loading = true;
      this.account.status = "New Register";
      this.account.username = this.account.email;
      this.$http
        .post("user/register", this.account)
        .then((response) => {
          console.log(response.data);
          response.data.status
            ? this.VA_ALERT("success", response.data.message)
            : this.VA_ALERT("error", response.data.message);
          if (response.data.status) {
            localStorage._email = this.account.email;
            localStorage._action = "For verification";

            setTimeout(() => {
              this.loading = false;
              this.$router.push("/verify");
            }, 2000);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    applicantregister() {
      if (this.$refs.form.validate()) {
        if (this.password != this.pw2) {
          alert("Password not match!");
          return;
        } else {
          this.account.role = this.account_type;
          this.account.companytype=this.company_type;
          this.account.password = this.password;
          this.userReg();
        }
      }
    },
  },
};
</script>