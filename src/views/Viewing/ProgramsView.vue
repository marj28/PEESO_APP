<template>
  <!--  eslint-disable  -->
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card-title class="green--text">
          PROGRAM LIST
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            dense
            outlined
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="programs"
          v-model="selected"
          :search="search"
          @click:row="handleRowClick"
        >
        </v-data-table>
        <v-card> </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  <script>
import { mapMutations } from "vuex";
export default {
  name: "ProgramsView",
  data: () => ({
    state: "new",
    post: {},
    posts: [],
    programs: [],
    selected: [],
    popupform: false,
    search: "",
    headers: [
      { text: "Program Title", value: "title", sortable: false },
      { text: "Offering Company", value: "post_meta.company", sortable: false },
      {
        text: "Date of Filing",
        value: "post_meta.placeofwork",
        sortable: false,
      },
    ],
  }),
  computed: {},
  created() {
    this.programposts();
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
    handleRowClick(item) {
      console.log("item=", item);
      this.$router.push("post/" + item.id).catch((err) => {});
    },
    imageUrl(data) {
      this.company.medias.logo = data;
    },
    formEv() {
      this.popupform = false;
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
    programposts() {
      this.$http
        .post("post/list", { type: "program" })
        .then((response) => {
          response.data.status
            ? (this.programs = response.data.posts)
            : (this.programs = []);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>