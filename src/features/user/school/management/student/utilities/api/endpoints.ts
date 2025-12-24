const schoolStudentEndpoints = {
  addStudent: '/students',
 
  changeStudentInfo: (studentId: string) => `/students/${studentId}`,
 
  deleteStudent: '/students',
 
  listStudent: (schoolId: string) => `/schools/${schoolId}/students`
}

export default schoolStudentEndpoints
