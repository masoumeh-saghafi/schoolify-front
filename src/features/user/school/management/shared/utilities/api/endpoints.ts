const schoolManagementEndpoints = {
  listSummarySchool: '/schools/summary',

  schoolInfo: (schoolId: string) => `/schools/${schoolId}`,
  
  changeSchoolName: (schoolId: string) => `/schools/${schoolId}`
}

export default schoolManagementEndpoints
