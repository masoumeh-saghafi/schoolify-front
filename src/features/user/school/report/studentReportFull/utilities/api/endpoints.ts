const studentReportEndpoints = {

  listStudentReport: (educationYearId: string) =>
    `/reports/education-years/${educationYearId}/students`,

  getStudentReport: (educationYearId: string, studentId: string) =>
    `/reports/education-years/${educationYearId}/students${studentId}`
}

export default studentReportEndpoints
