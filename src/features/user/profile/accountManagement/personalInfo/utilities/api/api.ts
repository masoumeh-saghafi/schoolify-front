import type { BaseIdDataEntity } from "@schoolify/core/types/core/api/response";
import { getAllData, getData } from "@schoolify/core/utilities/api";
import type UserProfileEntity from "@schoolify/features/user/profile/accountManagement/personalInfo/types/api/UserProfileEntity";
import profileAccountManagementEndpoints from "@schoolify/features/user/profile/accountManagement/utilities/api/endpoints";
import type ListNotificationsEntity from "@schoolify/features/user/profile/accountManagement/personalInfo/types/api/ListNotificationsEntity";

export const getUserProfile = async () => {
  return await getData<BaseIdDataEntity<UserProfileEntity>>(
    profileAccountManagementEndpoints.profile
  );
};


export const getListNotification = async (filters: Record<string, string>) => {
  return await getAllData<BaseIdDataEntity<ListNotificationsEntity>>(
    profileAccountManagementEndpoints.notification,
    filters
  )
}
