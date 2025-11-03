import { patchData } from '@schoolify/core/utilities/api'
import type UserProfileEntity from '@schoolify/features/user/profile/accountManagement/editInfo/types/api/ListSubscriptionsEntity'
import profileAccountManagementEndpoints from '@schoolify/features/user/profile/accountManagement/utilities/api/endpoints'
import type { BaseIdDataEntity } from '@schoolify/core/types/core/api/response'

export const updateUserProfile = async (data: any) => {
  return await patchData<BaseIdDataEntity<UserProfileEntity>>(
    profileAccountManagementEndpoints.profile,
    data
  )
}
