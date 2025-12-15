import type { BaseIdDataEntity } from "@schoolify/core/types/core/api/response"


export default interface ListSummaryStudentReportEntity {
  firstName: string
  lastName: string
  fatherName: string
  identityCode: string
  createDate: string
  updateDate: string
  identityType: 'iranian' | 'foreigner'
  class: BaseIdDataEntity<ListStudentReportEntityClass>
  debtStatus: ListStudentReportEntityDebtStatus
  payments: BaseIdDataEntity<ListStudentReportEntitypayments>[]
}

export interface ListStudentReportEntityClass {
  title: string
  createDate: string
  updateDate: string
}

export interface ListStudentReportEntityDebtStatus {
  totalPaymentAmount: number
  totalPaymentAmountWithoutDiscount: number
  totalDiscount: number
  totalPayedAmount: number
  totalDebt: number
}
export interface ListStudentReportEntitypayments {
  paymentNumber: string
  amount: number
  paymentDate: string
  createDate: number
  updateDate: string
}
