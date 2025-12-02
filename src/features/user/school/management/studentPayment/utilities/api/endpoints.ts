const studentPaymentEndpoints = {
  addStudentPayment: "/student-payments",
  updateStudentPayment: (studentPaymentId: string) => `/student-payments/${studentPaymentId}`,
  deleteStudentPayment: "/student-payments",
  listStudentPayment: (studentId: string) =>
    `/students/${studentId}/student-payments`,

};

export default studentPaymentEndpoints;
