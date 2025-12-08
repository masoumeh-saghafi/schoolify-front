import type { BaseRequestPaginationParams } from "@schoolify/core/types/core/api/request";
import type {
  BaseAddResponseEntity,
  BaseIdDataEntity,
} from "@schoolify/core/types/core/api/response";
import {
  deleteData,
  getListPaginatedData,
  patchData,
  postData,
} from "@schoolify/core/utilities/api/api";
import UserRoleEndpoints from "./endpoints";
import type ListUserRolesEntity from "../../types/api/ListUserRolesEntity";


export const addUserRole = async (data: any,schoolId:string) => {
  return await postData<BaseAddResponseEntity>(
    UserRoleEndpoints.addUserRole(schoolId),
    data,
  );
};

export const updateUserRole = async (
  data: any,
  schoolId: string,
  phoneNumber: string
) => {
  return await patchData<void>(
    UserRoleEndpoints.updateUserRole(schoolId,phoneNumber),
    data
  );
};

export const deleteUserRole = async (userRoleId: string,schoolId: string, phoneNumber: string) => {
  return await deleteData<void>(
    UserRoleEndpoints.deleteUserRole(schoolId,phoneNumber),
    userRoleId
  );
};

export const listUserRoles = async (
  schoolId: string,
  pagination: BaseRequestPaginationParams,
  filters: Record<string, string>
) => {
  return await getListPaginatedData<BaseIdDataEntity<ListUserRolesEntity>>(
    UserRoleEndpoints.listUserRoles(schoolId),
    pagination,
    filters
  );
};
