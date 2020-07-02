export default {
  actions: {

  },
  mutations: {
    filterText (state, text) {
      console.log(text)
    }
  },
  state: {
    inputText: ''
  },

  getters: {
    filterasdText (state) {
      return state.inputText
    }
  }
}
