<template>
  <div>
    <v-app-bar dense elevation="1">
      <img :src="$store.state.systemlogo" class="mr-2" width="40px" />
      <v-toolbar-items class="hidden-md-and-down">
        <v-btn text tile @click="$router.push('/home').catch((err) => {})">
          Applicant
        </v-btn>
        <v-btn text tile @click="$router.push('/home').catch((err) => {})">
          What is PEESO?
        </v-btn>
        <v-btn text tile @click="$router.push('/home').catch((err) => {})">
          Contact Us
        </v-btn>
      </v-toolbar-items>
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-icon
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
            class="hidden-lg-and-up"
          >
            mdi-menu
          </v-icon>
        </template>
        <v-list>
          <v-list-item @click="$router.push('/home').catch((err) => {})">
            <v-list-item-title>APPLICANT</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>WHAT IS PEESO?</v-list-item-title>
          </v-list-item>
          <v-list-item @click="$router.push('/home').catch((err) => {})">
            <v-list-item-title>CONTACT US</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer />
      <template v-if="isLoggin">
        <v-menu offset-y>
          <template #activator="{ on, attrs }">
            <span class="caption text-primary" v-bind="attrs" v-on="on"
              ><v-icon left>mdi-account-circle</v-icon> My Account</span
            >
          </template>
          <v-list dense>
            <template v-for="(menu, index) in MENUS">
              <v-list-item
                :key="index"
                @click="$router.push(menu.route).catch((err) => {})"
              >
                <v-list-item-title>
                  <v-icon left>
                    {{ menu.icon }}
                  </v-icon>
                  {{ menu.label }}
                </v-list-item-title>
              </v-list-item>
            </template>
            <v-list-item @click="confirm = true" color="warning">
              <v-list-item-title>
                <v-icon left color="error"> mdi-power </v-icon>Logout
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
      <template v-else>
        <v-btn
          small
          text
          class="caption text-primary"
          color="warning"
          @click="$router.push('/register').catch((err) => {})"
        >
          Create an Account
        </v-btn>
        <v-divider vertical inset />
        <v-btn
          small
          text
          class="caption text-primary"
          color="success"
          @click="$router.push('/login').catch((err) => {})"
        >
          LOGIN
        </v-btn>
      </template>
      <v-dialog v-model="confirm" persistent max-width="290">
        <v-card color="#232323" dark>
          <v-card-text class="pt-5"> Continue log out? </v-card-text>
          <v-card-actions>
            <v-btn color="warning darken-1" text @click="confirm = false">
              Cancel
            </v-btn>
            <v-spacer />
            <v-btn
              color="green darken-1"
              text
              @click="(confirm = false), logout()"
            >
              Yes
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app-bar>
  </div>
</template>
  
  <script>
import { eventBus } from "@/views/eventBus";
import { mapMutations } from "vuex";
export default {
  data: () => ({
    confirm: false,
    listing: false,
    // title: null,
    seeker_menu: [
      {
        label: "My Account",
        icon: "mdi-card-account-details",
        route: "/profile",
      },
      {
        label: "Jobs",
        icon: "mdi-account-hard-hat",
        route: "/jobview",
      },
      {
        label: "Trainings",
        icon: "mdi-forum",
        route: "/trainingview",
      },
    ],
  }),

  computed: {
    isLoggin() {
      return this.$store.state.is_logged;
    },
    MENUS() {
        return this.seeker_menu;
    },
    currentRouteName() {
      return this.$route.name;
    },
    user() {
      if (this.$session.get("user")) {
        return this.$session.get("user");
      }
      return null;
    },
  },
  methods: {
    ...mapMutations(["setNavBar", "setOpenMachine", "setLoggedIn"]),
    togleDrawer() {
      this.setDrawer(true);
    },
    logout() {
      this.setLoggedIn(false);
      this.setNavBar(false);
      sessionStorage.clear();
      eventBus.$emit("reloadToolbar");
      this.$router.push("/");
    },
    menuItems() {
      return this.menu;
    },
  },
};
</script>
  <style>
@media screen and (min-width: 600px) {
  .hidden-md-and-up {
    content-visibility: hidden;
  }
}
</style>
   