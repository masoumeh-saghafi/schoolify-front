import type { BaseIdDataEntity } from "@schoolify/core/types/core/api/response"

export default interface listAdminPaymentEntity {
  paymentNumber: number
  amount: number
  user: BaseIdDataEntity<CustomerInfoEntity>
  createDate: number
  updateDate: number
  title: string
  status: string
}

export interface CustomerInfoEntity {
  firstName: string
  lastName: string
  phoneNumber: number
  fullName: string
}
