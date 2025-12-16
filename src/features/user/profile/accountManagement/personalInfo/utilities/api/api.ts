import type { BaseIdDataEntity } from "@schoolify/core/types/core/api/response";
import { getListPaginatedData, getData } from "@schoolify/core/utilities/api";
import profileAccountManagementEndpoints from "@schoolify/features/user/profile/accountManagement/shared/utilities/api/endpoints";
import type ListNotificationsEntity from "@schoolify/features/user/profile/accountManagement/personalInfo/types/api/ListNotificationsEntity";
import type { BaseRequestPaginationParams } from "@schoolify/core/types/core/api/request";

export const listNotification = async (
  pagination: BaseRequestPaginationParams,
  filters: Record<string, string>
) => {
  return await getListPaginatedData<BaseIdDataEntity<ListNotificationsEntity>>(
    profileAccountManagementEndpoints.notification,
    pagination,
    filters
  );
};
