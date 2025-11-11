const schoolInformationEndpoints = {
  SchoolInfo: (schoolId: string) => `/schools/${schoolId}`,
  changeSchoolName: (schoolId: string) => `/schools/${schoolId}`
}

export default schoolInformationEndpoints

