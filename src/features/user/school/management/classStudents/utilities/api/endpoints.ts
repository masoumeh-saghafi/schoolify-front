const classStudentsEndpoints = {
  addClasseStudent: (classId: string) => `/classes/${classId}/students`,

  // deleteClassStudent: '/classes',

  listSummaryClasses: (educationGradeId: string) =>
    `/education-grades/${educationGradeId}/classes/summary`,
};

export default classStudentsEndpoints;
