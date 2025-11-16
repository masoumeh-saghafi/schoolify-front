const EducationLevelEndpoints = {
  addEducationLevel: "/education-levels",
  updateEducationLevel: (educationLevelId: string) =>
    `/education-levels/${educationLevelId}`,
  deleteEducationLevel: "/education-levels",
  listEducationLevel: (educationYearId: string) =>
    `/education-years/${educationYearId}/education-levels`,
  listSummaryEducationYear: (schoolId: string) =>
    `/schools/${schoolId}/education-years/summary`,
};

export default EducationLevelEndpoints;
