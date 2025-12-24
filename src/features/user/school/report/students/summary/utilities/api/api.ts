import type {
  BaseIdDataEntity,
} from "@schoolify/core/types/core/api/response";
import {
  getListPaginatedData,
} from "@schoolify/core/utilities/api/api";

import type { BaseRequestPaginationParams } from "@schoolify/core/types/core/api/request";
import type ListSummaryStudentReportEntity from "@schoolify/features/user/school/report/students/summary/types/api/ListSummaryStudentReportEntity";
import listSummaryStudentReportEndpoints from "@schoolify/features/user/school/report/students/summary/utilities/api/endpoints";




export const listSummaryStudentReport = async (
  educationYearId: string,
  pagination: BaseRequestPaginationParams,
  filters: Record<string, string>
) => {
  return await getListPaginatedData<BaseIdDataEntity<ListSummaryStudentReportEntity>>(
    listSummaryStudentReportEndpoints.listSummaryStudentReport(educationYearId),
    pagination,
    filters
  )
}
