const IdentityTypeEnum = {
  IRANIAN: { key: 'iranian', value: 'ایرانی' },
  FOREIGNER: { key: 'foreigner', value: 'اتباع' }
} as const

export const identityTypeOptions = Object.values(IdentityTypeEnum)


export const referenceTypeLabels: Record<string, string> = {
  educationYear: 'سال تحصیلی',
  educationLevel: 'مقطع تحصیلی',
  educationGrade: 'پایه تحصیلی',
  class: 'کلاس',
  student: 'دانش‌آموز'
}
