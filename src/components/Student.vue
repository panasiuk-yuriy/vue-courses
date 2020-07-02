<template>
  <tr>
    <td>
      {{student.name}}
    </td>
    <td>
      {{student.email}}
    </td>
    <td>
      <p :class="{active_student: student.active, not_active: !student.active}">{{student.active ? 'Active' : "Not active"}}</p>
    </td>
    <td>
      <button type="button" class="btn btn-warning btn-sm" @click="isEditing = true">Edit</button>
      <button type="button" class="btn btn-danger btn-sm" @click='handeleDelete(student.id)'>Delete</button>
    </td>
    <EditModal
        v-show="isEditing"
        v-bind:student="student"
        @close-edit="closeEdit"
        @submit-edit="submitEditing">
          Edit student
      </EditModal>
  </tr>

</template>

<script>
import { mapMutations } from 'vuex'
import EditModal from '../views/EditModal'
export default {
  props: {
    student: {
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
    ...mapMutations(['deleteStudent', 'editStudent']),
    handeleDelete (studetId) {
      this.deleteStudent(studetId)
    },

    closeEdit (edit) {
      this.isEditing = false
      edit()
    },

    submitEditing (id, name, email, active) {
      this.editStudent({
        name,
        email,
        active,
        id
      })
      this.isEditing = false
    }
  }
}
</script>

<style>
.active_student{
  color: #28a745
}

.not_active {
  color:#dc3545
}
.view {
  border-color: transparent;
  background-color: initial;
  color: initial
}
</style>
