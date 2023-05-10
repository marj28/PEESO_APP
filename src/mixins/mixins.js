import {
    mapMutations
  } from 'vuex'
export const API_MIXINS = {
    methods: {
        ...mapMutations([
            'setAlert',
            'setAlertColor', 
            'setAlertText', 
            'setLoggedIn'
        ]),
        VA_ALERT(color, message) {
                this.setAlertText(message)
                this.setAlertColor(color)
                this.setAlert(true)
        },
        SYSTEM_UPDATE() {
            this.setRequiredUpdate(false)
            this.$http.get("system_update").then(response => {
              if(response.data.status) {
                  if(!localStorage._kake_system_version) {
                    localStorage._kake_system_version = response.data.system.version
                  } else {
                      if(localStorage._kake_system_version!=response.data.system.version){
                            this.setRequiredUpdate(true)
                      }
                  }
              }
               }).catch(e => {
                console.log(e.data)
            })
        },
          NETWORK_ERROR(e){
            if(e.response == undefined) {
                    this.VA_ALERT('Error', "Server Unreachable!")
            } else {
                this.VA_ALERT('error', "No avaialable this time!")
            }
          },
          PING() {
            this.$http.post("ping", {}, {timeout: 2000}).then(() => {
                this.setIsOnline(true)
               }).catch(e => {
                this.setIsOnline(false)
                this.NETWORK_ERROR(e)
            })
        },
        CLEAR_SESSION() {
            delete localStorage.token
            delete localStorage.user
            delete localStorage.user_role
        },
    } ///eof methods
}