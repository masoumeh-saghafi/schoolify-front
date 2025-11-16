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
import EducationLevelEndpoints from "./endpoints";
import type ListEducationLevelEntity from "../../types/api/ListEducationLevelEntity";

export const addEducationLevel = async (data: any) => {
  return await postData<BaseAddResponseEntity>(
    EducationLevelEndpoints.addEducationLevel,
    data
  );
};

export const updateEducationLevel = async (
  data: any,
  educationLevelId: string
) => {
  return await patchData<void>(
    EducationLevelEndpoints.updateEducationLevel(educationLevelId),
    data
  );
};

export const deleteEducationLevel = async (educationLevelId: string) => {
  return await deleteData<void>(
    EducationLevelEndpoints.deleteEducationLevel,
    educationLevelId
  );
};

export const listEducationLevel = async (
  educationYearId: string,
  pagination: BaseRequestPaginationParams,
  filters: Record<string, string>
) => {
  return await getListPaginatedData<BaseIdDataEntity<ListEducationLevelEntity>>(
    EducationLevelEndpoints.listEducationLevel(educationYearId),
    pagination,
    filters
  );
};

export const listSummaryEducationYear = async (schoolId: string) => {
  return await getListSummaryData<BaseIdDataEntity<ListEducationLevelEntity>>(
    EducationLevelEndpoints.listSummaryEducationYear(schoolId)
  );
};
