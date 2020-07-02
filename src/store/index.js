import Vue from 'vue'
import Vuex from 'vuex'
import courses from './modules/courses'
import modal from './modules/modal'
import students from './modules/students'
import filter from './modules/filter'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    courses, modal, students, filter
  },
  mutations: {
    initialiseStore (state) {
      if (localStorage.getItem('store')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store')))
        )
      }
    }
  }
})
