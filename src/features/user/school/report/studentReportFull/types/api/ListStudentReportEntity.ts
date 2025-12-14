import type { BaseIdDataEntity } from "@schoolify/core/types/core/api/response"

export default interface listSummaryClassesEntity {
  title: string
}

export default interface ListStudentReportEntity {
  firstName: string
  lastName: string
  fatherName: string
  identityCode: string
  createDate: string
  updateDate: string
  identityType: 'iranian' | 'foreigner'
  class: BaseIdDataEntity<ListStudentReportEntityClass>
  debtStatus: ListStudentReportEntityDebtStatus
}

export interface ListStudentReportEntityClass {
  title: string
}

export interface ListStudentReportEntityDebtStatus {
  totalPaymentAmount: number
  totalPaymentAmountWithoutDiscount: number
  totalDiscount: number
  totalPayedAmount: number
  totalDebt: number
}
