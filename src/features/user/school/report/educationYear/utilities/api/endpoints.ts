const EducationYearEndpoints = {
  addEducationYear: "/education-years",
  updateEducationYear: (educationYearId: string) =>
    `/education-years/${educationYearId}`,
  deleteEducationYear: "/education-years",
  listEducationYear: (schoolId: string) =>
    `/schools/${schoolId}/education-years`,
};

export default EducationYearEndpoints;
