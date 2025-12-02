import type { BaseRequestPaginationParams } from '@schoolify/core/types/core/api/request'
import type {
  BaseAddResponseEntity,
  BaseIdDataEntity
} from '@schoolify/core/types/core/api/response'
import {
  deleteData,
  getListPaginatedData,
  patchData,
  postData
} from '@schoolify/core/utilities/api/api'
import studentPaymentEndpoints from '@schoolify/features/user/school/management/studentPayment/utilities/api/endpoints'
import type ListStudentPaymentEntity from '@schoolify/features/user/school/management/studentPayment/types/api/ListStudentPaymentEntity'


export const addStudentPayment = async (data: any) => {
  return await postData<BaseAddResponseEntity>(
    studentPaymentEndpoints.addStudentPayment,
    data
  )
}

export const updateStudentPayment = async (
  data: any,
  studentPaymentId: string
) => {
  return await patchData<void>(
    studentPaymentEndpoints.updateStudentPayment(studentPaymentId),
    data
  )
}

export const deleteStudentPayment = async (studentPaymentId: string) => {
  return await deleteData<void>(
    studentPaymentEndpoints.deleteStudentPayment,
    studentPaymentId
  )
}

export const listStudentPayment = async (
  studentId: string,
  pagination: BaseRequestPaginationParams,
  filters: Record<string, string>
) => {
  return await getListPaginatedData<BaseIdDataEntity<ListStudentPaymentEntity>>(
    studentPaymentEndpoints.listStudentPayment(studentId),
    pagination,
    filters
  )
}

