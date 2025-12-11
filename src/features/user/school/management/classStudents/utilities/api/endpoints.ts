const classStudentsEndpoints = {
  addClasseStudent: (classId: string) => `/classes/${classId}/students`,

  deleteClassStudent: (classId: string) => `/classes/${classId}/students`,

  listSummaryClasses: (educationGradeId: string) =>
    `/education-grades/${educationGradeId}/classes/summary`
}

export default classStudentsEndpoints
