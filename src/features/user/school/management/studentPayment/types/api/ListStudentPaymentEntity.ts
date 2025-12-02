import type { BaseIdDataEntity } from '@schoolify/core/types/core/api/response'

export default interface ListStudentPaymentEntity {
  paymentNumber: string
  paymentDate: string
  description: string
  amount: number
  educationYear: BaseIdDataEntity<listEducationYearEntity>
  createDate: number
  updateDate: number
}
interface listEducationYearEntity {
  title: string
  createDate: number
  updateDate: number
}
