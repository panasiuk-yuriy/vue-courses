export default {
  actions: {

  },
  mutations: {
    openModal (state) {
      state.isVisibleModal = true
    },

    openEditModal (state) {
      state.isVisibleEditModal = true
    },

    closeModal (state) {
      state.isVisibleModal = false
    },

    closeEditModal (state) {
      state.isVisibleEditModal = false
    }
  },
  state: {
    isVisibleModal: false,
    isVisibleEditModal: false
  },

  getters: {
    isModalVisible (state) {
      return state.isVisibleModal
    },
    isEditVisible (state) {
      return state.isVisibleEditModal
    }
  }
}
