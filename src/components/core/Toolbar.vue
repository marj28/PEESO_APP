<template>
  <div v-if="currentRouteName !=='Login' && currentRouteName !=='Register'">
    <core-student-toolbar v-if= "currentuser === 'Student'" />
    <core-employer-toolbar v-if="currentuser === 'Employeer'" />
    <core-applicant-toolbar v-if="currentuser === 'Jobseeker'" />
    <core-admin-toolbar v-if="currentuser === 'Admin'" />
    <core-applicant-toolbar v-if="currentuser === 'Jobseekers'" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data: () => ({
    // student: false,
    // employer: user.role,
    // applicant: false,
    // admin: false,
    confirm: false,
    listing: false,
    role:[]
    // title: null,
  }),
  created() {
    // console.log("role=",this.$session.user.role)
    // if (this.user.role == "Student") {
    //   this.student = true;
    // } else if (this.user.role == "Employeer") {
    //   this.employer = true;
    // } else if (this.user.role == "Jobseeker") {
    //   this.applicant = true;
    // } else if (this.user.role == "Admin") {
    //   this.admin = true;
    // } else {
    //   (this.student = false),
    //     (this.employer = false),
    //     (this.applicant = false),
    //     (this.admin = false);
    // }
    
  },
  computed: {
    isLoggin() {
      return this.$store.state.is_logged;
    },
    currentuser(){
      // if (this.user.role == "Employeer") {
      //     return this.employeer_menu;
      //   } else if (this.user.role == "Student") {
      //     return this.student_menu;
      //   } else if (this.user.role == "Jobseeker") {
      //     return this.seeker_menu;
      //   }
        if(this.user == null){
          return "Jobseekers"
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
