<template>
  <div id="app">
    <Navigation />
    <AddButton v-show="this.$route.path !== '/'"/>
    <router-view/>
    <ModalWindow v-show="isModalVisible" @close-modal="handleCloseModal" />
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import AddButton from './components/AddButton'
import ModalWindow from './views/ModalWindow'
import { mapGetters, mapMutations } from 'vuex'
export default {
  components: {
    Navigation, AddButton, ModalWindow
  },
  computed: mapGetters(['isModalVisible']),

  methods: {
    ...mapMutations(['closeModal']),
    handleCloseModal () {
      this.closeModal()
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.btn {
  margin: 0.2rem;
}
</style>
