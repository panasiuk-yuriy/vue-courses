<template>
  <form @submit.prevent="$emit('submit-edit', course.id, editText, editCode)">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-sm">Title</span>
      </div>
      <input
        type="text"
        v-model="editText"
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
        v-model="editCode"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
      />
    </div>
    <button class="btn btn-success btn-sm" type="submit">Change</button>
    <button class="btn btn-warning btn-sm" @click="$emit('close', closeEdit)">Cancel</button>
  </form>
</template>

<script>
export default {
  props: ['course'],

  data: function () {
    return {
      editText: this.course.title,
      editCode: this.course.code
    }
  },
  methods: {
    closeEdit () {
      this.editText = this.course.title
      this.editCode = this.course.code
    }
  }
}
</script>
