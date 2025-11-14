const schoolManagementEndpoints = {
  listSummarySchool: '/schools/summary',
  SchoolInfo: (schoolId: string) => `/schools/${schoolId}`,
  changeSchoolName: (schoolId: string) => `/schools/${schoolId}`
}

export default schoolManagementEndpoints
