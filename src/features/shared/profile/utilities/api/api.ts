import type { BaseIdDataEntity } from "@schoolify/core/types/core/api/response";
import { getData } from "@schoolify/core/utilities/api";
import profileAccountManagementEndpoints from "@schoolify/features/user/profile/accountManagement/shared/utilities/api/endpoints";
import type UserProfileEntity from "../../types/api/UserProfileEntity";

export const getUserProfile = async () => {
  return await getData<BaseIdDataEntity<UserProfileEntity>>(
    profileAccountManagementEndpoints.profile
  );
};
