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

import UserRoleEndpoints from "@schoolify/features/user/school/management/userRole/utilities/api/endpoints";
import type ListUserRolesEntity from "@schoolify/features/user/school/management/userRole/types/api/ListUserRolesEntity";
import AdminPaymentEndpoints from "./endpoints";
import type listAdminPaymentEntity from "../../types/api/listAdminPaymentEntity";

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

// export const deleteUserRole = async (schoolId: string, phoneNumber: string) => {
//   return await deleteData<void>(
//     UserRoleEndpoints.deleteUserRole(schoolId, phoneNumber)
//   );
// };

export const listAdminPayment = async (
  pagination: BaseRequestPaginationParams,
  filters: Record<string, string>
) => {
  return await getListPaginatedData<BaseIdDataEntity<listAdminPaymentEntity>>(
    AdminPaymentEndpoints.listAdminPayment,
    pagination,
    filters
  );
};
