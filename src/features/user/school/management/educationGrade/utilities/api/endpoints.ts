 const eucationGradeEndpoints = {
  addEucationGrade: '/education-grades',
  updateEucationGrade: (educationGradeId: string) =>
    `/education-grade/${educationGradeId}`,
  deleteEucationGrade: '/education-grades',
  listEucationGrade: (educationLevelId: string) =>
    `/education-levels/${educationLevelId}/education-grades`,
  listSummaryEducationLevel: (educationYearId: string) =>
    `/education-years/${educationYearId}/education-levels/summary`
}

export default eucationGradeEndpoints
