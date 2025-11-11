import type { BaseIdDataEntity } from "@schoolify/core/types/core/api/response"

export default interface SchoolInfoEntity {
  title: string
  createDate: number
  updateDate: number
  subscription: BaseIdDataEntity<SchoolSubscriptionEntity>
}
export interface SchoolSubscriptionEntity {
  expireDate: number
  createDate: number
  updateDate: number
}

