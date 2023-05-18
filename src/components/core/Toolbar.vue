<template>
  <div>
    <v-toolbar dense elevation="1">
      <img :src="$store.state.systemlogo" class="mr-2" width="40px">
      <v-btn text tile @click="$router.push('/home').catch(err => { })">
        Home
      </v-btn>
      <v-btn text tile>
        What is PEESO?
      </v-btn>
      <v-btn text tile @click="$router.push('/home').catch(err => { })">
        Company Profiles
      </v-btn>
      <v-btn text tile @click="$router.push('/home').catch(err => { })">
        Contact Us
      </v-btn>

      <v-spacer />
      <template v-if="isLoggin">
        <v-menu offset-y>
          <template #activator="{ on, attrs }">
            <span class="caption text-primary" v-bind="attrs" v-on="on"><v-icon left>mdi-account-circle</v-icon> My
              Account</span>
          </template>
          <v-list dense>
            <template v-for="(menu, index) in MENUS">
              <v-list-item :key="index" @click="$router.push(menu.route).catch(err => { })">
                <v-list-item-title>
                  <v-icon left>
                    {{ menu.icon }}
                  </v-icon> {{ menu.label }}
                </v-list-item-title>
              </v-list-item>
              <!-- <v-divider /> -->
            </template>
            <v-list-item @click="confirm = true" color="warning">
              <v-list-item-title>
                <v-icon left color="error">
                  mdi-power
                </v-icon>Logout
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
      <template v-else>
        <v-btn small text class="caption text-primary" color="warning"
          @click="$router.push('/register').catch(err => { })">
          Create an Account
        </v-btn>
        <v-divider vertical inset />
        <v-btn small text class="caption text-primary" color="success" @click="$router.push('/login').catch(err => { })">
          LOGIN
        </v-btn>
      </template>
      <v-dialog v-model="confirm" persistent max-width="290">
        <v-card color="#232323" dark>
          <v-card-text class="pt-5">
            Continue log out?
          </v-card-text>
          <v-card-actions>
            <v-btn color="warning darken-1" text @click="confirm = false">
              Cancel
            </v-btn>
            <v-spacer />
            <v-btn color="green darken-1" text @click="confirm = false, logout()">
              Yes
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
  </div>
</template>

<script>
import {
  mapMutations
} from 'vuex'
export default {
  data: () => ({
    confirm: false,
    title: null,
    seeker_menu: [
      {
        label: 'My Account', icon: 'mdi-card-account-details', route: '/profile',
      },
      // {
      //   label: 'PDS', icon: 'mdi-text-box-check', route: '/job-post',
      // }
    ],
    employeer_menu: [
      {
        label: 'My Company', icon: 'mdi-card-account-details', route: '/company-select',
      },
      {
        label: 'Jobs', icon: 'mdi-account-hard-hat', route: '/job-post',
      },
      {
        label: 'Trainings', icon: 'mdi-forum', route: '/training-post',
      },
      {
        label: 'Programs', icon: 'mdi-note-plus', route: '/program-post',
      }
    ]
  }),

  computed: {
    isLoggin() {
      return this.$store.state.is_logged
    },
    MENUS() {
      if (this.user.role == "Employeer") {
        return this.employeer_menu
      }
      return this.seeker_menu
    },
    currentRouteName() {
      return this.$route.name;
    },
    user() {
      if (this.$session.get('user')) {
        return this.$session.get('user')
      }
      return null
    }
  },
  methods: {
    ...mapMutations(['setNavBar', "setOpenMachine", "setLoggedIn"]),
    togleDrawer() {
      this.setDrawer(true)
    },
    logout() {
      this.setLoggedIn(false)
      this.setNavBar(false)
      sessionStorage.clear()
      this.$router.push("home")
      //setTimeout(()=>{ location.reload() }, 1000)
    }
  }
}
</script>
 