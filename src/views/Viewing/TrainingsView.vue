<template>
  <!--  eslint-disable  -->
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card-title class="green--text">
          TRAINING LIST
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
          :items="trainings"
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
  name: "EmployeerPage",
  data: () => ({
    state: "new",
    search: "",
    post: {},
    posts: [],
    trainings: [],
    selected: [],
    headers: [
      { text: "Training Title", value: "title", sortable: false },
      { text: "Trainor", value: "post_meta.company", sortable: false },
      {
        text: "Trainor Address",
        value: "post_meta.company_address",
        sortable: false,
      },
      { text: "Training Place", value: "post_meta.place_training", sortable: false },
      {
        text: "Date of Training",
        value: "post_meta.date_training",
        sortable: false,
      },
    ],
    popupform: false,
  }),
  computed: {},
  created() {
    this.trainingposts();
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
        .post("post/list", { type: "training" })
        .then((response) => {
          response.data.status
            ? ((this.posts = response.data.posts),
            console.log("response=", response.data.posts))
            : (this.posts = []);
        })
        .catch((e) => {
          console.log(e);
        });
      console.log("post=", this.trainings);
    },
    trainingposts() {
      this.$http
        .post("post/list", { type: "training" })
        .then((response) => {
          response.data.status
            ? (this.trainings = response.data.posts)
            : (this.trainings = []);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>