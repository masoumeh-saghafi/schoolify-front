interface StudentPaymentUpdateFormValues {
  description: string
  amount: number
  paymentNumber: string
}

export const updateStudentPaymentData: {
  name: keyof StudentPaymentUpdateFormValues
  label: string
}[] = [
  { name: 'amount', label: 'مبلغ' },
  { name: 'description', label: 'توضیحات ' },
  { name: 'paymentNumber', label: 'شماره پرداخت ' }
]
