<template>
  <tr>
    <td>
      {{course.title}}
    </td>
    <td>
      {{course.code}}
    </td>
    <td>
      <button type="button" class="btn btn-warning btn-sm" @click="isEditing = true">Edit</button>
      <button type="button" class="btn btn-danger btn-sm" @click='handeleDelete(course.id)'>Delete</button>
      <EditModal
        v-show="isEditing"
        v-bind:course="course"
        @close-edit="closeEdit"
        @submit-edit="sumbitEdit">
        Edit course
      </EditModal>
    </td>
  </tr>

</template>

<script>
import { mapMutations } from 'vuex'
import EditModal from '../views/EditModal'
export default {
  props: {
    course: {
      type: Object
    }
  },
  components: {
    EditModal
  },

  data: function () {
    return {
      isEditing: false
    }
  },

  methods: {
    ...mapMutations(['deleteCourse', 'editCourse']),

    handeleDelete (courseId) {
      this.deleteCourse(courseId)
    },

    sumbitEdit (id, title, code) {
      this.editCourse({
        title,
        code,
        id
      })
      this.isEditing = false
    },
    closeEdit (edit) {
      this.isEditing = false
      edit()
    }
  }
}
</script>

<style>
.view {
  border-color: transparent;
  background-color: initial;
  color: initial
}
</style>
