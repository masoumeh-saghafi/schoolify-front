import type { BaseRequestPaginationParams } from '@schoolify/core/types/core/api/request'
import type {
  BaseAddResponseEntity,
  BaseIdDataEntity
} from '@schoolify/core/types/core/api/response'

import {
  deleteData,
  getData,
  getListPaginatedData,
  patchData,
  postData
} from '@schoolify/core/utilities/api/api'

import UserRoleEndpoints from '@schoolify/features/user/school/management/userRole/utilities/api/endpoints'
import customerEndpoints from './endpoints'
import type ListCustomerEntity from '../../types/api/ListcustomerEntity'
import type GetImpersonateTokenEntity from '../../types/api/GetImpersonateTokenEntity'

// export const addUserRole = async (data: any, schoolId: string) => {
//   return await postData<BaseAddResponseEntity>(
//     UserRoleEndpoints.addUserRole(schoolId),
//     data
//   );
// };

// export const updateUserRole = async (
//   data: any,
//   schoolId: string,
//   phoneNumber: string
// ) => {
//   return await patchData<void>(
//     UserRoleEndpoints.updateUserRole(schoolId, phoneNumber),
//     data
//   );
// };

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
