import type { BaseIdDataEntity } from "@schoolify/core/types/core/api/response"

export default interface ListCostEntity {
  amount: number
  description: string
  referenceRecordId: string
  referenceTitle: string
  costType: BaseIdDataEntity<ListCostEntityCostType>
  createDate: number
  updateDate: number
}

export interface ListCostEntityCostType {
  title: string
  baseAmount: number
  isActive: boolean
  createDate: string
  updateDate: number
  referenceType: number
}
