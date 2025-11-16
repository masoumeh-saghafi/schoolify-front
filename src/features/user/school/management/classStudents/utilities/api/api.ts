import type {
  BaseAddResponseEntity,
  BaseIdDataEntity,
} from "@schoolify/core/types/core/api/response";
import {
  getListPaginatedData,
  postData,
} from "@schoolify/core/utilities/api/api";
// import classStudentEndpoints from './endpoints'
import type ListSummaryEducationGradeEntity from "../../types/api/listSummaryClassesEntity";
import classStudentsEndpoints from "./endpoints";
import type listSummaryClassesEntity from "../../types/api/listSummaryClassesEntity";

export const addClassStudent = async (data: any, classeId: string) => {
  return await postData<BaseAddResponseEntity>(
    classStudentsEndpoints.addClasseStudent(classeId),
    data
  );
};

// export const deleteClassStudent = async (classStudentId: string) => {
//   return await deleteData<void>(classStudentEndpoints.deleteClassStudent, classStudentId)
// }

export const listSummaryClasses = async (educationGradeId: string) => {
  return await getListPaginatedData<
    BaseIdDataEntity<listSummaryClassesEntity>[]
  >(classStudentsEndpoints.listSummaryClasses(educationGradeId));
};
