const eucationYearEndpoints = {
  addEucationYear: '/education-years',
  updateEucationYear: (educationYearId: string) =>
    `/education-years/${educationYearId}`,
  deleteEucationYear: '/education-years',
  listEucationYear: (schoolId: string) => `/schools/${schoolId}/education-years`
}

export default eucationYearEndpoints
