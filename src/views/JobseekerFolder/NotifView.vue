<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <div style="float: left" class="mr-8">
              <img :src="$store.state.systemlogo" width="110px" />
            </div>
            <div style="min-height: 100px">
              <div class="text-h5 font-weight-bold text-primary">Welcome</div>
              <div>Welcome to Tagum City - PEESO Program</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        <v-card class="mb-4">
          <v-card-title>
            <span class="text-primary">Inbox</span>
          </v-card-title>
          <v-card-text>
            <v-text-field
              outlined
              dense
              append-icon="mdi-magnify"
              label="Search"
              v-model="search"
            >
            </v-text-field>
            <v-divider></v-divider>
            <v-list-item-group
              v-model="selectItemId"
              active-class="selected-item"
            >
              <v-list three-line>
                <template v-for="(item, index) in items">
                  <v-subheader
                    v-if="item.header"
                    :key="item.header"
                    v-text="item.header"
                  ></v-subheader>

                  <v-divider
                    v-else-if="item.divider"
                    :key="index"
                    :inset="item.inset"
                  ></v-divider>

                  <v-list-item
                    v-else
                    :key="item.title"
                    @click="selectItem(item)"
                  >
                    <v-list-item-avatar>
                      <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title
                        v-html="item.title"
                      ></v-list-item-title>
                      <v-list-item-subtitle
                        v-html="item.subtitle"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list>
            </v-list-item-group>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <h5 class="pa-6">Message</h5>
          <v-divider></v-divider>
          <v-card v-if="selectedItem">
            <v-card-title v-html="selectedItem.title"></v-card-title>
            <v-card-text v-html="selectedItem.subtitle"></v-card-text>
            <v-card-action>
              <v-space></v-space>
              <v-btn color="green" text > Accept </v-btn>
              <v-btn color="orange" text > Decline </v-btn>
            </v-card-action>
            <!-- <p>{{ this.selected.status }}</p> -->
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "JobsPage",
  data: () => ({
    state: "new",
    overview: "",
    company: { medias: { logo: "" } },
    jobs: [],
    search: "",

    items: [
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle:
          '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Birthday gift",
        subtitle:
          '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Recipe to try",
        subtitle:
          '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      },
    ],
    selectedItemId: null,
  }),
  methods: {
    selectItem(item) {
      this.selectedItemId = this.selectedItemId === item ? null : item;
    },
  },
  computed: {
    filteredItems() {
      // Filter the items based on the search query
      return this.items.filter((item) => {
        const itemTitle = item.title.toLowerCase();
        const itemSubtitle = item.subtitle.toLowerCase();
        const query = this.searchQuery.toLowerCase();
        return itemTitle.includes(query) || itemSubtitle.includes(query);
      });
    },
    selectedItem() {
      return this.items.find((item) => item === this.selectedItemId);
    },
    // selectedItems() {
    //   return this.items.filter((item) => item.selected);
    // },
  },
  created() {
    // if (this.$session.exists()) {
    //   this.$http.defaults.headers.common["Authorization"] =
    //     "Bearer " + this.$session.get("jwt");
    //   this.setLoggedIn(true);
    //   this.setAppBar(true);
    //   this.myCompany();
    //   this.myJobs();
    //   (function () {
    //   if (window.localStorage) {
    //     if (!localStorage.getItem("firstLoad")) {
    //       localStorage["firstLoad"] = true;
    //       window.location.reload();
    //     } else localStorage.removeItem("firstLoad");
    //   }
    // })();
    // }
  },
};
</script>