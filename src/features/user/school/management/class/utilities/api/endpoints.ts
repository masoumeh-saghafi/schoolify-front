const classEndpoints = {
  addClass: '/classes',

  updateClass: (classId: string) => `/classes/${classId}`,

  deleteClass: '/classes',

  listClasses: (educationGradeId: string) =>
    `/education-grades/${educationGradeId}/classes`,

  listSummaryEducationGrade: (educationLevelId: string) =>
    `/education-levels/${educationLevelId}/education-grades/summary`
}

export default classEndpoints
