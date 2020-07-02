<template>
<div>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Status</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody v-for="student in allStudents"
        v-bind:key="student.id">
      <Student v-bind:student="student"/>
    </tbody>
  </table>
  </div>
</template>

<script>
import Student from '../components/Student'
import { mapGetters } from 'vuex'
export default {
  components: {
    Student
  },
  computed: {
    ...mapGetters(['allStudents']),

    filteredStudents () {
      const filtered = this.allStudents.filter(item =>
        (item.name + item.email).toLowerCase().includes(this.text.toLowerCase()))
      return filtered.slice(0, this.selectValue)
    }
  }
}

</script>
