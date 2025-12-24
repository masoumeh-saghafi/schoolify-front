import type { BaseIdDataEntity } from '@schoolify/core/types/core/api/response'
import type {
  ListStudentReportEntityClass,
  ListStudentReportEntityDebtStatus
} from '@schoolify/features/user/school/report/students/full/types/api/ListStudentReportEntity'
import type ListCostEntity from '@schoolify/features/user/school/management/cost/types/api/ListCostEntity'
import type ListStudentPaymentEntity from '@schoolify/features/user/school/management/studentPayment/types/api/ListStudentPaymentEntity'

export default interface StudentReportEntity {
  firstName: string
  lastName: string
  fatherName: string
  identityCode: string
  parentPhoneNumber: string
  createDate: string
  updateDate: string
  identityType: 'iranian' | 'foreigner'
  class: BaseIdDataEntity<ListStudentReportEntityClass>
  debtStatus: ListStudentReportEntityDebtStatus
  costs: BaseIdDataEntity<ListCostEntity>[]
  payments: BaseIdDataEntity<ListStudentPaymentEntity>[]
}
