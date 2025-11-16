 const classStudentsEndpoints = {
 addClasseStudent: (classeId: string) =>
  `/classes/${classeId}/students`,


  // deleteClassStudent: '/classes',
  
  listSummaryClasses: (educationGradeId: string) =>
     `/education-grades/${educationGradeId}/classes/summary`
}

export default classStudentsEndpoints
