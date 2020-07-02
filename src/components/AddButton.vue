<template>
<div class='container'>
  <div class='actions'>
    <button type="button" class="btn btn-success btn-round" @click="handelerClick">+</button>
  </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['openModal']),
    handelerClick () {
      console.log(this.$route.path)
      this.openModal()
    }
  }
}
</script>

<style scoped>
.actions {
  display: flex;
  margin: 1rem 0;
}
.btn-round {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}
</style>
