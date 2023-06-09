<template>
  <v-container class="pa-5 logbox">
    <v-row
      no-gutters
      justify="center"
    >
      <v-col
        sm="5"
      >
        <v-form  
                
          ref="form"
          v-model="valid"
          lazy-validation
          style="width: 320px; margin: auto;"
        >
          <v-card
            style="margin-top: 20%; background: rgba(255,255,255, 0.8)"
            class="pa-2 pt-8"
            flat
          >
            <p class="text-center">
              <img
                :src="$store.state.systemlogo"
                width="120px"
              >
            </p>
            <v-card-text>
              <p class="text-center ">
                CODE WAS EMAILED TO {{ SAVED_EMAIL }}
              </p>
              <v-text-field
                v-model="code"
                class="login-text"
                :rules="nameRules"
                label="Verification code"
                required
                outlined
              />
            </v-card-text>
            <v-card-actions class="pt-1 pb-5">
              <v-btn
                color="success"
                block
                rounded
                large
                :loading="loading"
                @click="validate()"
              >
                CONTINUE 
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
        <v-col class="pt-4 text-center">
          <span>Don't have an account yet?</span> <v-btn
            text
            color="warning"
            @click="$router.push('/register').catch(err => {})"
          >
            Register here <v-icon right>
              mdi-arrow-right-bold-box
            </v-icon>
          </v-btn>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>
  <script>
   import md5 from 'md5'
  import {
    mapMutations
  } from 'vuex'
    export default {
      name:'VerifyAccount',
      data: () => ({
        valid: true,
        loading: false,
        code: '',
        email: "",
        nameRules: [
          v => !!v || 'Enter verification code'
        ],
        password: '',
        snackbar: false,
      }),
      computed:{
         user() {
          if(localStorage.user){
              return JSON.parse(localStorage.user)
          }
          return null
        },
        SAVED_EMAIL() {
          let str = this.email
          let mail = str.split('@')
          str = mail[0]
          let firstTwoChars = str.slice(0, 2); // Get the first two characters
          let replacedString = firstTwoChars + "*".repeat(str.length - 2);
          return replacedString + '@' +mail[1]
        }
      },
      created() {
        // this.PING()
          this.setLoggedIn(false)
          this.email = localStorage._email
        this.setNavBar(false)
      },
      mounted(){
        // if (this.user != null) {
        //   this.setLoggedIn(true)
        //   this.$router.push('/dashboard')
        // } else {
        //   this.CLEAR_SESSION()
        // }
      },
      methods: {
        ...mapMutations(['setAlert', 'setAlertColor', 'setAlertText', 'setLoggedIn', 'setNavBar']),
        
        validate () {
        if (this.$refs.form.validate()) {
         // this.$router.push('/home')
          this.verify()
         }
        },
        verify(){
          this.loading=true
           var param = {
              email: this.email,
              code: this.code
            }
            this.$http.post("user/activate",param).then(response => {
              console.log(response.data)
              response.data.status? this.VA_ALERT('success', response.data.message): this.VA_ALERT('error', response.data.message)
              if(response.data.status) {
              
                setTimeout(()=>{
                  this.$router.push('/login')
                },1000)
              }
            }).catch(e => {
              this.loading = false
                this.NETWORK_ERROR(e)
           })
        },
        autoLogin(){
          var param = {
              username: this.email,
              password: md5(this.code)
            }
            this.$http.post("user/login",param).then(response => {
              console.log(response.data)
            if(response.data.status == true) {
              localStorage.user = JSON.stringify(response.data.account)
              localStorage.token = response.data.account.token
              localStorage.user_role = response.data.account.role
              this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.token
              delete localStorage._email
              delete localStorage._action 
              setTimeout(()=>{
                this.setLoggedIn(true)
                 this.loading = false
                this.$router.push('/login')
              }, 1000)
            } else {
               this.loading = false
             this.VA_ALERT('error', response.data.message)
            }
             
            }).catch(e => {
              this.loading = false
                this.NETWORK_ERROR(e)
           })
        }
      },
    }
  </script>