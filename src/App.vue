<template>
  <v-app>
    <core-toolbar />
    <!-- <core-student-toolbar v-if="student"/> -->
    <!-- <core-drawer /> -->
    <core-view />
    <core-footer />
    <v-snackbar
      v-model="showAlert"
      :color="alertColor"
      :timeout="3000"
      :top="'top'"
    >
      <div class="text-center text-h6 mt-1 mb-1">
        {{ alertText }}
      </div>
    </v-snackbar>
  </v-app>
</template>
<script>
export default {
  metaInfo () {
  return {
    title: 'PEESO - ' + this.$route.name!=null?this.$route.name:"Welcome"
  }
},
  data: () => ({
    // student:false
  }),
  computed: {
    showAlert: {
        get () {
          return this.$store.state.show_alert
          },
          set (val) {
            this.setAlert(val)
          }
      },
      alertText() {
        return this.$store.state.alert_text
      },
      alertColor(){
          return this.$store.state.alert_color
      },
  },
  // created(){
  //   console.log("role=",this.$session.user.role)
  //   if(this.$session.user.role == 'Student')
  //     this.student=true
  // },
  mounted () {
    //this.onResponsiveInverted()
    //window.addEventListener('resize', this.onResponsiveInverted)
  }
  
}
</script>
<style>
 /* primary: '#0C8533',
            secondary: '#243C57',
            tertiary: '#495057',
            accent: '#E9D2B6',
            error: '#f55a4e',
            info: '#00d3ee',
            success: '#5cb860',
            warning: '#ffa21a' */
.text-primary {
  color: #0C8533
}
.text-info {
  color: #00d3ee
}
.text-tertiary {
  color: #495057
}
.text-accent {
  color: #E9D2B6
}
.text-error {
  color: #f55a4e
}
.text-success {
  color: #5cb860
}
.text-warning {
  color: #ffa21a
}
</style>