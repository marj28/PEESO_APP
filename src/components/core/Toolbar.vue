<template>
  <div v-if="currentRouteName !== 'Login' && currentRouteName !== 'Register'">
    <core-student-toolbar v-if="currentuser === 'Student'" />
    <core-employer-toolbar v-if="currentuser === 'Employeer'" />
    <core-applicant-toolbar v-if="currentuser === 'Jobseeker'" />
    <core-admin-toolbar v-if="currentuser === 'Admin'" />
    <core-default-toolbar v-if="currentuser === ' '" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data: () => ({
    confirm: false,
    listing: false,
    role: [],
  }),
  created() {},
  computed: {
    isLoggin() {
      return this.$store.state.is_logged;
    },
    currentuser() {
      if (this.user == null) {
        return " ";
      }
      return this.user.role;
    },
    currentRouteName() {
      return this.$route.name;
    },
    user() {
      if (this.$session.exists()) {
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
      this.$router.push("login");
    },
    menuItems() {
      return this.menu;
    },
  },
};
</script>
<style>
</style>
