import type { BaseRequestPaginationParams } from '@schoolify/core/types/core/api/request'
import type { BaseIdDataEntity } from '@schoolify/core/types/core/api/response'
import {
  deleteData,
  getAllData,
  patchData,
  postData
} from '@schoolify/core/utilities/api/api'
import type AddStudentEntity from '@schoolify/features/user/school/management/students/types/api/AddStudentEntity'
import schoolStudentEndpoints from '@schoolify/features/user/school/management/students/utilities/api/endpoints'
import type ListStudentsEntity from '../../types/api/ListStudentsEntity'
import profileAccountManagementEndpoints from '@schoolify/features/user/profile/accountManagement/utilities/api/endpoints'

export const postAddStudent = async (data: any) => {
  return await postData<AddStudentEntity>(
    schoolStudentEndpoints.addStudent,
    data
  )
}

export const changeStudentInfo = async (data: any, studentId: string) => {
  return await patchData<BaseIdDataEntity<void>>(
    `${schoolStudentEndpoints.changeStudentInfo}/${studentId}`,
    data
  )
}

export const deleteStudent = async (studentId: string) => {
  try {
    const response = await deleteData<BaseIdDataEntity<void>>(
      schoolStudentEndpoints.deleteStudent,
      studentId
    )

    return response
  } catch (error: any) {
    throw new Error('خطا در حذف دانش‌آموز')
  }
}


export const getListStudent = async (
  pagination: BaseRequestPaginationParams,
  filters: Record<string, string>
) => {
  return await getAllData<BaseIdDataEntity<ListStudentsEntity>>(
   schoolStudentEndpoints.listStudent,
    pagination,
    filters
  );
};
