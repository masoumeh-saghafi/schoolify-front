import type {
  BaseAddResponseEntity,
  BaseIdDataEntity,
} from "@schoolify/core/types/core/api/response";
import {
  deleteWithQueryParams,
  getData,
  getListPaginatedData,
  getListSummaryData,
  postData,
} from "@schoolify/core/utilities/api/api";
import classStudentsEndpoints from "./endpoints";
import type listSummaryClassesEntity from "@schoolify/features/user/school/management/classStudents/types/api/listSummaryClassesEntity";
import type { BaseRequestPaginationParams } from "@schoolify/core/types/core/api/request";
import type ListStudentReportEntity from "../../types/api/ListStudentReportEntity";
import studentReportEndpoints from "./endpoints";
import type StudentReportEntity from "../../types/api/StudentReportEntity";

// export const addClassStudent = async (studentId: string, classId: string) => {
//   return await postData<BaseAddResponseEntity>(
//     classStudentsEndpoints.addClasseStudent(classId),
//     {
//       studentIds: [studentId],
//     }
//   );
// };

// export const deleteClassStudent = async (
//   classId: string,
//   studentId: string
// ) => {
//   return await deleteWithQueryParams<void>(
//     classStudentsEndpoints.deleteClassStudent(classId),
//     "studentIds",
//     [studentId]
//   );
// };

// export const listSummaryClasses = async (educationGradeId: string) => {
//   return await getListSummaryData<BaseIdDataEntity<listSummaryClassesEntity>>(
//     classStudentsEndpoints.listSummaryClasses(educationGradeId)
//   );
// };



export const listStudentReport = async (
  educationYearId: string,
  pagination: BaseRequestPaginationParams,
  filters: Record<string, string>
) => {
  return await getListPaginatedData<BaseIdDataEntity<ListStudentReportEntity>>(
    studentReportEndpoints.listStudentReport(educationYearId),
    pagination,
    filters
  )
}

export const getStudentReport = async (educationYearId: string,studentId: string) => {
  return await getData<BaseIdDataEntity<StudentReportEntity>>(
    studentReportEndpoints.getStudentReport(educationYearId,studentId)
  );
};
