<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Code</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody v-for="course of allCourses"
      v-bind:key="course.id">
      <Course v-bind:course="course"/>
    </tbody>
  </table>
</template>

<script>

import Course from '../components/Course'
import { mapGetters } from 'vuex'
export default {
  components: {
    Course
  },
  computed: mapGetters(['allCourses'])
}
</script>
