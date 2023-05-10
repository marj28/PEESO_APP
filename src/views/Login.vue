<template>
  <v-container class="pa-5 logbox">
    <v-row
      no-gutters
      justify="center"
    >
      <v-col
        sm="8"
      >
        <v-form  
                
          ref="form"
          v-model="valid"
          lazy-validation
          style="width: 420px; margin: auto;"
        >
          <v-card
            style="margin-top: 20%; background: rgba(255,255,255, 0.8)"
            class="pa-2 pt-8"
            flat
          >
            <p class="text-center">
              <img
                :src="$store.state.systemlogo"
                width="140px"
              >
            </p>
            <v-card-text>
              <v-text-field
                v-model="username"
                :rules="nameRules"
                label="Enter Email"
                class="login-text"
                required
                outlined
              />
                     
              <v-text-field
                v-model="password"
                class="login-text"
                :rules="nameRules"
                label="Password"
                type="password"
                required
                outlined
                @keyup.enter="validate()"
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
                LOGIN 
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
        <v-col class="pt-4 text-center">
          <span>Don't have account yet?</span> <v-btn
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
      data: () => ({
        valid: true,
        loading: false,
        username: '',
        nameRules: [
          v => !!v || 'Field is required'
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
        }
      },
      created() {
        // this.PING()
   
      if (this.$session.exists()) {
          this.setLoggedIn(false)
          this.$session.destroy()
      }
 
      // this.setLoggedIn(false)
      // this.setNavBar(false)
      },
      mounted(){
        if (this.user != null) {
          this.setLoggedIn(true)
          this.$router.push('/home')
        } else {
          this.CLEAR_SESSION()
        }
      },
      methods: {
        ...mapMutations(['setAlert', 'setAlertColor', 'setAlertText', 'setLoggedIn', 'setNavBar']),
        
        validate () {
        if (this.$refs.form.validate()) {
         // this.$router.push('/home')
           this.login()
         }
        },
        login(){
          this.loading=true
           var param = {
              Username: this.username,
              Password: md5(this.password)
            }
            this.$http.post("user/login",param).then(response => {
              console.log(response.data.status)
            if(response.data.status == true) {
                this.$session.start()
              this.$session.set('jwt', response.data.account.token)
              this.$session.set('user', response.data.account)
              setTimeout(()=>{
                this.setLoggedIn(true)
                 
                 if( response.data.account.role == "Employeer") {
                    this.$router.push("employeer")
                    //setTimeout(()=>{ location.reload() }, 1000)
                   
                 } else {
                  this.$router.push("home")
                 }
                
              }, 1000)
            } else {
               this.loading = false
             this.VA_ALERT('error', response.data.message)
            }
             
            }).catch(e => {
              this.loading = false
              console.log(e)
                this.NETWORK_ERROR(e)
           })
          
            
        }
      },
    }
  </script>