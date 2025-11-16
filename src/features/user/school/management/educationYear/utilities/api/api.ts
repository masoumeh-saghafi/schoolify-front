import type { BaseRequestPaginationParams } from '@schoolify/core/types/core/api/request'
import type {
  BaseAddResponseEntity,
  BaseIdDataEntity
} from '@schoolify/core/types/core/api/response'
import {
  deleteData,
  getAllData,
  patchData,
  postData
} from '@schoolify/core/utilities/api/api'

import eucationYearEndpoints from '@schoolify/features/user/school/management/educationYear/utilities/api/endpoints'
import type ListEucationYearEntity from '@schoolify/features/user/school/management/educationYear/types/api/ListEucationYearEntity'

export const addEucationYear = async (data: any) => {
  return await postData<BaseAddResponseEntity>(
    eucationYearEndpoints.addEucationYear,
    data
  )
}

export const updateEucationYear = async (
  data: any,
  educationYearId: string
) => {
  return await patchData<void>(
    eucationYearEndpoints.updateEucationYear(educationYearId),
    data
  )
}

export const deleteEucationYear = async (educationYearId: string) => {
  return await deleteData<void>(
    eucationYearEndpoints.deleteEucationYear,
    educationYearId
  )
}

export const listEucationYear = async (
  schoolId: string,
  pagination: BaseRequestPaginationParams,
  filters: Record<string, string>
) => {
  return await getAllData<BaseIdDataEntity<ListEucationYearEntity>>(
    eucationYearEndpoints.listEucationYear(schoolId),
    pagination,
    filters
  )
}
