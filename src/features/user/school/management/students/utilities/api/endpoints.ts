const schoolStudentEndpoints = {
  addStudent: '/students',
  changeStudentInfo: (studentId: string) => `/students/${studentId}`,
  deleteStudent: '/students',
  listStudent:'/schools/student'
}

export default schoolStudentEndpoints
