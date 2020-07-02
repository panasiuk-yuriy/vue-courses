<template>
  <form @submit.prevent="onSubmit">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-sm">Name</span>
      </div>
      <input
        type="text"
        v-model="name"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
      />
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-sm">Email</span>
      </div>
      <input
        type="text"
        v-model="email"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
      />
    </div>
    <div class="input-group mb-3 ">
      <div class="input-group-prepend">
        <label class="input-group-text" for="inputGroupSelect01">Status</label>
      </div>
      <select v-model="active" class="custom-select" id="inputGroupSelect01">
        <option v-bind:value="true">Active</option>
        <option v-bind:value="false">Not active</option>
      </select>
    </div>
    <button type='submit' class="btn btn-success" @click="$emit('close-modal')">Create</button>
    <button type="button" class="btn btn-danger" @click="closeModalWindow">Close</button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      name: '',
      email: '',
      active: true
    }
  },
  methods: {
    ...mapMutations(['createStudent', 'closeModal']),
    onSubmit () {
      this.createStudent({
        name: this.name,
        email: this.email,
        active: this.active,
        id: Date.now()
      })
      this.closeModal()
      this.name = ''
      this.email = ''
      this.active = true
    },

    closeModalWindow () {
      this.closeModal()
      this.name = ''
      this.email = ''
      this.active = true
    }
  }
}
</script>
