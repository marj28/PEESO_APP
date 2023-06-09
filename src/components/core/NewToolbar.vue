<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      color="#1B5E20"
      dark
      app
      height="1200"
      width="320"
    >
      <v-container>
        <v-layout column align-center>
          <v-flex class="mt-5">
            <v-avatar size="100">
              <!-- <img src="@/assets/download.png" alt="" /> -->
            </v-avatar>
            <p class="white--text subheading mt-1 text-center">Administrator</p>
          </v-flex>
          <v-flex class="mt-3">
            <h3 class="white--text subheading mt-1 text-center">
              PEESO Personnel
            </h3>
          </v-flex>
        </v-layout>
      </v-container>
      <v-divider dark></v-divider>

      <v-list shaped class="clickable mb-n2">
        <template v-for="item in items">
          <v-list-group
            v-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item['icon-ctr']"
            :append-icon="item.model ? item.icon : item['icon-alt']"
            active-class="orange--text"
            class=""
          >
            <template v-slot:activator>
              <v-list-item-content>
                {{ item.text }}
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              route
              :to="child.route"
              active-class="orange--text"
              @click="closeAllOpen(item.text)"
            >
              <v-list-item-content v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-content>
              <v-list-item-content>
                {{ child.text }}
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <!-- eslint-disable -->
          <v-list-item
            v-else=":key='item.text' "
            route
            :to="item.route"
            active-class="orange--text"
            @click="closeAllOpen(item.text)"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="#388E3C" dark app elevate-on-scroll>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <v-btn text @click="$router.push({ name: 'admin' })">
          <span class="font-weight-bold ml-n9"> CPEESO </span>
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div id="search" class="search">
        <v-text-field
          class="search"
          hide-details
          append-icon="mdi-magnify"
          outlined
          dense
          rounded
        ></v-text-field>
        <!-- <v-icon class="button" dark>mdi-notif </v-icon> -->
      </div>
      <div class="ml-2">
        <v-icon class="button" dark size="20">mdi-bell-badge-outline </v-icon>
      </div>
      <div class="ml-2">
        <v-icon class="button" dark size="20"
          >mdi-message-badge-outline
        </v-icon>
      </div>
    </v-app-bar>
  </div>
</template>
  
  
  <script>
export default {
  methods: {
    closeAllOpen(name) {
      if (name == "Dashboard") {
        this.items[2].model = false;
        this.items[3].model = false;
        this.items[4].model = false;
        console.log(name);
      } else if (name == "Forms") {
        this.items[2].model = false;
        this.items[3].model = false;
        this.items[4].model = false;
        console.log(name);
      } else if (name == "Profile") {
        this.items[2].model = false;
        this.items[3].model = false;
        this.items[4].model = false;
        console.log(name);
      } else if (name == "Announcement") {
        this.items[2].model = false;
        this.items[3].model = false;
        this.items[4].model = false;
        console.log(name);
      }
    },
  },
  data: () => ({
    drawer: null,
    items: [
      {
        icon: "mdi-home",
        // items: [{ title: "List Item" }],
        text: "Dashboard",
        route: "/admin",
      },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        "icon-ctr": "mdi-animation-outline",
        text: "Divisions",
        children: [
          {
            text: "Education",
            route: "/program-post",
            icon: "mdi-book-education-outline",
          },
          {
            text: "Training",
            route: "/training-post",
            icon: "mdi-account-key",
          },
          {
            text: "Employment",
            route: "/job-post",
            icon: "mdi-briefcase-outline",
          },
        ],
      },
      {
        text: "User",
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        "icon-ctr": "mdi-clipboard-file-outline",
        children: [
          {
            text: "Students",
            route: "/studentview",
            icon: "mdi-clipboard-check-outline",
          },
          {
            text: "Job Seeker",
            route: "/jobseekerview",
            icon: "mdi-clipboard-file-outline",
          },
          { text: "Employer", route: "/ofwview", icon: "mdi-earth" },
        ],
      },

      {
        icon: "mdi-clipboard-clock-outline",
        text: "Announcement",
      },
      {
        icon: "mdi-account",
        text: "Profile",
      },
      {
        icon: "mdi-logout",
        text: "Log Out",
      },
    ],
  }),
};
</script>
  <style scoped>
@media screen and (max-width: 600px) {
  span {
    font-size: 7px;
  }

  div {
    size: x-small;
  }
}
</style>