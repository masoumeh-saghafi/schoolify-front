import type { BaseRequestPaginationParams } from '@schoolify/core/types/core/api/request'
import type {
  BaseAddResponseEntity,
  BaseIdDataEntity
} from '@schoolify/core/types/core/api/response'

import {
  deleteData,
  getListPaginatedData,
  postData
} from '@schoolify/core/utilities/api/api'

import adminRoleEndpoints from './endpoints'
import type ListAdminRolesEntity from '../../types/api/ListAdminRolesEntity'

export const addAdminRole = async (data: any) => {
  return await postData<BaseAddResponseEntity>(
    adminRoleEndpoints.addAdminRole,
    data
  )
}


export const deleteAdminRole = async (
  schoolId: string,

) => {
  return await deleteData<void>(
    adminRoleEndpoints.deleteAdminRole(schoolId)
  )
}

export const listAdminRoles = async (

  pagination: BaseRequestPaginationParams,
  filters: Record<string, string>
) => {
  return await getListPaginatedData<BaseIdDataEntity<ListAdminRolesEntity>>(
    adminRoleEndpoints.listAdminRoles,
    pagination,
    filters
  )
}
