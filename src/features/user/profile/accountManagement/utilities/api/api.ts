import { patchData, getData } from "@schoolify/core/utilities/api";
import type UserProfileEntity from "../../types/api/UserProfileEntity";
import profileAccountManagementEndpoints from "./endpoints";
import type { BaseIdDataEntity } from "@schoolify/core/types/core/api/response";
import type ListSubscriptionsEntity from "../../types/api/ListSubscriptionsEntity";

export const getUserProfile = async () => {
  return await getData<BaseIdDataEntity<UserProfileEntity>>(
    profileAccountManagementEndpoints.profile
  );
};

export const updateUserProfile = async (data: any) => {
  return await patchData<BaseIdDataEntity<UserProfileEntity>>(
    profileAccountManagementEndpoints.profile,
    data
  );
};



export const getListSubscription = async (data: any) => {
  return await getData<BaseIdDataEntity<ListSubscriptionsEntity>>(
    profileAccountManagementEndpoints.subscription,
  
  )
}
