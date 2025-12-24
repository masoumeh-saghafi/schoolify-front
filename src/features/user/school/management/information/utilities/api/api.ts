import type { BaseIdDataEntity } from '@schoolify/core/types/core/api/response'
import { getData, patchData } from '@schoolify/core/utilities/api/api'
import type SchoolInfoEntity from '@schoolify/features/user/school/management/information/types/api/SchoolInfoEntity'
import schoolInformationEndpoints from '@schoolify/features/user/school/management/information/utilities/api/endpoints'

export const getSchoolInfo = async (schoolId: string) => {
  return await getData<BaseIdDataEntity<SchoolInfoEntity>>(
    schoolInformationEndpoints.schoolInfo(schoolId)
  )
}

export const updateSchoolName = async (data: any, schoolId: string) => {
  return await patchData<BaseIdDataEntity<void>>(
    schoolInformationEndpoints.changeSchoolName(schoolId),
    data
  )
}
