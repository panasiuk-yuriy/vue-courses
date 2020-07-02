<template>
  <form @submit.prevent="$emit('submit-edit-student',student.id, editName, editEmail, editActive )">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-sm">Name</span>
      </div>
      <input
        type="text"
        v-model="editName"
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
        v-model="editEmail"
        class="form-control"
      />
    </div>
    <div class="input-group mb-3 ">
      <div class="input-group-prepend">
        <label class="input-group-text" for="inputGroupSelect">Status</label>
      </div>
      <select class="custom-select" v-model="editActive">
        <option v-bind:value="true">Active</option>
        <option v-bind:value="false">Not active</option>
      </select>
    </div>
    <button class="btn btn-success btn-sm" type="submit">Change</button>
    <button class="btn btn-warning btn-sm" @click="$emit('close', closeEdit)">Cancel</button>
  </form>
</template>

<script>
export default {
  props: ['student'],

  data: function () {
    return {
      editName: this.student.name,
      editEmail: this.student.email,
      editActive: this.student.active
    }
  },
  methods: {
    closeEdit () {
      this.editName = this.student.name
      this.editEmail = this.student.email
      this.editActive = this.student.active
    }
  }
}
</script>
