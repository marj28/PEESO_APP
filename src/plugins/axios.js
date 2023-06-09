import Vue from 'vue'
// Lib imports
import axios from 'axios'
var production = true
Vue.prototype.$app_version = localStorage._kake_system_version
Vue.prototype.$app_mode = "Production"
var SERVER = "http://localhost:9181"
if(production) {
  if(Vue.prototype.$app_mode == "Production")
      SERVER = "https://server-dev.newtagum.com"
  else if(Vue.prototype.$app_mode == "Development")
        SERVER = "http://localhost:9181"
}
Vue.prototype.$http = axios.create({
  baseURL: SERVER + '/api/'
})
Vue.prototype.$httplocal = axios.create({
  baseURL: '/'
})

Vue.prototype.$fileserver = SERVER + '/public/'