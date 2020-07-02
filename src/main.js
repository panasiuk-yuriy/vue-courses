import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate () {
    this.$store.commit('initialiseStore')
  }
}).$mount('#app')

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state))
})
