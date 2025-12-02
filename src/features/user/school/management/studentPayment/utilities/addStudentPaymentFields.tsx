export const addStudentPaymentFields = [
  {
    name: 'educationYearId',
    label: 'سال تحصیلی',
    type: 'select-api',
    optionsKey: 'educationYearData'
  },
  { name: 'description', label: 'توضیحات', type: 'text' },
  { name: 'amount', label: 'مبلغ پرداختی', type: 'number' },
  { name: 'paymentNumber', label: 'شماره پرداخت', type: 'number' },
  { name: 'paymentDate', label: 'تاریخ', type: 'date' }
]
