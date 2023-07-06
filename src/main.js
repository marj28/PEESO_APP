import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
//Plugins
import './plugins'
import './components'
// import Swiper from 'swiper';
// import 'swiper/css';

import router from '@/router'
import store from '@/store'
import { API_MIXINS } from '@/mixins/mixins.js'
import VueSession from 'vue-session'
Vue.use(require('vue-moment'))
Vue.use(VueSession)
Vue.mixin(API_MIXINS)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store, 
  render: h => h(App)
}).$mount('#app')
