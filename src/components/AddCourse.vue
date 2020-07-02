<template>
  <form @submit.prevent="onSubmit">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-sm">Title</span>
      </div>
      <input
        type="text"
        v-model="title"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
      />
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-sm">Code</span>
      </div>
      <input
        type="text"
        v-model="code"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
      />
    </div>
    <button type='submit' class="btn btn-success">Create</button>
    <button type="button" class="btn btn-danger" @click="closeModalWindow">Close</button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      title: '',
      code: ''
    }
  },
  methods: {
    ...mapMutations(['createCourse', 'closeModal']),

    onSubmit () {
      this.createCourse({
        title: this.title,
        code: this.code,
        id: Date.now()
      })
      this.closeModal()
      this.title = ''
      this.code = ''
    },

    closeModalWindow () {
      this.closeModal()
      this.title = ''
      this.code = ''
    }
  }
}
</script>
