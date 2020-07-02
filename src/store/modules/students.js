export default {
  actions: {

  },
  mutations: {
    createStudent (state, newStudent) {
      state.students.push(newStudent)
    },

    editStudent (state, newStudent) {
      state.students = state.students.map(student => {
        if (student.id === newStudent.id) {
          return newStudent
        }
        return student
      })
    },

    deleteStudent (state, studentId) {
      console.log('deleted', studentId)
      state.students = state.students.filter(student => student.id !== studentId)
      console.log(state.students)
    }

  },
  state: {
    students: [
      {
        id: 1,
        name: 'Leanne Graham',
        email: 'Sincere@april.biz',
        active: true
      },
      {
        id: 2,
        name: 'Ervin Howell',
        email: 'Shanna@melissa.tv',
        active: false
      },
      {
        id: 3,
        name: 'Clementine Bauch',
        email: 'Nathan@yesenia.net',
        active: true
      },
      {
        id: 4,
        name: 'Patricia Lebsack',
        email: 'Julianne.OConner@kory.org',
        active: true
      },
      {
        id: 5,
        name: 'Chelsey Dietrich',
        email: 'Lucio_Hettinger@annie.ca',
        active: false
      }]
  },
  getters: {
    allStudents (state) {
      return state.students
    }
  }
}
