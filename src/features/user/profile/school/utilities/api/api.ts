import type { BaseIdDataEntity } from '@schoolify/core/types/core/api/response'
import { getData } from '@schoolify/core/utilities/api/api'

import schoolManagementEndpoints from '@schoolify/features/user/profile/school/utilities/api/endpoints'
import type ListSummarySchoolsEntity from '@schoolify/features/user/profile/school/types/api/ListSummarySchoolsEntity'

export const getlistSummarySchools = async () => {
  return await getData<BaseIdDataEntity<ListSummarySchoolsEntity>[]>(
    schoolManagementEndpoints.listSchool
  )
}
