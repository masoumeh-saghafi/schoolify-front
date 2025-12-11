const EducationGradeEndpoints = {
  addEducationGrade: '/education-grades',

  updateEducationGrade: (educationGradeId: string) =>
    `/education-grade/${educationGradeId}`,
  
  deleteEducationGrade: '/education-grades',
  
  listEducationGrade: (educationLevelId: string) =>
    `/education-levels/${educationLevelId}/education-grades`,
  
  listSummaryEducationLevel: (educationYearId: string) =>
    `/education-years/${educationYearId}/education-levels/summary`
}

export default EducationGradeEndpoints
