import type { BaseIdDataEntity } from '@schoolify/core/types/core/api/response'
import { getData, postData } from '@schoolify/core/utilities/api'
import profileAccountManagementEndpoints from '@schoolify/features/user/profile/accountManagement/utilities/api/endpoints'
import type ListSubscriptionsEntity from '@schoolify/features/user/profile/accountManagement/subscription/types/api/ListSubscriptionsEntity'
import type BuySubscriptionsEntitiy from '@schoolify/features/user/profile/accountManagement/subscription/types/api/BuySubscriptionsEntitiy'
import type RenewalSubscriptionEntity from '@schoolify/features/user/profile/accountManagement/subscription/types/api/RenewalSubscriptionEntity'
import type ListUserSubscriptionsEntity from '@schoolify/features/user/profile/accountManagement/subscription/types/api/ListUserSubscriptionsEntity'

export const getListSubscription = async () => {
  return await getData<BaseIdDataEntity<ListSubscriptionsEntity>[]>(
    profileAccountManagementEndpoints.subscription
  )
}

export const postBuySubscriptions = async (data: any) => {
  return await postData<BuySubscriptionsEntitiy>(
    profileAccountManagementEndpoints.buySubscription,
    data
  )
}

export const getListUserSubscription = async () => {
  return await getData<BaseIdDataEntity<ListUserSubscriptionsEntity>[]>(
    profileAccountManagementEndpoints.userSubscription
  )
}

export const postRenewalSubscription = async (
  data: any,
  subscriptionId: string
) => {
  return await postData<RenewalSubscriptionEntity>(
    profileAccountManagementEndpoints.renewalSubscription(subscriptionId),
    data
  )
}
