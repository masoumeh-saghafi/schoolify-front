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

import EducationYearEndpoints from "@schoolify/features/user/school/management/educationYear/utilities/api/endpoints";
import type ListEducationYearEntity from "@schoolify/features/user/school/management/educationYear/types/api/ListEducationYearEntity";

export const addEducationYear = async (data: any) => {
  return await postData<BaseAddResponseEntity>(
    EducationYearEndpoints.addEducationYear,
    data
  );
};

export const updateEducationYear = async (
  data: any,
  educationYearId: string
) => {
  return await patchData<void>(
    EducationYearEndpoints.updateEducationYear(educationYearId),
    data
  );
};

export const deleteEducationYear = async (educationYearId: string) => {
  return await deleteData<void>(
    EducationYearEndpoints.deleteEducationYear,
    educationYearId
  );
};

export const listEducationYear = async (
  schoolId: string,
  pagination: BaseRequestPaginationParams,
  filters: Record<string, string>
) => {
  return await getListPaginatedData<BaseIdDataEntity<ListEducationYearEntity>>(
    EducationYearEndpoints.listEducationYear(schoolId),
    pagination,
    filters
  );
};
