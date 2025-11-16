import type { BaseRequestPaginationParams } from "@schoolify/core/types/core/api/request";
import type {
  BaseAddResponseEntity,
  BaseIdDataEntity,
} from "@schoolify/core/types/core/api/response";
import {
  deleteData,
  getListPaginatedData,
  patchData,
  postData,
} from "@schoolify/core/utilities/api/api";
import type ListSummaryEducationLevelEntity from "../../types/api/ListSummaryEducationLevelEntity";
import type ListEducationGradeEntity from "../../types/api/ListEucationGradeEntity";
import eucationGradeEndpoints from "./endpoints";
export const addEucationGrade = async (data: any) => {
  return await postData<BaseAddResponseEntity>(
    eucationGradeEndpoints.addEucationGrade,
    data
  );
};

export const updateEucationGrade = async (
  data: any,
  educationGradeId: string
) => {
  return await patchData<void>(
    eucationGradeEndpoints.updateEucationGrade(educationGradeId),
    data
  );
};

export const deleteEducationGrade = async (educationGradeId: string) => {
  return await deleteData<void>(
    eucationGradeEndpoints.deleteEucationGrade,
    educationGradeId
  );
};

export const listEucationGrade = async (
  educationYearId: string,
  pagination: BaseRequestPaginationParams,
  filters: Record<string, string>
) => {
  return await getListPaginatedData<BaseIdDataEntity<ListEducationGradeEntity>>(
    eucationGradeEndpoints.listEucationGrade(educationYearId),
    pagination,
    filters
  );
};

export const listSummaryEducationLevel = async (schoolId: string) => {
  return await getListPaginatedData<
    BaseIdDataEntity<ListSummaryEducationLevelEntity>[]
  >(eucationGradeEndpoints.listSummaryEducationLevel(schoolId));
};
