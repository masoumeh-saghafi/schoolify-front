interface StudentUpdateFormValues {
  firstName: string;
  lastName: string;
  fatherName: string;
  parentPhoneNumber: string;
  identityType: "iranian" | "foreigner";
  identityCode: string;
}

export const updateStudentData: {
  name: keyof StudentUpdateFormValues;
  label: string;
}[] = [
  { name: "firstName", label: "نام" },
  { name: "lastName", label: "نام خانوادگی" },
  { name: "fatherName", label: "نام پدر" },
  { name: "parentPhoneNumber", label: "شماره موبایل والدین" },
  { name: "identityCode", label: "کد ملی" },
];
