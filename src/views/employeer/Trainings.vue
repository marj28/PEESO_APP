<template>
  <v-container>
    <v-row>
      <v-col cols="12"> TRAINING LIST </v-col>
    </v-row>
    <v-row class="training-button">
      <v-col cols="4">
        <v-card color="tertiary" dark>
          <v-card-text
            class="text-center"
            @click="(trainingform = true), (state = 'new'), (post = {})"
            style="height: 100px"
          >
            <div style="margin-top: 10px">
              <v-icon large left>mdi-plus-circle</v-icon>
              <span style="font-size: 15px; color: white" class="">POST TRAINING</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      

      <!-- eslint-disable -->
    </v-row>

    <v-row>
      <v-col cols="12" md="12" lg="12" sm="12">
        <v-data-table
          class="custom-table"
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
                class="black--text"
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
              @click="(TrainingFormShow = true), (state = 'update'), (post = item)"
              color="success"
            >
              mdi-eye
            </v-icon>

            <v-btn
              text
              x-small
              color="warning"
              @click="(trainingform = true), (state = 'update'), (post = item)"
              ><v-icon left small>mdi-pencil</v-icon> Edit</v-btn
            >
            <v-icon @click="deleteItem(item)" color="error" small>
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>

    <va-training-form
      :show="trainingform"
      :data="post"
      :post_state="state"
      @DialogEvent="formEv"
    />
    <va-training-show
      :show="TrainingFormShow"
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
    trainingform: false,
    TrainingFormShow: false,
    search: "",

    tableHeaders: [
      { text: "Training title", value: "post_meta.title" },
      { text: "Nature of training", value: "post_meta.nature_of_training" },
      { text: "Place of training", value: "post_meta.venue" },
      { text: "Date", value: "post_meta.date" },
      { text: "Time", value: "post_meta.time" },
      { text: "Participant count", value: "post_meta.participan_count" },
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
      this.trainingform = false;
      this.myJobs();
    },

    myJobs() {
      this.$http
        .post("post/my_post", { type: "training" })
        .then((response) => {
          response.data.status
            ? (this.posts = response.data.posts)
            : (this.posts = []);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    formEv1() {
      this.TrainingFormShow = false;
      this.myJobs();
    },
  },
};
</script>
<!-- <style>
.training-button {
  display: block;
  width: 50%;
  height: 100px;
  margin-bottom: 40px;
  cursor: pointer;
}

.training-button:hover {
  opacity: .5;
}

.training-button:active {
  opacity: 100%;
}
</style> -->