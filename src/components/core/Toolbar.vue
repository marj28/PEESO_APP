<template>
  <div>
    <core-student-toolbar v-if="student" />
    <core-employer-toolbar v-if="employer" />
    <core-applicant-toolbar v-if="applicant" />
    <core-admin-toolbar v-if="admin" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data: () => ({
    student: false,
    employer: false,
    applicant: false,
    admin: false,
    confirm: false,
    listing: false,
    role:[]
    // title: null,
  }),
  watch:{
    user(newuser){
      this.role=newuser
      console.log("role=",this.role)
    if (this.role.role == "Student") {
      this.student = true;
      this.employer = false;
      this.applicant = false;
      this.admin = false;
    } else if (this.role.role == "Employeer") {
      this.employer = true;
      this.applicant = false;
      this.admin = false;
      this.student = false;
    } else if (this.role.role == "Jobseeker") {
      this.applicant = true;
      this.admin = false;
      this.student = false;
      this.employer = false;
    } else if (this.role.role == "Admin") {
      this.admin = true;
      this.student = false;
      this.employer = false;
      this.applicant = false;
    } else {
      (this.student = false),
        (this.employer = false),
        (this.applicant = false),
        (this.admin = false);
    }
    }
  },
  created() {
    // console.log("role=",this.$session.user.role)
    this.role=this.user
    console.log("role=",this.role)
    if (this.role.role == "Student") {
      this.student = true;
      this.employer = false;
      this.applicant = false;
      this.admin = false;
    } else if (this.role.role == "Employeer") {
      this.employer = true;
      this.applicant = false;
      this.admin = false;
      this.student = false;
    } else if (this.role.role == "Jobseeker") {
      this.applicant = true;
      this.admin = false;
      this.student = false;
      this.employer = false;
    } else if (this.role.role == "Admin") {
      this.admin = true;
      this.student = false;
      this.employer = false;
      this.applicant = false;
    } else {
      (this.student = false),
        (this.employer = false),
        (this.applicant = false),
        (this.admin = false);
    }
  },
  computed: {
    isLoggin() {
      return this.$store.state.is_logged;
    },
    MENUS() {
      if (this.$session.exists()) {
        if (this.user.role == "Employeer") {
          return this.employeer_menu;
        } else if (this.user.role == "Student") {
          return this.student_menu;
        } else if (this.user.role == "Jobseeker") {
          return this.seeker_menu;
        }
        return this.admin_menu;
      } else {
        return this.seeker_menu;
      }
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
      //setTimeout(()=>{ location.reload() }, 1000)
    },
    menuItems() {
      return this.menu;
    },
  },
};
</script>
<style>
</style>
 