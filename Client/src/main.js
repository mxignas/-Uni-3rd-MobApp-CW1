// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//importing router
import router from './router'
//importiing store
import {store} from './store'
// importing vue
import Vuelidate from 'vuelidate'

// using vuelidate
Vue.use(Vuelidate)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
