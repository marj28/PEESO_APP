<template>
    <!--  eslint-disable  -->
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card-title class="green--text">
            MY APPLICATION LIST
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
            :items="jobs"
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
  /* eslint-disable */
  import { mapMutations } from "vuex";
  export default {
    name: "JobsView",
    data: () => ({
      selected: [],
      headers: [
        { text: "Job Title", value: "title", sortable: false },
        { text: "Company", value: "post_meta.company", sortable: false },
        {
          text: "Place of Work",
          value: "post_meta.placeofwork",
          sortable: false,
        },
        { text: "Salary", value: "post_meta.salary", sortable: false },
        {
          text: "Classification of Work",
          value: "post_meta.classificationofwork",
          sortable: false,
        },
      ],
      state: "new",
      post: {},
      posts: {},
      jobs: [],
      search: "",
  
      switch1: true,
  
      jobform: false,
      JobFormShow: false,
    }),
    computed: {},
    created() {
      this.jobposts();
      if (this.$session.exists()) {
        this.$http.defaults.headers.common["Authorization"] =
          "Bearer " + this.$session.get("jwt");
        this.setLoggedIn(true);
        this.setAppBar(true);
        this.myJobs();
      }
    },
    methods: {
      /*   goToJobposting(item) {
          this.$router.push(`/JobPostingId/${item.id}/${this.admin}`);
        }, */
  
      ...mapMutations(["setLoggedIn", "setAppBar", "setMonthDailySales"]),
      jobposts() {
        this.$http
          .post("post/list", { type: "job" })
          .then((response) => {
            response.data.status
              ? ((this.jobs = response.data.posts),
                console.log("response=", response.data.posts),
                console.log("jobs=", this.jobs))
              : (this.jobs = {});
          })
          .catch((e) => {
            console.log(e);
          });
        console.log("posts=", this.jobs);
      },
      handleRowClick(item) {
        console.log("item=", item);
        this.$router.push("post/" + item.id).catch((err) => {});
      },
      imageUrl(data) {
        this.company.medias.logo = data;
      },
  
      formEv() {
        this.jobform = false;
        this.JobFormShow = true;
        this.myJobs();
      },
  
      /*  formEv1() {
              this.JobFormShow=false
              this.myJobs()
            }, */
  
      myJobs() {
        this.$http
          .post("post/my_post", { type: "job" })
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
    
    <style scoped>
  .datatable {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid black;
  }
  
  .datatable th,
  .datatable td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  .datatable th {
    background-color: #006700;
    font-weight: bold;
    color: #ddd;
  }
  
  th {
    height: 30px;
  }
  td {
    height: -20px;
  }
  
  .datatable tr:hover {
    background-color: #f5f5f5;
  }
  </style>