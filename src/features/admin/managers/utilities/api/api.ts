import type { BaseRequestPaginationParams } from "@schoolify/core/types/core/api/request";
import type {
  BaseAddResponseEntity,
  BaseIdDataEntity,
} from "@schoolify/core/types/core/api/response";

import {
  getListPaginatedData,
  postData,
} from "@schoolify/core/utilities/api/api";

import adminRoleEndpoints from "@schoolify/features/admin/managers/utilities/api/endpoints";
import type ListAdminRolesEntity from "@schoolify/features/admin/managers/types/api/ListAdminRolesEntity";

export const addAdminRole = async (data: any) => {
  return await postData<BaseAddResponseEntity>(
    adminRoleEndpoints.addAdminRole,
    data
  );
};

export const deleteAdminRole = async (userId: string) => {
  return await postData<void>(adminRoleEndpoints.deleteAdminRole(userId), {});
};

export const listAdminRoles = async (
  pagination: BaseRequestPaginationParams,
  filters: Record<string, string>
) => {
  return await getListPaginatedData<BaseIdDataEntity<ListAdminRolesEntity>>(
    adminRoleEndpoints.listAdminRoles,
    pagination,
    filters
  );
};
