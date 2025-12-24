import type { BaseIdDataEntity } from "@schoolify/core/types/core/api/response";
import { getData } from "@schoolify/core/utilities/api/api";
import type ListSummarySchoolsEntity from "@schoolify/features/user/school/report/shared/types/api/ListSummarySchoolsEntity";
import schoolManagementEndpoints from "@schoolify/features/user/school/report/shared/utilities/api/endpoints";

export const listSummarySchools = async () => {
  return await getData<BaseIdDataEntity<ListSummarySchoolsEntity>[]>(
    schoolManagementEndpoints.listSummarySchool
  );
};
