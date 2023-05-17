<template>
  <v-container>
    <v-row>
      <v-col cols="12"> TRAININGS LIST </v-col>
    </v-row>
    <v-row>
      <!-- <v-col cols="4">
        <v-card color="tertiary" dark>
          <v-card-text
            class="text-center"
            @click="(popupform = true), (state = 'new'), (post = {})"
            style="height: 100px"
          >
            <div style="margin-top: 20px">
              <v-icon large left>mdi-plus-circle</v-icon> POST TRAINING
            </div>
          </v-card-text>
        </v-card>
      </v-col> -->
      <!-- <template v-for="(item, index) in posts">
        <v-col cols="4" :key="index + 'post'">
          <v-card>
            <v-card-text class="text-center">
              <span class="font-weight-bold text-h6">{{ item.title }}</span>
             
            </v-card-text>
            <v-card-actions dense>
              <span class="text-caption text-info">{{ item.status }}</span>
              <v-spacer></v-spacer>
              <v-btn
                text
                x-small
                color="warning"
                @click="(popupform = true), (state = 'update'), (post = item)"
                ><v-icon left small>mdi-pencil</v-icon> Edit</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </template> -->
      <v-col cols="12">
      <v-card class="mb-4" >
          
          <v-card-text>
            <v-list three-line>
              <template v-for="(item, index) in trainings">
                <v-list-item :key="index + '-programs'">
                  <v-list-item-avatar tile size="62">
                    <v-img
                      :src="item.medias != null ? item.medias.logo : noImage"
                    />
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title
                      ><a
                        @click="
                          $router.push('post/' + item.id).catch((err) => {})
                        "
                        >{{ item.title }}</a
                      >
                      <span class="text-caption">{{ item.status }}</span>
                    </v-list-item-title>
                    <v-list-item-subtitle v-html="item.subtitle" />
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-card-text>
      </v-card>
      </v-col>
    </v-row>
    <va-training-form
      :show="popupform"
      :data="post"
      :post_state="state"
      @DialogEvent="formEv"
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
    trainings: [],
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
    imageUrl(data) {
      this.company.medias.logo = data;
    },
    formEv() {
      this.popupform = false;
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
      console.log("post=", this.posts);
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