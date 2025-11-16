const eucationLevelEndpoints = {
  addEucationLevel: '/education-levels',
  updateEucationLevel: (educationLevelId: string) =>
    `/education-levels/${educationLevelId}`,
  deleteEucationLevel: '/education-levels',
  listEucationLevel: (educationYearId: string) =>
    `/education-years/${educationYearId}/education-levels`,
  listSummaryEducationYear: (schoolId: string) =>
    `/schools/${schoolId}/education-years/summary`
}

export default eucationLevelEndpoints
