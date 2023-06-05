<template>
  <v-container>
    <v-row>
      <v-col cols="12"> PROGRAM LIST </v-col>
    </v-row>
    <v-row class="program-button">
      <v-col>
        <v-card color="accent" dark >
          <v-card-text
            class="text-center"
            @click="(programform = true), (state = 'new'), (post = {})"
            style="height: 100px"
          >
            <div style="margin-top: 10px">
              <v-icon large left>mdi-plus-circle</v-icon>
              <span style="font-size: 15px; color: white">POST PROGRAM</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- eslint-disable -->
    </v-row>

    <v-row>
      <v-col cols="12" md="12" lg="12" sm="12">
        <v-data-table
          class="custom-table mt-n12"
          :headers="getTableHeaders"
          :items="posts"
          :search="search"
        >
          <template v-slot:top>
            <v-toolbar flat color="#FFFFFF">
              <v-spacer></v-spacer>
              <v-spacer></v-spacer>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                outlined
                dense
                color="green"
              ></v-text-field>
              <v-divider vertical class="mx-2" inset></v-divider>
            </v-toolbar>
          </template>
          <template slot="item.switch1" slot-scope="{ item }">
            <v-switch
              class="px-5 mt-n1"
              v-model="item.switch1"
              color="success"
              dense
            ></v-switch>
          </template>

          <template v-slot:item.actions="{ item }">
            <v-icon
              small
              class="mr-2"
              @click="(ProgramFormShow = true), (state = 'update'), (post = item)"
              color="success"
            >
              mdi-eye
            </v-icon>

            <v-btn
              text
              x-small
              color="warning"
              @click="(programform = true), (state = 'update'), (post = item)"
              ><v-icon left small>mdi-pencil</v-icon> Edit</v-btn
            >
            <v-icon @click="deleteItem(item)" color="error" small>
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>

    <va-program-form
      :show="programform"
      :data="post"
      :post_state="state"
      @DialogEvent="formEv"
    />
    <va-program-show
      :show="ProgramFormShow"
      :data="post"
      :post_state="state"
      @DialogEvent="formEv1"
    />
  </v-container>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "EmployeerPage",
  data: () => ({
    state: "new",
    post: {},
    posts: [],
    programform: false,
    ProgramFormShow: false,
    // popupform: false,
    // dialog: false,
    // dialog1: false,
    // dialogDelete: false,
    search: "",
    tableHeaders: [
      { text: "Program Name", value: "post_meta.ProgramName" },
      { text: "Offering Company", value: "post_meta.OfferingCompany" },
      { text: "Date of Filing", value: "post_meta.Date" },
      { text: "End of Filing", value: "post_meta.EndofFilling" },
      { text: "Applicant Count", value: "post_meta.ApplicantCount" },
      { text: "Actions", value: "actions", align: "center" },
    ],
  }),
  computed: {
    getTableHeaders() {
      if (this.isMobile) {
        // Remove the headers you don't want to display in mobile view
        return this.tableHeaders.filter((header) => !header.hideOnMobile);
      }
      return this.tableHeaders;
    },
  },

  created() {
    if (this.$session.exists()) {
      this.$http.defaults.headers.common["Authorization"] =
        "Bearer " + this.$session.get("jwt");
      this.setLoggedIn(true);
      this.setAppBar(true);
      this.myJobs();
    }
  },

  methods: {
    ...mapMutations(["setLoggedIn", "setAppBar", "setMonthDailySales"]),
    imageUrl(data) {
      this.company.medias.logo = data;
    },
    formEv() {
      this.programform = false;
      this.myJobs();
    },
    formEv1() {
      this.ProgramFormShow = false;
      this.myJobs();
    },
    myJobs() {
      this.$http
        .post("post/my_post", { type: "program" })
        .then((response) => {
          response.data.status
            ? (this.posts = response.data.posts)
            : (this.posts = []);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
<style>
.program-button {
  display: block;
  width: 30%;
  height: 100px;
  margin-bottom: 40px;
  cursor: pointer;
}

.program-button:hover {
  opacity: 0.5;
}

.program-button:active {
  opacity: 100%;
}
</style>