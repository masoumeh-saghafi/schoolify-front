import type { BaseRequestPaginationParams } from "@schoolify/core/types/core/api/request";
import type {
  BaseAddResponseEntity,
  BaseIdDataEntity,
} from "@schoolify/core/types/core/api/response";
import {
  deleteData,
  getAllData,
  patchData,
  postData,
} from "@schoolify/core/utilities/api/api";
import schoolStudentEndpoints from "@schoolify/features/user/school/management/students/utilities/api/endpoints";
import type ListStudentsEntity from "../../types/api/ListStudentsEntity";

export const addStudent = async (data: any) => {
  return await postData<BaseAddResponseEntity>(
    schoolStudentEndpoints.addStudent,
    data
  );
};

export const updateStudent = async (data: any, studentId: string) => {
  return await patchData<void>(
    schoolStudentEndpoints.changeStudentInfo(studentId),
    data
  );
};

export const deleteStudent = async (studentId: string) => {
  return await deleteData<void>(
    schoolStudentEndpoints.deleteStudent,
    studentId
  );
};

export const getListStudent = async (
  schoolId: string,
  pagination: BaseRequestPaginationParams,
  filters: Record<string, string>
) => {
  return await getAllData<BaseIdDataEntity<ListStudentsEntity>>(
    schoolStudentEndpoints.listStudent(schoolId),
    pagination,
    filters
  );
};
