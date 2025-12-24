import type { BaseRequestPaginationParams } from "@schoolify/core/types/core/api/request";
import type {
  BaseIdDataEntity,
} from "@schoolify/core/types/core/api/response";

import {
  getListPaginatedData,
} from "@schoolify/core/utilities/api/api";

import AdminPaymentEndpoints from "@schoolify/features/admin/payments/utilities/api/endpoints";
import type listAdminPaymentEntity from "@schoolify/features/admin/payments/types/api/listAdminPaymentEntity";


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
