import type {
  BaseAddResponseEntity,
  BaseIdDataEntity
} from '@schoolify/core/types/core/api/response'
import {
  deleteData,
  getListPaginatedData,
  getListSummaryData,
  patchData,
  postData
} from '@schoolify/core/utilities/api/api'
import costEndpoints from './endpoints'
import type { BaseRequestPaginationParams } from '@schoolify/core/types/core/api/request'
import type ListCostEntity from '../../types/api/ListCostEntity'
import type ListSummaryCostTypesEntity from '../../../costType/types/api/ListSummaryCostTypesEntity'

export const addCost = async (data: any) => {
  return await postData<BaseAddResponseEntity>(costEndpoints.addCost, data)
}

export const updateCost = async (data: any, costId: string) => {
  return await patchData<void>(costEndpoints.updateCost(costId), data)
}

export const deleteCost = async (costId: string) => {
  return await deleteData<void>(costEndpoints.deleteCost, costId)
}

export const listCost = async (
  educationYearId: string,
  pagination: BaseRequestPaginationParams,
  filters: Record<string, string>
) => {
  return await getListPaginatedData<BaseIdDataEntity<ListCostEntity>>(
    costEndpoints.listCost(educationYearId),
    pagination,
    filters
  )
}

export const listSummaryCostType = async (educationYearId: string) => {
  return await getListSummaryData<BaseIdDataEntity<ListSummaryCostTypesEntity>>(
    costEndpoints.listSummaryCostType(educationYearId)
  )
}
