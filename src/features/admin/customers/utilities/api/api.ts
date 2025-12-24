import type { BaseRequestPaginationParams } from '@schoolify/core/types/core/api/request'
import type {
  BaseIdDataEntity
} from '@schoolify/core/types/core/api/response'

import {
  getListPaginatedData,
  postData
} from '@schoolify/core/utilities/api/api'

import customerEndpoints from '@schoolify/features/admin/customers/utilities/api/endpoints'
import type ListCustomerEntity from '@schoolify/features/admin/customers/types/api/ListcustomerEntity'
import type GetImpersonateTokenEntity from '@schoolify/features/admin/customers/types/api/GetImpersonateTokenEntity'


export const getImpersonateToken = async (data: any, userId: string) => {
  return await postData<GetImpersonateTokenEntity>(
    customerEndpoints.getImpersonateToken(userId),
    data
  )
}

export const listCustomer = async (
  pagination: BaseRequestPaginationParams,
  filters: Record<string, string>
) => {
  return await getListPaginatedData<BaseIdDataEntity<ListCustomerEntity>>(
    customerEndpoints.listcustomer,
    pagination,
    filters
  )
}
