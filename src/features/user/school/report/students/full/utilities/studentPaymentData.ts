import type StudentReportEntity from "../types/api/StudentReportEntity";


export interface StudentPaymentField {
  amount: number
  description: string
  paymentNumber: number | string
  createDate: string | number

}

export const StudentPaymentData = (
  data: StudentReportEntity | null | undefined
): StudentPaymentField[] => {
  if (!data?.payments) return []

  return data.payments.map(payment => ({
    amount: payment.data?.amount ?? 0,
    description: payment.data?.description ?? '',
    paymentNumber: payment.data?.paymentNumber ?? '',
    createDate: payment.data?.createDate ?? ''
  }))
}

export const studentPaymentColumns = [
  { id: 'amount', label: 'مبلغ' },
  { id: 'description', label: 'توضیحات' },
  { id: 'paymentNumber', label: 'شناسه پرداخت' },
  { id: 'createDate', label: 'تاریخ ثبت' }
]
