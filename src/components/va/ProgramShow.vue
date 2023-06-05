<template>
    <!--  eslint-disable  -->
  <div>
    <v-dialog v-model="show" max-width="550px">
      <v-card>
        <v-card-title>
          <span class="text-h5">VIEW PROGRAM</span>
          <v-spacer></v-spacer>
          <!-- <v-btn
                @click="(dialog = true), (dialog1 = false)"
                color="warning"
                icon
                small
                class="mt-2"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn> -->
        </v-card-title>
        <v-divider color="success"></v-divider>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <b class="green--text">Program Name:</b>
                {{ data.post_meta.ProgramName }}
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <b class="green--text">Offering Company:</b>
                {{ data.post_meta.OfferingCompany }}
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <b class="green--text">Date of Filing:</b>
                {{ data.post_meta.Date }}
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <b class="green--text">End of Filing:</b>
                {{ data.post_meta.EndofFilling }}
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <b class="green--text">Applicant Count:</b>
                {{ data.post_meta.ApplicantCount }}
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <b class="green--text">Program Description:</b>
                {{ data.post_meta.ProgramDescription }}
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions class="mt-n6">
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" dark @click="emitToParent('close')">
            Exit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
/*    eslint-disable */
import { mapMutations } from "vuex";
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    post_state: {
      type: String,
      default: "New",
    },
    data: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    e1: 1,
    loading: false,
    valid: true,
    // show: false,

    company: {},
    post: { post_meta: { salary: "" } },
    state: "new",
    nameRules: [(v) => !!v || "Field is required"],

    headers: [
      {
        text: "First Name",
        align: "left",
        sortable: false,
        value: "firstname",
      },
      {
        text: "Last Name",
        align: "left",
        sortable: false,
        value: "lastname",
      },
      {
        text: "Job Posting Applied",
        align: "left",
        sortable: false,
        value: "jobpostingapplied",
      },
      {
        text: "Contact Number",
        align: "left",
        sortable: false,
        value: "contact_number",
      },
      {
        text: "Remarks",
        align: "left",
        sortable: false,
        value: "remark",
      },
    ],
  }),
  watch: {
    show(v) {
      v ? (this.show = true) : (this.show = false);
      if (v) {
        this.state = this.post_state;
        this.myCompany();
        if (this.state == "update") {
          this.post = this.data;
        }
      } else {
        this.post = { post_meta: { salary: "" } };
      }
    },
  },
  created() {},
  methods: {
    emitToParent(action) {
      this.$emit("DialogEvent", { action: action });
    },
    myCompany() {
      this.$http
        .get("company/my_company")
        .then((response) => {
          console.log(response.data);
          if (response.data.status) {
            this.company = response.data.companies[0];
            this.post.company_id = this.company.id;
            this.post.post_meta.company = this.company.name;
            this.post.post_meta.company_address = this.company.address;
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    SavePost() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.Post();
      }
    },
    Post() {
      console.log(this.post);
      let method = "post/new";
      if (this.state == "update") {
        method = "post/update";
      }
      this.post.type = "job";
      console.log(this.post);

      this.$http
        .post(method, this.post)
        .then((response) => {
          console.log(response.data);
          this.loading = false;
          response.data.status
            ? this.VA_ALERT("success", response.data.message)
            : this.VA_ALERT("error", response.data.message);
          this.emitToParent("close");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script> 
