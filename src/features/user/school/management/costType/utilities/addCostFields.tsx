export const addCostFields = [
  {
    name: 'title',
    label: 'عنوان هزینه',
    type: 'text'
  },
  {
    name: 'baseAmount',
    label: 'مبلغ پایه',
    type: 'number'
  },
  {
    name: 'educationYearId',
    label: 'سال تحصیلی',
    type: 'select-api',
    optionsKey: 'educationYearData' // از هوک گرفته می‌شود
  },
  {
    name: 'referenceType',
    label: 'نوع اجرا',
    type: 'select',
    options: [
      { key: 'educationYear', label: 'سال تحصیلی' },
      { key: 'educationLevel', label: 'مقطع تحصیلی' },
      { key: 'educationGrade', label: 'پایه تحصیلی' },
      { key: 'class', label: 'کلاس' },
      { key: 'student', label: 'دانش‌آموز' }
    ]
  },
  {
    name: 'isActive',
    label: 'وضعیت',
    type: 'select',
    options: [
      { key: 'true', value: 'فعال' },
      { key: 'false', value: 'غیرفعال' }
    ]
  }
]
