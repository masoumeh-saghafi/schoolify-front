import type { BaseRequestPaginationParams } from '@schoolify/core/types/core/api/request'
import type {
  BaseAddResponseEntity,
  BaseIdDataEntity
} from '@schoolify/core/types/core/api/response'

import {
  deleteData,
  getListPaginatedData,
  getListSummaryData,
  patchData,
  postData
} from '@schoolify/core/utilities/api/api'

import classEndpoints from '@schoolify/features/user/school/management/class/utilities/api/endpoints'

import type ListClassEntity from '@schoolify/features/user/school/management/class/types/api/ListClassEntity'
import type ListSummaryEducationGradeEntity from '@schoolify/features/user/school/management/class/types/api/ListSummaryEducationGradeEntity'


export const addClass = async (data: any) => {
  return await postData<BaseAddResponseEntity>(classEndpoints.addClass, data)
}

export const updateClass = async (data: any, classId: string) => {
  return await patchData<void>(classEndpoints.updateClass(classId), data)
}

export const deleteClass = async (classId: string) => {
  return await deleteData<void>(classEndpoints.deleteClass, classId)
}

export const listClass = async (
  educationGradeId: string,
  pagination: BaseRequestPaginationParams,
  filters: Record<string, string>
) => {
  return await getListPaginatedData<BaseIdDataEntity<ListClassEntity>>(
    classEndpoints.listClasses(educationGradeId),
    pagination,
    filters
  )
}

export const listSummaryEducationGrade = async (schoolId: string) => {
  return await getListSummaryData<
    BaseIdDataEntity<ListSummaryEducationGradeEntity>
  >(classEndpoints.listSummaryEducationGrade(schoolId))
}
