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
import eucationLevelEndpoints from "./endpoints";
import type ListEducationLevelEntity from "../../types/api/ListEucationLevelEntity";

export const addEucationLevel = async (data: any) => {
  return await postData<BaseAddResponseEntity>(
    eucationLevelEndpoints.addEucationLevel,
    data
  );
};

export const updateEucationLevel = async (
  data: any,
  educationLevelId: string
) => {
  return await patchData<void>(
    eucationLevelEndpoints.updateEucationLevel(educationLevelId),
    data
  );
};

export const deleteEducationLevel = async (educationLevelId: string) => {
  return await deleteData<void>(
    eucationLevelEndpoints.deleteEucationLevel,
    educationLevelId
  );
};

export const listEucationLevel = async (
  educationYearId: string,
  pagination: BaseRequestPaginationParams,
  filters: Record<string, string>
) => {
  return await getListPaginatedData<BaseIdDataEntity<ListEducationLevelEntity>>(
    eucationLevelEndpoints.listEucationLevel(educationYearId),
    pagination,
    filters
  );
};

export const listSummaryEducationYear = async (schoolId: string) => {
  return await getListPaginatedData<BaseIdDataEntity<ListEducationLevelEntity>>(
    eucationLevelEndpoints.listSummaryEducationYear(schoolId)
  );
};
