export default {
  actions: {

  },
  mutations: {
    createCourse (state, newCourse) {
      state.courses.push(newCourse)
    },

    editCourse (state, newCourse) {
      state.courses = state.courses.map(course => {
        if (course.id === newCourse.id) {
          return newCourse
        }
        return course
      })
    },

    deleteCourse (state, courseId) {
      console.log('deleted', courseId)
      state.courses = state.courses.filter(course => course.id !== courseId)
    }

  },
  state: {
    courses: [
      {
        id: 1,
        code: 'P012345',
        title: 'HTML'
      },
      {
        id: 2,
        code: 'P012314',
        title: 'CSS'
      },
      {
        id: 3,
        code: 'P021312',
        title: 'JavaScript'
      }]
  },
  getters: {
    allCourses (state) {
      return state.courses
    }
  }
}
