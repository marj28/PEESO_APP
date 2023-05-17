<template>
  <v-container>
    <v-row>
      <v-col cols="12"> PROGRAM LIST </v-col>
    </v-row>
    <v-row>
        <v-col cols="12">
        <v-card class="mb-4">
          
          <v-card-text>
            <v-list three-line>
              <template v-for="(item, index) in programs">
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
    <va-program-form
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
    programs: [],
    popupform: false,
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