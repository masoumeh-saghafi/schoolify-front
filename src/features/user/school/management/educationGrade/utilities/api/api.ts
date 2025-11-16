import type { BaseRequestPaginationParams } from "@schoolify/core/types/core/api/request";
import type {
  BaseAddResponseEntity,
  BaseIdDataEntity,
} from "@schoolify/core/types/core/api/response";
import {
  deleteData,
  getListPaginatedData,
  getListSummaryData,
  patchData,
  postData,
} from "@schoolify/core/utilities/api/api";
import type ListSummaryEducationLevelEntity from "../../types/api/ListSummaryEducationLevelEntity";
import type ListEducationGradeEntity from "../../types/api/ListEducationGradeEntity";
import EducationGradeEndpoints from "./endpoints";
export const addEducationGrade = async (data: any) => {
  return await postData<BaseAddResponseEntity>(
    EducationGradeEndpoints.addEducationGrade,
    data
  );
};

export const updateEducationGrade = async (
  data: any,
  educationGradeId: string
) => {
  return await patchData<void>(
    EducationGradeEndpoints.updateEducationGrade(educationGradeId),
    data
  );
};

export const deleteEducationGrade = async (educationGradeId: string) => {
  return await deleteData<void>(
    EducationGradeEndpoints.deleteEducationGrade,
    educationGradeId
  );
};

export const listEducationGrade = async (
  educationYearId: string,
  pagination: BaseRequestPaginationParams,
  filters: Record<string, string>
) => {
  return await getListPaginatedData<BaseIdDataEntity<ListEducationGradeEntity>>(
    EducationGradeEndpoints.listEducationGrade(educationYearId),
    pagination,
    filters
  );
};

export const listSummaryEducationLevel = async (educationYearId: string) => {
  return await getListSummaryData<
    BaseIdDataEntity<ListSummaryEducationLevelEntity>
  >(EducationGradeEndpoints.listSummaryEducationLevel(educationYearId));
};
