import { patchData } from '@schoolify/core/utilities/api'
import profileAccountManagementEndpoints from '@schoolify/features/user/profile/accountManagement/shared/utilities/api/endpoints'
import type { BaseIdDataEntity } from '@schoolify/core/types/core/api/response'
import type updateUserProfileEntity from '@schoolify/features/user/profile/accountManagement/editInfo/types/api/updateUserProfileEntity'

export const updateUserProfile = async (data: any) => {
  return await patchData<BaseIdDataEntity<updateUserProfileEntity>>(
    profileAccountManagementEndpoints.profile,
    data
  )
}
