import type ListStudentReportEntity from '../types/api/ListStudentReportEntity'
import type StudentReportEntity from '../types/api/StudentReportEntity'
interface StudentDebtField {
  label: string
  value?: string | number | null
}

export const StudentDebtData = (
  data: StudentReportEntity | null | undefined
): StudentDebtField[] => [
  {
    label: 'مبلغ قابل پرداخت بدون احتساب تخفیف',
    value: data?.debtStatus.totalPaymentAmountWithoutDiscount
  },
  {
    label: 'تخفیف',
    value: data?.debtStatus.totalDiscount
  },
  {
    label: 'مبلغ قابل پرداخت',
    value: data?.debtStatus.totalPaymentAmount
  },
  {
    label: 'مبلغ پرداخت شده',
    value: data?.debtStatus.totalPayedAmount
  },
  {
    label: 'مبلغ بدهی (باقیمانده)',
    value: data?.debtStatus.totalDebt
  }
]
