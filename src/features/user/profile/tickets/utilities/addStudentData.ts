interface StudentFormValues {
  firstName: string
  lastName: string
  fatherName: string
  parentPhoneNumber: string
  identityType: 'iranian' | 'foreigner'
  identityCode: string
}

export const addStudentData: {
  name: keyof StudentFormValues
  label: string
}[] = [
  { name: 'firstName', label: 'نام' },
  { name: 'lastName', label: 'نام خانوادگی' },
  { name: 'fatherName', label: 'نام پدر' },
  { name: 'parentPhoneNumber', label: 'شماره موبایل والدین' },
  { name: 'identityCode', label: 'کد ملی' }
]
