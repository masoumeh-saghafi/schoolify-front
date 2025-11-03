import type { BaseIdDataEntity } from "@schoolify/core/types/core/api/response";
import { getData, patchData, postData } from "@schoolify/core/utilities/api";
import profileAccountManagementEndpoints from "@schoolify/features/user/profile/accountManagement/utilities/api/endpoints";
import type ListSubscriptionsEntity from "@schoolify/features/user/profile/accountManagement/subscription/types/api/ListSubscriptionsEntity";
import type BuySubscriptionsEntitiy from "../../types/api/BuySubscriptionsEntitiy";
import type RenewalSubscriptionEntity from "../../types/api/RenewalSubscriptionEntity";

export const getListSubscription = async () => {
  return await getData<BaseIdDataEntity<ListSubscriptionsEntity>[]>(
    profileAccountManagementEndpoints.subscription
  );
};

export const  postBuySubscriptions= async (data: any) => {
  return await postData<BaseIdDataEntity<BuySubscriptionsEntitiy>>(
    profileAccountManagementEndpoints.buySubscription,
    data
  )
}

export const patchRenewalSubscription = async (data: any,subscriptionId: string) => {
  return await postData<BaseIdDataEntity<RenewalSubscriptionEntity>>(
    `${ profileAccountManagementEndpoints.buySubscription }/${subscriptionId}/renewal`,
    data
  )
}
