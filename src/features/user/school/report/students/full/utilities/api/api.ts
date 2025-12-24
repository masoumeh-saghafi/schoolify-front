import type {
  BaseIdDataEntity,
} from "@schoolify/core/types/core/api/response";
import {
  getData,
  getListPaginatedData,
} from "@schoolify/core/utilities/api/api";
import type { BaseRequestPaginationParams } from "@schoolify/core/types/core/api/request";
import type ListStudentReportEntity from "@schoolify/features/user/school/report/students/full/types/api/ListStudentReportEntity";
import studentReportEndpoints from "@schoolify/features/user/school/report/students/full/utilities/api/endpoints";
import type StudentReportEntity from "@schoolify/features/user/school/report/students/full/types/api/StudentReportEntity";


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
